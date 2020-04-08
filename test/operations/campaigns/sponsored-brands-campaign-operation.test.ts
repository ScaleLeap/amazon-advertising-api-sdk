import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredBrandsCampaignOperation } from '../../../src/operations/campaigns/sponsored-brands-campaign-operation'
import { httpClientFactory } from '../../http-client-factory'
import { CampaignState } from '../../../src'

describe('SponsoredBrandsCampaignOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const campaignOperation = operationProvider.create(SponsoredBrandsCampaignOperation)
  const CAMPAIGN_ID = 31299234922913

  describe('listCampaigns', () => {
    it(`should return an array of campaigns`, async () => {
      const res = await campaignOperation.listCampaigns()
      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  // Error: Unable to extract parameter from http request for javax.ws.rs.PathParam("campaignId") value is 'extended' for public abstract com.amazon.adapi.model.hsa.ExternalCampaign com.amazon.adapi.resource.HsaCampaignInterface.getCampaign(long)
  describe.skip('listCampaignsEx', () => {
    it(`should return an array of expanded campaigns`, async () => {
      const res = await campaignOperation.listCampaignsEx()
      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should return a filtered list of results`, async () => {
      const res = await campaignOperation.listCampaignsEx({
        campaignIdFilter: [CAMPAIGN_ID],
      })
      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  // Skip: Sponsored brand campaign list is empty
  describe.skip('getCampaign', () => {
    it(`should return a single campaign`, async () => {
      const res = await campaignOperation.getCampaign(CAMPAIGN_ID)
      expect(res).toBeTruthy()
    })
  })

  // Skip: Sponsored brand campaign list is empty
  describe.skip('getCampaignEx', () => {
    it(`should return a single extended campaign`, async () => {
      const res = await campaignOperation.getCampaignEx(CAMPAIGN_ID)
      expect(res).toBeTruthy()
    })
  })

  // Return an error: No resource method found for POST, return 405 with Allow header
  describe.skip('createCampaigns', () => {
    it(`should create a campaign`, async () => {
      const res = await campaignOperation.createCampaigns([
        {
          name: 'test campaign 4',
          campaignType: 'sponsoredProducts',
          dailyBudget: 1,
          state: 'enabled',
          targetingType: 'manual',
          startDate: '20190301',
          premiumBidAdjustment: true,
        },
      ])

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  // Skip: Sponsored brand campaign list is empty
  describe.skip('archiveCampaign', () => {
    it(`should set the campaign to archived state`, async () => {
      const ARCHIVED_CAMPAIGN_ID = 60376914769424
      const res = await campaignOperation.archiveCampaign(ARCHIVED_CAMPAIGN_ID)
      expect(res.code).toBe('SUCCESS')

      const campaign = await campaignOperation.getCampaign(ARCHIVED_CAMPAIGN_ID)
      expect(campaign.state).toBe<CampaignState>('archived')
    })
  })
})
