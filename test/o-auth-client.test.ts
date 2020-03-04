import { OAuthClient } from '../src/o-auth-client'
import { Token } from 'client-oauth2'
import { config } from './config'
import { parse, stringify } from 'querystring'
import { POLLY_PASSTHROUGH_TAG } from './constants'
import { jestPollyContext } from '@scaleleap/jest-polly'

const URI = 'https://example.com'
const PLACEHOLDER = 'x'

describe(OAuthClient.name, () => {
  let client: OAuthClient

  beforeEach(() => {
    client = new OAuthClient({
      clientId: 'foo',
      clientSecret: 'foo',
      redirectUri: URI,
    })

    jestPollyContext.polly.server
      .post('https://api.amazon.com/auth/o2/token')
      .on('beforeResponse', (req, res) => {
        /* eslint-disable @typescript-eslint/camelcase */
        req.body = stringify(
          Object.assign(parse(req.body), {
            refresh_token: PLACEHOLDER,
          }),
        )

        req.setHeader('authorization', `Basic ${PLACEHOLDER}`)

        res.body = JSON.stringify(
          Object.assign(JSON.parse(res.body), {
            access_token: PLACEHOLDER,
            refresh_token: PLACEHOLDER,
          }),
        )
        /* eslint-enable @typescript-eslint/camelcase */
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

  it(`refresh an existing token ${POLLY_PASSTHROUGH_TAG}`, async () => {
    client = new OAuthClient({
      clientId: config.TEST_CLIENT_ID,
      clientSecret: config.TEST_CLIENT_SECRET,
      redirectUri: URI,
    })

    const token = client.createToken(
      config.TEST_ACCESS_TOKEN || 'x',
      config.TEST_REFRESH_TOKEN || 'x',
    )

    const res = await token.refresh()

    expect(res.accessToken).toBe(PLACEHOLDER)
    expect(res.refreshToken).toBe(PLACEHOLDER)
    expect(res.tokenType).toBe('bearer')
  })
})
