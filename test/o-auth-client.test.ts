import { OAuthClient } from '../src/o-auth-client'
import { Token } from 'client-oauth2'
import { config } from './config'

const URI = 'https://example.com'

describe(OAuthClient.name, () => {
  let client: OAuthClient

  beforeEach(() => {
    client = new OAuthClient({
      clientId: 'foo',
      clientSecret: 'foo',
      redirectUri: URI,
    })
  })

  it('should provide a correct uri', () => {
    const uri = client.getUri()
    expect(uri).toMatch(new RegExp('^https://www.amazon.com/'))
  })

  it('should have required methods', () => {
    expect(client).toHaveProperty('getUri')
    expect(client).toHaveProperty('getToken')
    expect(client).toHaveProperty('createToken')
  })

  it('createToken returns a token object', () => {
    const token = client.createToken('x', 'x')
    expect(token).toBeInstanceOf(Token)
  })

  it.skip('refresh an existing token', async () => {
    client = new OAuthClient({
      clientId: config.TEST_CLIENT_ID,
      clientSecret: config.TEST_CLIENT_SECRET,
      redirectUri: URI,
    })

    const token = client.createToken(
      config.TEST_ACCESS_TOKEN || '',
      config.TEST_REFRESH_TOKEN || '',
    )

    const res = await token.refresh()

    expect(res).toHaveProperty('accessToken')
    expect(res).toHaveProperty('refreshToken')
    expect(res.tokenType).toBe('bearer')
  })
})
