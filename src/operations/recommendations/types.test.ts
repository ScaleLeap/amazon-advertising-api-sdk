import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('SponsoredBrandsProductRecommendationsRequest', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsProductRecommendationsRequest.decode({
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

describe('SponsoredBrandsProductRecommendationsResponse', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsProductRecommendationsResponse.decode({
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

describe('SponsoredBrandsCategoryRecommendationsRequest', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsCategoryRecommendationsRequest.decode({
      asins: ['string'],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsCategoryRecommendationsResponse', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsCategoryRecommendationsResponse.decode({
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

describe('SponsoredBrandsCategoryRecommendationsResponse', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsBrandRecommendationsResponse.decode({
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

describe('SponsoredBrandsBidsRecommendationRequest', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsBidsRecommendationRequest.decode({
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

describe('SponsoredBrandsBidsRecommendationResponse', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsBidsRecommendationResponse.decode({
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
