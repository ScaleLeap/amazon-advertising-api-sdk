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