import fetch, { Headers } from 'cross-fetch'
import HttpStatus from 'http-status-codes'

import { USER_AGENT, JSON_CONTENT_TYPE } from './constants'
import { apiErrorFactory, NullError, InvalidProgramStateError } from './errors'
import gunzip from './gunzip'

export interface HttpClientAuth {
  authorizationToken: string
  clientId: string
  scope: number
}

enum HttpMethod {
  GET,
  POST,
  PUT,
  DELETE,
}

type RequestBody = object | object[]

interface HttpClientRequestParams {
  method: HttpMethod
  uri: string
  body?: RequestInit['body']
  headers?: Headers
}

export class HttpClient {
  private get headers(): Headers {
    const headers = new Headers({
      'Content-Type': JSON_CONTENT_TYPE,
      Accept: JSON_CONTENT_TYPE,
      Authorization: `Bearer ${this.auth.authorizationToken}`,
      'Amazon-Advertising-API-ClientId': this.auth.clientId,
      'User-Agent': USER_AGENT,
    })

    if (this.auth.scope) {
      headers.append('Amazon-Advertising-API-Scope', this.auth.scope.toString())
    }

    // https://advertising.amazon.com/API/docs/v2/reference/bidding/bid_controls
    if (this.sandbox) {
      headers.append('BIDDING_CONTROLS_ON', 'true')

      // prevent gzip in sandbox/dev for nock to catch uncompressed response
      headers.append('Accept-Encoding', JSON_CONTENT_TYPE)
    }

    return headers
  }

  public readonly httpStatus = HttpStatus

  public constructor(
    private readonly uri: string,
    private readonly auth: HttpClientAuth,
    private readonly sandbox = false,
  ) {}

  private fetch(uri: string, req?: RequestInit): Promise<Response> {
    return fetch(uri, req)
  }

  private async request(params: HttpClientRequestParams): Promise<Response> {
    const req: RequestInit = {
      redirect: 'manual',
      method: HttpMethod[params.method],
      headers: params.headers,
      body: params.body,
    }

    return this.fetch(params.uri, req)
  }

  private async handleApiResponse<T>(res: Response): Promise<T> {
    const { status } = res
    const text = await res.text()

    if (status === this.httpStatus.OK && !text) {
      throw new NullError(res.url)
    }

    if (status >= this.httpStatus.BAD_REQUEST) {
      // We have a response body, so it *might* be a documented response
      if (text) {
        const json = JSON.parse(text)

        // Documented API Error
        // https://advertising.amazon.com/API/docs/v2/guides/developer_notes#Error-response
        if (json && json.code) {
          throw apiErrorFactory(json)
        }

        throw new InvalidProgramStateError(JSON.stringify(res))
      } else {
        // We don't have a body, so it's an unpredictable error, but let's try to structure it
        // anyways for completeness sake
        throw apiErrorFactory({
          code: status.toString(),
          details: res.statusText,
          requestId: res.headers.get('x-amz-request-id') || res.headers.get('x-amz-rid') || '',
        })
      }
    }

    if (status < this.httpStatus.MULTIPLE_CHOICES && text) {
      return JSON.parse(text)
    }

    if (status >= this.httpStatus.MULTIPLE_CHOICES && status < this.httpStatus.BAD_REQUEST) {
      return JSON.parse('null')
    }

    throw new InvalidProgramStateError(res.statusText)
  }

  private apiUri(resource: string): string {
    return `${this.uri}/${resource}`
  }

  private async apiRequest<T>(params: HttpClientRequestParams): Promise<T> {
    return this.handleApiResponse<T>(
      await this.request({
        ...params,
        uri: this.apiUri(params.uri),
        headers: this.headers,
      }),
    )
  }

  public async get<T>(resource: string): Promise<T> {
    return this.apiRequest<T>({
      method: HttpMethod.GET,
      uri: resource,
    })
  }

  public async put<T>(resource: string, body: RequestBody): Promise<T> {
    return this.apiRequest<T>({
      method: HttpMethod.PUT,
      uri: resource,
      body: JSON.stringify(body),
    })
  }

  public async post<T>(resource: string, body: RequestBody): Promise<T> {
    return this.apiRequest<T>({
      method: HttpMethod.POST,
      uri: resource,
      body: JSON.stringify(body),
    })
  }

  public async delete<T>(resource: string): Promise<T> {
    return this.apiRequest<T>({
      method: HttpMethod.DELETE,
      uri: resource,
    })
  }

  public async download<T>(resource: string): Promise<T> {
    const res = await this.request({
      method: HttpMethod.GET,
      uri: this.apiUri(resource),
      headers: this.headers,
    })

    // checks for common errors, we don't care about the result, as we expect it to throw
    // if any failures are detected
    await this.handleApiResponse(res.clone())

    const location: string | null = res.headers.get('Location')
    if (res.status !== this.httpStatus.TEMPORARY_REDIRECT || !location) {
      throw new InvalidProgramStateError(['Expected a signed URL.', res.statusText].join(' '))
    }

    const download = await this.fetch(location)

    if (download.status !== this.httpStatus.OK) {
      throw new InvalidProgramStateError(`Expected OK HTTP status, but got: ${res.statusText}`)
    }

    const buffer = await download.arrayBuffer().then(res => Buffer.from(res))
    const contentType = download.headers.get('Content-Type')

    const bufferToJson = (buf: Buffer): T => {
      return JSON.parse(buf.toString())
    }

    switch (contentType) {
      case JSON_CONTENT_TYPE:
        return bufferToJson(buffer)
      case 'application/octet-stream':
        return gunzip(buffer)
          .then(bufferToJson)
          .catch(_ => {
            const bufferHex = Buffer.from(buffer.toString(), 'hex')
            return gunzip(bufferHex).then(bufferToJson)
          })
      default:
        throw new InvalidProgramStateError(`Unknown Content-Type: ${contentType}`)
    }
  }
}
