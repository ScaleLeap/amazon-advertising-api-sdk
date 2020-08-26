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
