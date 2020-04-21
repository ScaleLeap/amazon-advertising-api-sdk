import { AmazonAdvertising } from '../src/amazon-advertising'
import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { auth } from './http-client-factory'
import { SponsoredProductsCampaignOperation } from '../src'

const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.JP, auth)
const operation = amazonAdvertising.getSponsoredProductsCampaignOperation()

describe('AmazonAdvertising', () => {
  it('should return SponsoredProductsCampaignOperation', () => {
    expect(operation).toBeInstanceOf(SponsoredProductsCampaignOperation)
  })

  describe('SponsoredProductsCampaignOperation', () => {
    it('should return an array of campaigns', async () => {
      const res = await operation.listCampaigns()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })
})
