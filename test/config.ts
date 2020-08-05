import { BaseConfig } from '@scaleleap/config'

export class Config extends BaseConfig {
  public readonly TEST_CLIENT_ID = this.get('TEST_CLIENT_ID').asString()
  public readonly TEST_CLIENT_SECRET = this.get('TEST_CLIENT_SECRET').asString()
  public readonly TEST_SCOPE = this.get('TEST_SCOPE').asIntPositive()
  public readonly TEST_ACCESS_TOKEN = this.get('TEST_ACCESS_TOKEN').asString()
  public readonly TEST_REFRESH_TOKEN = this.get('TEST_REFRESH_TOKEN').asString()

  public readonly TEST_OAUTH_REDIRECT_PORT = this.get('TEST_OAUTH_REDIRECT_PORT')
    .default(3000)
    .asIntPositive()
}

export const config = new Config()
