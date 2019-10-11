import { OAuthClient } from '../src/o-auth-client'
import { Token } from 'client-oauth2'
import { config } from './config'
import { PollyJS } from './pollyjs/polly'

const URI = 'https://example.com'
const pollyJs = new PollyJS('RefreshToken')
const server = pollyJs.getPollyServer()
const polly = pollyJs.getPollyInstance()

server.post('https://api.amazon.com/auth/o2/token').on('beforeResponse', (req, res) => {
  req.send({
    grant_type: 'refresh_token',
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
    refresh_token: 'Atzr|IQEBLzAtAhRPpMJxdwVz2Nn6f2y-tpJX2DeX...',
  })
  res.send({
    access_token: 'Atza|IQEBLjAsAhRmHjNgHpi0U-Dme37rR6CuUpSR...',
    token_type: 'bearer',
    expires_in: 3600,
    refresh_token: 'Atzr|IQEBLzAtAhRPpMJxdwVz2Nn6f2y-tpJX2DeX...',
  })
})

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

  it('refresh an existing token', async () => {
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

    await polly.stop()
  })
})
