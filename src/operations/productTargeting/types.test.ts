import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('TargetingExpressions', () => {
  it('should pass', () => {
    const res = t.TargetingExpressions.decode([
      {
        type: 'asinCategorySameAs',
        value: '12345567',
      },
      {
        type: 'asinBrandSameAs',
        value: '12345567',
      },
      {
        type: 'asinPriceBetween',
        value: '1-3.50',
      },
      {
        type: 'asinIsPrimeShippingEligible',
        value: 'true',
      },
      {
        type: 'asinGenreSameAs',
        value: '12345567',
      },
      {
        type: 'asinAgeRangeSameAs',
        value: '123',
      },
    ])

    expect(isRight(res)).toBeTruthy()
  })
})

describe('TargetingClauses', () => {
  it('should pass', () => {
    const res = t.TargetingClauses.decode([
      {
        campaignId: 127985268700344,
        adGroupId: 456789012345,
        targetId: 123452234567,
        expressionType: 'manual',
        expression: [
          {
            type: 'asinCategorySameAs',
            value: '12345567',
          },
        ],
        bid: 10,
        state: 'enabled',
      },
      {
        campaignId: 127985268700344,
        adGroupId: 456789012345,
        targetId: 123452234568,
        expressionType: 'manual',
        expression: [
          {
            type: 'asinSameAs',
            value: 'ASDF1234567',
          },
        ],
        bid: 10,
        state: 'enabled',
      },
    ])

    expect(isRight(res)).toBeTruthy()
  })
})
