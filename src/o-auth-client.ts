import ClientOAuth2 from 'client-oauth2'
import { Options } from 'client-oauth2'
import { defaultsDeep } from 'lodash'

export class OAuthClient {
  // https://advertising.amazon.com/API/docs/v2/guides/authorization
  private readonly amazonOptions: Options = {
    accessTokenUri: 'https://api.amazon.com/auth/o2/token',
    authorizationUri: 'https://www.amazon.com/ap/oa',
    scopes: ['cpc_advertising:campaign_management'],
  }

  private readonly client = new ClientOAuth2(defaultsDeep({}, this.opts, this.amazonOptions))

  public constructor(private readonly opts: Options) {}

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
