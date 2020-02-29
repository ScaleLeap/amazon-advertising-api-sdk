import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('SBListDraftCampaignResponse', () => {
  it('should pass', () => {
    const res = t.SBListDraftCampaignResponse.decode({
      draftCampaignId: 0,
      name: 'string',
      budget: 0,
      budgetType: 'lifetime',
      startDate: 'string',
      endDate: 'string',
      bidOptimization: true,
      bidMultiplier: 0,
      portfolioId: 0,
      creative: {
        brandName: 'string',
        brandLogoAssetID: 'string',
        brandLogoUrl: 'string',
        headline: 'string',
        asins: ['string'],
        shouldOptimizeAsins: false,
      },
      landingPage: {
        url: 'string',
      },
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SBDraftCampaign', () => {
  it('should pass', () => {
    const res = t.SBDraftCampaign.decode({
      draftCampaignId: 0,
      name: 'string',
      budget: 0,
      budgetType: 'lifetime',
      startDate: 'string',
      endDate: 'string',
      brandEntityId: 'string',
      bidOptimization: true,
      bidMultiplier: 0,
      portfolioId: 0,
      creative: {
        brandName: 'string',
        brandLogoAssetID: 'string',
        brandLogoUrl: 'string',
        headline: 'string',
        asins: ['string'],
        shouldOptimizeAsins: false,
      },
      landingPage: {
        asins: ['string'],
        url: 'string',
      },
      keywords: [
        {
          keywordText: 'string',
          matchType: 'broad',
          bid: 0,
        },
      ],
      negativeKeywords: [
        {
          keywordText: 'string',
          matchType: 'negativeExact',
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})
