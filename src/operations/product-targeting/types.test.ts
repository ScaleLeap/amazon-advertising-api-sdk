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
      {
        campaignId: 12345678912,
        adGroupId: 23456789012,
        targetId: 23456809123,
        expressionType: 'auto',
        expression: [
          {
            type: 'queryHighRelMatches',
          },
        ],
        bid: 10,
        state: 'paused',
      },
    ])

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsListTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsListTargetsRequest.decode({
      nextToken: 'string',
      maxResults: 0,
      filters: [
        {
          filterType: 'STATE',
          values: ['ENABLED'],
        },
        {
          filterType: 'CAMPAIGN_ID',
          values: [0],
        },
        {
          filterType: 'AD_GROUP_ID',
          values: [0],
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsListTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsListTargetsResponse.decode({
      nextToken: 'string',
      targets: [
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

describe('SponsoredBrandsUpdateTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsUpdateTargetsRequest.decode({
      targetId: 0,
      adGroupId: 0,
      campaignId: 0,
      state: 'enabled',
      bid: 0,
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsUpdateTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsUpdateTargetsResponse.decode({
      updateTargetSuccessResults: [
        {
          targetId: 0,
          targetRequestIndex: 0,
        },
      ],
      updateTargetErrorResults: [
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

describe('SponsoredBrandsCreateTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsCreateTargetsRequest.decode({
      targets: [
        {
          adGroupId: 0,
          campaignId: 0,
          expressions: {
            type: 'asinCategorySameAs',
            value: 'string',
          },
          bid: 0,
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsCreateTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsCreateTargetsResponse.decode({
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

describe('SponsoredBrandsTargetingClause', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsTargetingClause.decode({
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
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsTargetingClauseResponse', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsTargetingClauseResponse.decode({
      targetId: 0,
      code: 'string',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsBatchGetTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsBatchGetTargetsRequest.decode({
      targetIds: [0],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsBatchGetTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SponsoredBrandsBatchGetTargetsResponse.decode({
      batchGetTargetSuccessResults: [
        {
          targetingClause: {
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
          targetRequestIndex: 0,
        },
      ],
      batchGetTargetErrorResults: [
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
