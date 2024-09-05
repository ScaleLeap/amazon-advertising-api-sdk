import ClientOAuth2 from 'client-oauth2'
import { Options } from 'client-oauth2'
import { defaultsDeep } from 'lodash'
import { USER_AGENT } from './constants'
import { Marketplace } from './maketplace'
import type { Headers } from './http-client'
import { axios, Method } from './axios'

const request: ClientOAuth2.Request = async (
  method,
  url,
  body,
  headerRecord,
): ReturnType<ClientOAuth2.Request> => {
  const headers: Headers = {
    'Accept-Encoding': 'application/json',
    'User-Agent': USER_AGENT,
    ...headerRecord,
  }

  const { status, data } = await axios.request({
    url,
    method: method as Method,
    headers,
    data: body,
  })

  return {
    status,
    body: JSON.stringify(data),
  }
}

export class OAuthClient {
  // https://advertising.amazon.com/API/docs/v2/guides/authorization

  private client: ClientOAuth2

  public constructor(private readonly opts: Options, marketplace: Marketplace) {
    const amazonOptions = {
      accessTokenUri: marketplace.advertising.region.accessTokenUri,
      authorizationUri: marketplace.advertising.region.authorizationUri,
      scopes: ['cpc_advertising:campaign_management'],
    }

    this.client = new ClientOAuth2(defaultsDeep({}, opts, amazonOptions), request)
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
