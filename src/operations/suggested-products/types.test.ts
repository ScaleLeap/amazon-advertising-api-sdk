import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('SuggestedProduct', () => {
  it('should pass', () => {
    const res = t.SuggestedProduct.decode({
      readinessStatus: 'HIGH',
      asins: ['string'],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('ProductReadinessRequest', () => {
  it('should pass', () => {
    const res = t.ProductReadinessRequest.decode({
      asins: ['string'],
      tactic: 'T00010',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('ProductReadinessResponse', () => {
  it('should pass', () => {
    const res = t.ProductReadinessResponse.decode({
      asin: 'string',
      readinessStatus: 'HIGH',
    })

    expect(isRight(res)).toBeTruthy()
  })
})
