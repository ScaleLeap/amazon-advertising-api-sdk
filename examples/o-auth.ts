import { OAuthClient } from '../src'
import { amazonMarketplaces, assertMarketplaceHasAdvertising } from '@scaleleap/amazon-marketplaces'

const REDIRECT_URI = 'https://www.example.com/success'

assertMarketplaceHasAdvertising(amazonMarketplaces.CA)

const client = new OAuthClient(
  {
    clientId: 'amzn1.application-oa2-client.***',
    clientSecret: '...',
    redirectUri: REDIRECT_URI,
  },
  amazonMarketplaces.CA,
)

// eslint-disable-next-line no-console
console.info('Visit %s to start authentication.', client.getUri())
