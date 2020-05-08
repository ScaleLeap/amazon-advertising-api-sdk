import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { AmazonAdvertising } from '../src'

const auth = {
  accessToken: 'Atza|IQEBLjAsAhRmHjNgHpi0U...',
  clientId: 'amzn1.application-oa2-client.a8358a60...',
  scope: 1234567890,
}
export const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.US, auth)
