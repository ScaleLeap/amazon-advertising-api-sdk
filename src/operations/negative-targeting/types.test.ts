import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('SponsoredBrandsListNegativeTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsListNegativeTargetsResponse.decode({
      nextToken: 'string',
      negativeTargets: [
        {
          targetId: 0,
          adGroupId: 0,
          campaignId: 0,
          expressions: {
            type: 'asinCategorySameAs',
            value: 'string',
          },
          resolvedExpressions: {
            type: 'asinCategorySameAs',
            value: 'string',
          },
          state: 'enabled',
          bid: 0,
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsUpdateNegativeTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsUpdateNegativeTargetsRequest.decode({
      negativeTargets: [
        {
          targetId: 0,
          adGroupId: 0,
          state: 'enabled',
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsCreateNegativeTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsCreateNegativeTargetsRequest.decode({
      negativeTargets: [
        {
          adGroupId: 0,
          campaignId: 0,
          expressions: {
            type: 'asinBrandSameAs',
            value: 'string',
          },
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsCreateNegativeTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsCreateNegativeTargetsResponse.decode({
      createTargetSuccessResults: [
        {
          targetRequestIndex: 0,
          targetId: 0,
        },
      ],
      createTargetErrorResults: [
        {
          code: 'string',
          details: 'string',
          targetRequestIndex: 0,
          targetId: 0,
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsNegativeTargetingClause', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsNegativeTargetingClause.decode({
      targetId: 0,
      adGroupId: 0,
      campaignId: 0,
      expressions: {
        type: 'asinBrandSameAs',
        value: 'string',
      },
      resolvedExpressions: {
        type: 'asinCategorySameAs',
        value: 'string',
      },
      state: 'enabled',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsBatchGetNegativeTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsBatchGetNegativeTargetsRequest.decode({
      targetIds: [0],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsBatchGetNegativeTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsBatchGetNegativeTargetsResponse.decode({
      batchGetNegativeTargetSuccessResults: [
        {
          targetingClause: {
            targetId: 0,
            adGroupId: 0,
            campaignId: 0,
            state: 'ENABLED',
            expressions: [
              {
                type: 'asinCategorySameAs',
                value: 'string',
              },
            ],
            resolvedExpressions: [
              {
                type: 'asinCategorySameAs',
                value: 'string',
              },
            ],
          },
          targetRequestIndex: 0,
        },
      ],
      batchGetNegativeTargetErrorResults: [
        {
          code: 'string',
          details: 'string',
          targetId: 0,
          targetRequestIndex: 0,
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})
