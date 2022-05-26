import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredProductsCampaignOperation } from '../../../src/operations/campaigns/sponsored-products-campaign-operation'
import { CampaignBidding, CampaignState } from '../../../src/operations/campaigns/types'
import { httpClientFactory } from '../../http-client-factory'

describe('SponsoredProductsCampaignOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const campaignOperation = operationProvider.create(SponsoredProductsCampaignOperation)
  const startDate = '20200310'
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
      const res = await campaignOperation.listCampaignsExtended()
      expect(Array.isArray(res)).toBeTruthy()
      expect(typeof res[0].name).toBe('string')
      expect(res[0]).toHaveProperty('bidding')
    })

    it(`should return a filtered list of results`, async () => {
      const res = await campaignOperation.listCampaignsExtended({
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
      const res = await campaignOperation.getCampaignExtended(CAMPAIGN_ID)
      expect(res).toBeTruthy()
    })
  })

  describe.skip('createCampaigns', () => {
    it(`should create a campaign`, async () => {
      const res = await campaignOperation.createCampaigns([
        {
          name: 'test campaign 2020/03/10 22:26:01',
          campaignType: 'sponsoredProducts',
          dailyBudget: 1,
          state: 'enabled',
          targetingType: 'manual',
          startDate,
        },
      ])

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should create a campaign with auto bidding controls`, async () => {
      expect.assertions(2)
      const bidding: CampaignBidding = {
        strategy: 'autoForSales',
        adjustments: [
          {
            predicate: 'placementTop',
            percentage: 900,
          },
        ],
      }

      const [createdCampaignResponse] = await campaignOperation.createCampaigns([
        {
          name: `test campaign 2020/03/10 22:26:02`,
          campaignType: 'sponsoredProducts',
          dailyBudget: 1,
          state: 'paused',
          targetingType: 'manual',
          startDate,
          bidding,
        },
      ])

      expect(createdCampaignResponse.code).toBe('SUCCESS')

      if (
        createdCampaignResponse.code === 'SUCCESS' &&
        createdCampaignResponse.campaignId != null
      ) {
        const res = await campaignOperation.getCampaign(createdCampaignResponse.campaignId)
        expect(res.bidding).toMatchObject(bidding)
      }
    })
  })

  describe('updateCampaigns', () => {
    const portfolioId = 77985496739778
    const name = 'new name'
    const state = 'paused'
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
      if (updateCampaignResponse.code !== 'SUCCESS' || updateCampaignResponse.campaignId == null) {
        throw new Error('updateCampaign must be successful.')
      }
      const campaign = await campaignOperation.getCampaign(updateCampaignResponse.campaignId)

      expect(campaign.portfolioId).toBe(portfolioId)
      expect(campaign.name).toBe(name)
      expect(campaign.state).toBe(state)
      expect(campaign.dailyBudget).toBe(dailyBudget)
    })

    it(`should update a campaign with manual bidding controls`, async () => {
      const bidding: CampaignBidding = {
        strategy: 'manual',
        adjustments: [
          {
            predicate: 'placementTop',
            percentage: 1,
          },
          {
            predicate: 'placementProductPage',
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
      expect(campaign.state).toBe<CampaignState>('archived')
    })
  })
})
