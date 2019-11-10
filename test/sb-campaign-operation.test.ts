import { OperationProvider } from '../src/operations/operation-provider'
import { SponsoredBrandsCampaignOperation } from '../src/operations/campaigns/sb-campaign-operation'
import {
  CampaignType,
  CampaignState,
  CampaignTargetingType,
} from '../src/operations/campaigns/types'
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

  // Return an error: No resource method found for POST, return 405 with Allow header
  describe.skip('createCampaigns', () => {
    it('should create a campaign', async () => {
      const res = await campaignOperation.createCampaigns([
        {
          name: 'test campaign 4',
          campaignType: CampaignType.value,
          dailyBudget: 1,
          state: CampaignState.types[0].value,
          targetingType: CampaignTargetingType.types[0].value,
          startDate: '20190301',
          premiumBidAdjustment: true,
        },
      ])

      expect(Array.isArray(res)).toBeTruthy()
    })
  })
})
