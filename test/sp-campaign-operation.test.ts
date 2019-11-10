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
  const CAMPAIGN_ID = 31299234922913

  describe('listCampaigns', () => {
    it('should return an array of campaigns', async () => {
      const res = await campaignOperation.listCampaigns()
      expect(Array.isArray(res)).toBeTruthy()
      expect(typeof res[0].name).toBe('string')
      expect(res[0]).toHaveProperty('bidding')
    })
  })

  describe('listCampaignsEx', () => {
    it('should return an array of expanded campaigns', async () => {
      const res = await campaignOperation.listCampaignsEx()
      expect(Array.isArray(res)).toBeTruthy()
      expect(typeof res[0].name).toBe('string')
      expect(res[0]).toHaveProperty('bidding')
    })

    it('should return a filtered list of results', async () => {
      const res = await campaignOperation.listCampaignsEx({
        campaignIdFilter: [CAMPAIGN_ID],
      })
      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].campaignId).toBe(CAMPAIGN_ID)
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
      const res = await campaignOperation.createCampaigns([
        {
          name: 'test campaign 4',
          campaignType: CampaignType.value,
          dailyBudget: 1,
          state: CampaignState.types[0].value,
          targetingType: CampaignTargetingType.types[0].value,
          startDate: new Date()
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, ''),
          premiumBidAdjustment: true,
        },
      ])

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('updateCampaigns', () => {
    it('should update a campaign', async () => {
      const portfolioId = 77985496739778
      const name = 'new name'
      const state = CampaignState.types[1].value
      const dailyBudget = 7

      const res = await campaignOperation.updateCampaigns([
        {
          campaignId: CAMPAIGN_ID,
          portfolioId,
          name,
          state,
          dailyBudget,
        },
      ])

      expect(Array.isArray(res)).toBeTruthy()

      const campaign = await campaignOperation.getCampaign(CAMPAIGN_ID)

      expect(campaign.portfolioId).toBe(portfolioId)
      expect(campaign.name).toBe(name)
      expect(campaign.state).toBe(state)
      expect(campaign.dailyBudget).toBe(dailyBudget)
    })
  })
})
