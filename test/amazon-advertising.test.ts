import { AmazonAdvertising } from '../src/amazon-advertising'
import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { auth } from './http-client-factory'
import { SponsoredProductsCampaignOperation } from '../src'

const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.JP, auth)
const operation = amazonAdvertising.sponsoredProductsCampaignOperation

describe('AmazonAdvertising', () => {
  it('should return SponsoredProductsCampaignOperation', () => {
    expect(operation).toBeInstanceOf(SponsoredProductsCampaignOperation)
  })
})
