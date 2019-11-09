import { OperationProvider } from '../src/operations/operation-provider'
import { SponsoredBrandsCampaignOperation } from '../src/operations/campaigns/sb-campaign-operation'
import { httpClientFactory } from './http-client-factory'
import setupPolly from './polly'

setupPolly()

describe('SponsoredBrandsCampaignOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const campaignOperation = operationProvider.create(SponsoredBrandsCampaignOperation)
  const CAMPAIGN_ID = 31299234922913

  describe('listCampaigns', () => {
    it('should return an array of campaigns', async () => {
      const res = await campaignOperation.listCampaigns()
      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  // Skip: Sponsored brand campaign list is empty
  describe.skip('getCampaign', () => {
    it('should return a single campaign', async () => {
      const res = await campaignOperation.getCampaign(CAMPAIGN_ID)
      expect(res).toBeTruthy()
    })
  })
})
