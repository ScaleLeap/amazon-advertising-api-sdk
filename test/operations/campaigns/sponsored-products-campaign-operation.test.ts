import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredProductsCampaignOperation } from '../../../src/operations/campaigns/sponsored-products-campaign-operation'
import {
  CampaignStateEnum,
  CampaignTargetingEnum,
  CampaignTypeEnum,
  CampaignBidding,
} from '../../../src/operations/campaigns/types'
import { httpClientFactory } from '../../http-client-factory'
import { DateTimeUtils } from '../../test-utils'
import { CampaignBiddingStrategyEnum } from '../../../src/operations/bidding/campaign-bidding-strategy'
import { CampaignBiddingAdjustmentsPredicateEnum } from '../../../src/operations/bidding/campaign-bidding-adjustments-predicate'

describe('SponsoredProductsCampaignOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const campaignOperation = operationProvider.create(SponsoredProductsCampaignOperation)
  const startDate = DateTimeUtils.getCurrentISODate()
  const CAMPAIGN_ID = 31299234922913

  describe('listCampaigns', () => {
    it(`should return an array of campaigns`, async () => {
      const res = await campaignOperation.listCampaigns()
      expect(Array.isArray(res)).toBeTruthy()
      expect(typeof res[0].name).toBe('string')
      expect(res[0]).toHaveProperty('bidding')
    })
  })

  describe('listCampaignsEx', () => {
    it(`should return an array of expanded campaigns`, async () => {
      const res = await campaignOperation.listCampaignsEx()
      expect(Array.isArray(res)).toBeTruthy()
      expect(typeof res[0].name).toBe('string')
      expect(res[0]).toHaveProperty('bidding')
    })

    it(`should return a filtered list of results`, async () => {
      const res = await campaignOperation.listCampaignsEx({
        campaignIdFilter: [CAMPAIGN_ID],
      })
      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].campaignId).toBe(CAMPAIGN_ID)
    })
  })

  describe('getCampaign', () => {
    it(`should return a single campaign`, async () => {
      const res = await campaignOperation.getCampaign(CAMPAIGN_ID)
      expect(res.campaignId).toBe(CAMPAIGN_ID)
      expect(res).toHaveProperty('bidding')
    })
  })

  describe('getCampaignEx', () => {
    it(`should return a single extended campaign`, async () => {
      const res = await campaignOperation.getCampaignEx(CAMPAIGN_ID)
      expect(res).toBeTruthy()
    })
  })

  describe('createCampaigns', () => {
    it(`should create a campaign`, async () => {
      const res = await campaignOperation.createCampaigns([
        {
          name: 'test campaign 4',
          campaignType: CampaignTypeEnum.SPONSORED_PRODUCTS,
          dailyBudget: 1,
          state: CampaignStateEnum.ENABLED,
          targetingType: CampaignTargetingEnum.MANUAL,
          startDate,
        },
      ])

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should create a campaign with auto bidding controls`, async () => {
      const bidding: CampaignBidding = {
        strategy: CampaignBiddingStrategyEnum.AUTO_FOR_SALES,
        adjustments: [
          {
            predicate: CampaignBiddingAdjustmentsPredicateEnum.PLACEMENT_TOP,
            percentage: 900,
          },
        ],
      }

      const [createdCampaignResponse] = await campaignOperation.createCampaigns([
        {
          name: `test campaign ${startDate + 1}`,
          campaignType: CampaignTypeEnum.SPONSORED_PRODUCTS,
          dailyBudget: 1,
          state: CampaignStateEnum.PAUSED,
          targetingType: CampaignTargetingEnum.MANUAL,
          startDate,
          bidding,
        },
      ])

      expect(createdCampaignResponse.code).toBe('SUCCESS')

      if (createdCampaignResponse.code === 'SUCCESS') {
        const res = await campaignOperation.getCampaign(createdCampaignResponse.campaignId)
        expect(res.bidding).toMatchObject(bidding)
      }
    })
  })

  describe('updateCampaigns', () => {
    const portfolioId = 77985496739778
    const name = 'new name'
    const state = CampaignStateEnum.PAUSED
    const dailyBudget = 7

    it(`should update a campaign`, async () => {
      const [updateCampaignResponse] = await campaignOperation.updateCampaigns([
        {
          campaignId: CAMPAIGN_ID,
          portfolioId,
          name,
          state,
          dailyBudget,
        },
      ])
      const campaign = await campaignOperation.getCampaign(updateCampaignResponse.campaignId)

      expect(campaign.portfolioId).toBe(portfolioId)
      expect(campaign.name).toBe(name)
      expect(campaign.state).toBe(state)
      expect(campaign.dailyBudget).toBe(dailyBudget)
    })

    it(`should update a campaign with manual bidding controls`, async () => {
      const bidding: CampaignBidding = {
        strategy: CampaignBiddingStrategyEnum.MANUAL,
        adjustments: [
          {
            predicate: CampaignBiddingAdjustmentsPredicateEnum.PLACEMENT_TOP,
            percentage: 1,
          },
          {
            predicate: CampaignBiddingAdjustmentsPredicateEnum.PLACEMENT_PRODUCT_PAGE,
            percentage: 2,
          },
        ],
      }

      const [updateCampaignResponse] = await campaignOperation.updateCampaigns([
        {
          campaignId: CAMPAIGN_ID,
          portfolioId,
          name,
          state,
          dailyBudget,
          bidding,
        },
      ])

      expect(updateCampaignResponse.code).toBe('SUCCESS')
    })
  })

  describe('archiveCampaign', () => {
    it(`should set the campaign to archived state`, async () => {
      const ARCHIVED_CAMPAIGN_ID = 60376914769424
      const res = await campaignOperation.archiveCampaign(ARCHIVED_CAMPAIGN_ID)
      expect(res.code).toBe('SUCCESS')

      const campaign = await campaignOperation.getCampaign(ARCHIVED_CAMPAIGN_ID)
      expect(campaign.state).toBe(CampaignStateEnum.ARCHIVED)
    })
  })
})
