import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('Campaign', () => {
  it('should pass getCampaign response', () => {
    const res = t.Campaign.decode({
      campaignId: 31299234922913,
      name: 'new name',
      campaignType: 'sponsoredProducts',
      targetingType: 'auto',
      premiumBidAdjustment: false,
      dailyBudget: 7,
      startDate: '20290101',
      state: 'paused',
      portfolioId: 77985496739778,
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('CampaignExtended', () => {
  it('should pass getCampaignEx response', () => {
    const res = t.CampaignExtended.decode({
      campaignId: 188971111858084,
      name: 'test campaign 3',
      campaignType: 'sponsoredProducts',
      targetingType: 'manual',
      premiumBidAdjustment: true,
      dailyBudget: 1,
      startDate: '20190301',
      state: 'archived',
      bidding: {
        strategy: 'legacyForSales',
        adjustments: [
          {
            predicate: 'placementTop',
            percentage: 50,
          },
        ],
      },
      servingStatus: 'CAMPAIGN_ARCHIVED',
      creationDate: 1550067309000,
      lastUpdatedDate: 1550119120000,
    })
    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredProductsCampaignCreateParams', () => {
  it('should pass createCampaigns param', () => {
    const res = t.SponsoredProductsCampaignCreateParams.decode({
      name: 'test campaign 7',
      campaignType: 'sponsoredProducts',
      dailyBudget: 1,
      state: 'paused',
      targetingType: 'manual',
      startDate: '20190401',
      bidding: {
        strategy: 'manual',
        adjustments: [
          {
            predicate: 'placementTop',
            percentage: 50,
          },
          {
            predicate: 'placementProductPage',
            percentage: 20,
          },
        ],
      },
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredProductsCampaignUpdateParams', () => {
  it('should pass updateCampaigns param of Sponsored Products', () => {
    const res = t.SponsoredProductsCampaignUpdateParams.decode({
      campaignId: 31299234922913,
      name: 'new name',
      state: 'paused',
      dailyBudget: 7,
      portfolioId: 77985496739778,
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('ListCampaignsParams', () => {
  it('should pass listCampaigns param', () => {
    const res = t.ListCampaignsParams.decode({
      startIndex: 0,
      count: 1,
    })
    expect(isRight(res)).toBeTruthy()
  })
})

describe('CampaignResponse', () => {
  it('should pass createCampaigns, updateCampaigns and archiveCampaign response', () => {
    const res = t.CampaignResponse.decode({
      code: 'SUCCESS',
      campaignId: 76420564284604,
    })
    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredDisplayCampaign', () => {
  it('should pass', () => {
    const res = t.SponsoredDisplayCampaign.decode({
      campaignId: 169989740510339,
      name: 'test sd campaign 2020/08/13 21:42',
      tactic: 'remarketing',
      budget: 1,
      budgetType: 'daily',
      costType: 'cpc',
      deliveryProfile: 'as_soon_as_possible',
      startDate: '20201210',
      state: 'enabled',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('Campaign Edge Case', () => {
  it('should allow a non-existent strategy when parsing the bidding parameter', () => {
    const edgecaseFragment = t.Campaign.decode({
      campaignId: 108971111858080,
      name: 'test',
      campaignType: 'sponsoredProducts',
      targetingType: 'auto',
      premiumBidAdjustment: false,
      dailyBudget: 1,
      startDate: '20161024',
      state: 'archived',
      bidding: { adjustments: [] }
    });
    expect(isRight(edgecaseFragment)).toBeTruthy();
  });
});

/**
 * TODO: Update test script:
 * SponsoredBrandsCampaign should pass listCampaigns response
 * SponsoredBrandsCampaignUpdateParams should pass updateCampaigns param of Sponsored Brands
 */
