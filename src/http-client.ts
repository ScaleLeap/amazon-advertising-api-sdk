import { axios, Method, AxiosResponse } from './axios'
import HttpStatus from 'http-status-codes'
import jsonBigInt from 'json-bigint'

import { JSON_CONTENT_TYPE } from './constants'
import { apiErrorFactory, NullError, InvalidProgramStateError } from './errors'
import gunzip from './gunzip'
import { inspect } from 'util'
import get from 'lodash/get'

export interface HttpClientAuth {
  accessToken: string
  clientId: string
  scope: number
}

export type RequestBody = object | object[]

export type Headers = Record<string, string>

interface HttpClientRequestParams {
  method: Method
  uri: string
  body?: unknown
  headers?: Headers
}

interface BigInt {
  /** Convert to BigInt to string form in JSON.stringify */
  toJSON: () => string
}

if (typeof BigInt !== 'undefined') {
  Object.assign(BigInt.prototype, {
    toJSON: function () {
      return jsonBigInt().stringify(this)
    },
  })
}

export class HttpClient {
  private get headers(): Headers {
    const headers: Headers = {
      'Content-Type': JSON_CONTENT_TYPE,
      Authorization: `Bearer ${this.auth.accessToken}`,
      'Amazon-Advertising-API-ClientId': this.auth.clientId,
    }

    if (this.auth.scope) {
      headers['Amazon-Advertising-API-Scope'] = this.auth.scope.toString()
    }

    // https://advertising.amazon.com/API/docs/v2/reference/bidding/bid_controls
    if (this.sandbox) {
      headers['BIDDING_CONTROLS_ON'] = 'true'

      // prevent gzip in sandbox/dev for nock to catch uncompressed response
      headers['Accept-Encoding'] = JSON_CONTENT_TYPE
    }

    return headers
  }

  public readonly httpStatus = HttpStatus

  private readonly json = jsonBigInt({
    alwaysParseAsBig: true,
    storeAsString: true,
    useNativeBigInt: true,
  })

  public constructor(
    private readonly uri: string,
    private readonly auth: HttpClientAuth,
    private readonly sandbox = false,
  ) {}

  private async request<T>(params: HttpClientRequestParams) {
    return axios.request<T>({
      responseType: 'json',
      url: params.uri,
      method: params.method,
      headers: params.headers,
      data: params.body,
      maxRedirects: 0,
      validateStatus: () => true,
      transformResponse: (res) => {
        if (typeof res === 'string') {
          try {
            return this.json.parse(res)
          } catch {
            return res
          }
        }

        return res
      },
      transformRequest: (req) => {
        if (typeof req === 'object') {
          return this.json.stringify(req)
        }

        return req
      },
    })
  }

  private handleApiResponse<T>(res: AxiosResponse): Promise<T> {
    const { status, headers, data, config } = res

    if (status === this.httpStatus.OK && !data) {
      throw new NullError(config.url || '')
    }

    const badRequest = status >= this.httpStatus.BAD_REQUEST

    // Documented API Error
    // https://advertising.amazon.com/API/docs/v2/guides/developer_notes#Error-response
    if (badRequest && data && get(data, 'code')) {
      throw apiErrorFactory(data, headers)
    }

    if (badRequest && typeof data === 'object' && !get(data, 'code')) {
      throw apiErrorFactory(
        {
          code: status.toString(),
          details: inspect(data),
        },
        headers,
      )
    }

    if (badRequest && typeof data === 'string') {
      throw apiErrorFactory(
        {
          code: status.toString(),
          details: data,
        },
        headers,
      )
    }

    // We don't have a body, so it's an unpredictable error, but let's try to structure it
    // anyways for completeness sake
    if (badRequest && !data) {
      throw apiErrorFactory(
        {
          code: status.toString(),
          details: res.statusText,
        },
        headers,
      )
    }

    // should not happen, but a catch all just in case
    if (badRequest) {
      throw new InvalidProgramStateError(data)
    }

    if (status < this.httpStatus.MULTIPLE_CHOICES && data) {
      return data
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
        headers: { ...this.headers, ...params.headers },
      }),
    )
  }

  public async get<T>(resource: string, extraHeaders: Headers = {}): Promise<T> {
    return this.apiRequest<T>({
      method: 'GET',
      uri: resource,
      headers: extraHeaders,
    })
  }

  public async put<T>(resource: string, body: RequestBody, extraHeaders: Headers = {}): Promise<T> {
    return this.apiRequest<T>({
      method: 'PUT',
      uri: resource,
      body: JSON.stringify(body),
      headers: extraHeaders,
    })
  }

  public async post<T>(
    resource: string,
    body: RequestBody,
    extraHeaders: Headers = {},
  ): Promise<T> {
    return this.apiRequest<T>({
      method: 'POST',
      uri: resource,
      body: JSON.stringify(body),
      headers: extraHeaders,
    })
  }

  public async delete<T>(resource: string, extraHeaders: Headers = {}): Promise<T> {
    return this.apiRequest<T>({
      method: 'DELETE',
      uri: resource,
      headers: extraHeaders,
    })
  }

  public async download<T>(resource: string, headers: Headers = {}): Promise<T> {
    const res = await this.request({
      method: 'GET',
      uri: this.apiUri(resource),
      headers: { ...this.headers, ...headers },
    })

    // checks for common errors, we don't care about the result, as we expect it to throw
    // if any failures are detected
    this.handleApiResponse(res)

    const location: string | null = res.headers['location']
    if (res.status !== this.httpStatus.TEMPORARY_REDIRECT || !location) {
      throw new InvalidProgramStateError(['Expected a signed URL.', res.statusText].join(' '))
    }

    const download = await axios.get<ArrayBuffer>(location, {
      responseType: 'arraybuffer',
    })

    if (download.status !== this.httpStatus.OK) {
      throw new InvalidProgramStateError(`Expected OK HTTP status, but got: ${res.statusText}`)
    }

    const buffer = Buffer.from(download.data)
    const contentType: string = download.headers['content-type']

    const bufferToJson = (buf: Buffer): T => {
      return JSON.parse(buf.toString())
    }

    switch (contentType) {
      case JSON_CONTENT_TYPE:
        return bufferToJson(buffer)
      case 'application/x-gzip':
      case 'application/octet-stream':
        return gunzip(buffer)
          .then(bufferToJson)
          .catch(() => {
            const bufferHex = Buffer.from(buffer.toString(), 'hex')
            return gunzip(bufferHex).then(bufferToJson)
          })
      default:
        throw new InvalidProgramStateError(`Unknown Content-Type: ${contentType}`)
    }
  }
}
