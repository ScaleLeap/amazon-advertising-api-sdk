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

describe('SBListTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SBListTargetsRequest.decode({
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

describe('SBListTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SBListTargetsResponse.decode({
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

describe('SBUpdateTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SBUpdateTargetsRequest.decode({
      targetId: 0,
      adGroupId: 0,
      campaignId: 0,
      state: 'enabled',
      bid: 0,
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SBUpdateTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SBUpdateTargetsResponse.decode({
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

describe('SBCreateTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SBCreateTargetsRequest.decode({
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

describe('SBCreateTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SBCreateTargetsResponse.decode({
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

describe('SBTargetingClause', () => {
  it('should pass', () => {
    const res = t.SBTargetingClause.decode({
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

describe('SBTargetingClauseResponse', () => {
  it('should pass', () => {
    const res = t.SBTargetingClauseResponse.decode({
      targetId: 0,
      code: 'string',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SBBatchGetTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SBBatchGetTargetsRequest.decode({
      targetIds: [0],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SBBatchGetTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SBBatchGetTargetsResponse.decode({
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

describe('SBListNegativeTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SBListNegativeTargetsResponse.decode({
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

describe('SBUpdateNegativeTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SBUpdateNegativeTargetsRequest.decode({
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

describe('SBCreateNegativeTargetsRequest', () => {
  it('should pass', () => {
    const res = t.SBCreateNegativeTargetsRequest.decode({
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

describe('SBCreateNegativeTargetsResponse', () => {
  it('should pass', () => {
    const res = t.SBCreateNegativeTargetsResponse.decode({
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

describe('SBNegativeTargetingClause', () => {
  it('should pass', () => {
    const res = t.SBNegativeTargetingClause.decode({
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
