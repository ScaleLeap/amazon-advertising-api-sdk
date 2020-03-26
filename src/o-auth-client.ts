import ClientOAuth2 from 'client-oauth2'
import { Options } from 'client-oauth2'
import fetch, { Headers } from 'cross-fetch'
import { defaultsDeep } from 'lodash'
import { USER_AGENT } from './constants'
import { AmazonMarketplace } from '@scaleleap/amazon-marketplaces'

const request: ClientOAuth2.Request = async (
  method,
  url,
  body,
  headerRecord,
): ReturnType<ClientOAuth2.Request> => {
  const headers = new Headers()
  headers.append('Accept-Encoding', 'application/json') // disable compression
  headers.append('User-Agent', USER_AGENT)
  Object.keys(headerRecord).map((key) => headers.append(key, headerRecord[key] as string))

  const req: RequestInit = {
    method,
    headers,
    body,
  }

  const res = await fetch(url, req)

  return {
    status: res.status,
    body: await res.text(),
  }
}

export class OAuthClient {
  // https://advertising.amazon.com/API/docs/v2/guides/authorization

  private client: ClientOAuth2

  public constructor(private readonly opts: Options, amazonMarketplace: AmazonMarketplace) {
    const { advertising } = amazonMarketplace

    if (!advertising) {
      throw new Error(`${amazonMarketplace.name} marketplace does not have Amazon Advertising.`)
    }

    const amazonOptions = {
      accessTokenUri: advertising.region.accessTokenUri,
      authorizationUri: advertising.region.authorizationUri,
      scopes: ['cpc_advertising:campaign_management'],
    }

    this.client = new ClientOAuth2(defaultsDeep({}, this.opts, amazonOptions), request)
  }

  public get getUri() {
    return this.client.code.getUri.bind(this)
  }

  public get getToken() {
    return this.client.code.getToken.bind(this)
  }

  public createToken(accessToken: string, refreshToken: string) {
    return this.client.createToken(accessToken, refreshToken, 'bearer', {})
  }
}
