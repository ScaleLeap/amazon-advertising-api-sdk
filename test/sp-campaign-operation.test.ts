import { OperationProvider } from '../src/operations/operation-provider'
import { SponsoredProductsCampaignOperation } from '../src/operations/campaigns/sp-campaign-operation'
import {
  CampaignType,
  CampaignState,
  CampaignTargetingType,
} from '../src/operations/campaigns/types'
import { httpClientFactory } from './http-client-factory'
import setupPolly from './polly'
import { POLLY_PASSTHROUGH_TAG } from './constants'

setupPolly()

describe('SponsoredProductsCampaignOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const campaignOperation = operationProvider.create(SponsoredProductsCampaignOperation)
  const CAMPAIGN_ID = 31299234922913

  describe('listCampaigns', () => {
    it(`should return an array of campaigns ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await campaignOperation.listCampaigns()
      expect(Array.isArray(res)).toBeTruthy()
      expect(typeof res[0].name).toBe('string')
      expect(res[0]).toHaveProperty('bidding')
    })
  })

  describe('listCampaignsEx', () => {
    it(`should return an array of expanded campaigns ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await campaignOperation.listCampaignsEx()
      expect(Array.isArray(res)).toBeTruthy()
      expect(typeof res[0].name).toBe('string')
      expect(res[0]).toHaveProperty('bidding')
    })

    it(`should return a filtered list of results ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await campaignOperation.listCampaignsEx({
        campaignIdFilter: [CAMPAIGN_ID],
      })
      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].campaignId).toBe(CAMPAIGN_ID)
    })
  })

  describe('getCampaign', () => {
    it(`should return a single campaign ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await campaignOperation.getCampaign(CAMPAIGN_ID)
      expect(res.campaignId).toBe(CAMPAIGN_ID)
      expect(res).toHaveProperty('bidding')
    })
  })

  describe('getCampaignEx', () => {
    it(`should return a single extended campaign ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await campaignOperation.getCampaignEx(CAMPAIGN_ID)
      expect(res).toBeTruthy()
    })
  })

  describe('createCampaigns', () => {
    it(`should create a campaign ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await campaignOperation.createCampaigns([
        {
          name: 'test campaign 4',
          campaignType: CampaignType.value,
          dailyBudget: 1,
          state: CampaignState.ENABLED,
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
    it(`should update a campaign ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const portfolioId = 77985496739778
      const name = 'new name'
      const state = CampaignState.PAUSED
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

  describe('archiveCampaign', () => {
    it(`should set the campaign to archived state ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const ARCHIVED_CAMPAIGN_ID = 60376914769424
      const res = await campaignOperation.archiveCampaign(ARCHIVED_CAMPAIGN_ID)
      expect(res.code).toBe('SUCCESS')

      const campaign = await campaignOperation.getCampaign(ARCHIVED_CAMPAIGN_ID)
      expect(campaign.state).toBe(CampaignState.ARCHIVED)
    })
  })
})
