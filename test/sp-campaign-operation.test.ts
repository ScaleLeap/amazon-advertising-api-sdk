import { OperationProvider } from '../src/operations/operation-provider'
import { SponsoredProductsCampaignOperation } from '../src/operations/campaigns/sp-campaign-operation'
import {
  CampaignType,
  CampaignState,
  CampaignTargetingType,
} from '../src/operations/campaigns/types'
import { httpClientFactory } from './http-client-factory'
import setupPolly from './polly'

setupPolly()

describe('SponsoredProductsCampaignOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const campaignOperation = operationProvider.create(SponsoredProductsCampaignOperation)
  const TEST_PROFILE_ID = 2984328618318898
  const CAMPAIGN_ID = 31299234922913

  describe('Sponsored Brands', () => {
    describe('listCampaigns', () => {
      it('should return an array of campaigns', async () => {
        const res = await campaignOperation.listCampaigns()
        expect(Array.isArray(res)).toBeTruthy()
        expect(typeof res[0].name).toBe('string')
        expect(res[0]).toHaveProperty('bidding')
      })
    })

    describe('getCampaign', () => {
      it('should return a single campaign', async () => {
        const res = await campaignOperation.getCampaign(CAMPAIGN_ID)
        expect(res.campaignId).toBe(CAMPAIGN_ID)
        expect(res).toHaveProperty('bidding')
      })
    })

    describe('createCampaigns', () => {
      it('should create a campaign', async () => {
        const res = await campaignOperation.createCampaigns(TEST_PROFILE_ID, [
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
})
