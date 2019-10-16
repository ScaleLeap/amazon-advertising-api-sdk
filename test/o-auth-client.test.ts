import { OAuthClient } from '../src/o-auth-client'
import { Token } from 'client-oauth2'
import { config } from './config'
import { PollyJS } from './pollyjs/polly'
import { parse, stringify } from 'querystring'

const URI = 'https://example.com'
const PLACEHOLDER = 'x'
const pollyJs = new PollyJS('RefreshToken')
const server = pollyJs.getPollyServer()
const polly = pollyJs.getPollyInstance()

server.post('https://api.amazon.com/auth/o2/token').on('beforeResponse', (req, res) => {
  req.body = stringify(
    Object.assign(parse(req.body), {
      refresh_token: PLACEHOLDER
    })
  )

  req.setHeader('authorization', `Basic ${PLACEHOLDER}`)

  res.body = JSON.stringify(
    Object.assign(JSON.parse(res.body), {
      access_token: PLACEHOLDER,
      refresh_token: PLACEHOLDER
    })
  )
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
    const token = client.createToken(PLACEHOLDER, PLACEHOLDER)
    expect(token).toBeInstanceOf(Token)
  })

  it('refresh an existing token polly:passthrough', async () => {
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

    expect(res.accessToken).toBe(PLACEHOLDER)
    expect(res.refreshToken).toBe(PLACEHOLDER)
    expect(res.tokenType).toBe('bearer')

    await polly.stop()
  })
})
