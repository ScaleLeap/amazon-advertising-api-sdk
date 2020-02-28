import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('SBProductRecommendationsRequest', () => {
  it('should pass', () => {
    const res = t.SBProductRecommendationsRequest.decode({
      nextToken: 'string',
      maxResults: 0,
      filters: [
        {
          filterType: 'ASINS',
          values: ['string'],
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SBProductRecommendationsResponse', () => {
  it('should pass', () => {
    const res = t.SBProductRecommendationsResponse.decode({
      nextToken: 'string',
      recommendedProducts: [
        {
          recommendedTargetAsin: 'string',
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SBCategoryRecommendationsRequest', () => {
  it('should pass', () => {
    const res = t.SBCategoryRecommendationsRequest.decode({
      asins: ['string'],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SBCategoryRecommendationsResponse', () => {
  it('should pass', () => {
    const res = t.SBCategoryRecommendationsResponse.decode({
      categoryRecommendationResults: [
        {
          id: 0,
          name: 'string',
          isTargetable: true,
          path: 'string',
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SBCategoryRecommendationsResponse', () => {
  it('should pass', () => {
    const res = t.SBBrandRecommendationsResponse.decode({
      brandRecommendationResults: [
        {
          id: 0,
          name: 'string',
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SBBidsRecommendationRequest', () => {
  it('should pass', () => {
    const res = t.SBBidsRecommendationRequest.decode({
      campaignId: 0,
      targets: [
        {
          type: 'asinCategorySameAs',
          value: 'string',
        },
      ],
      keywords: [
        {
          matchType: 'broad',
          keywordText: 'string',
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SBBidsRecommendationResponse', () => {
  it('should pass', () => {
    const res = t.SBBidsRecommendationResponse.decode({
      keywordsBidsRecommendationSuccessResults: [
        {
          recommendationId: 'string',
          recommendedBid: {
            rangeEnd: 0,
            rangeStart: 0,
            recommended: 0,
          },
          keyword: {
            keywordText: 'string',
            matchType: 'broad',
          },
          keywordIndex: 0,
        },
      ],
      keywordsBidsRecommendationErrorResults: [
        {
          code: 'string',
          details: 'string',
          keyword: {
            type: 'broad',
            value: 'string',
          },
          keywordIndex: 0,
        },
      ],
      targetsBidsRecommendationSuccessResults: [
        {
          recommendationId: 'string',
          recommendedBid: {
            rangeEnd: 0,
            rangeStart: 0,
            recommended: 0,
          },
          targets: [
            {
              type: 'asinCategorySameAs',
              value: 'string',
            },
          ],
          targetsIndex: 0,
        },
      ],
      targetsBidsRecommendationErrorResults: [
        {
          code: 'string',
          details: 'string',
          targets: [
            {
              type: 'asinCategorySameAs',
              value: 'string',
            },
          ],
          targetsIndex: 0,
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})
