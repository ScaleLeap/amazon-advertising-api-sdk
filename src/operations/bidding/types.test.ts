import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('SuggestedBid', () => {
  it('should pass suggestedBid field of getAdGroupBidRecommendations response ', () => {
    const res = t.SuggestedBid.decode({
      rangeEnd: 1.17,
      rangeStart: 0.25,
      suggested: 0.59,
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('AdGroupBidRecommendationsResponse', () => {
  it('should pass getAdGroupBidRecommendations response ', () => {
    const res = t.AdGroupBidRecommendationsResponse.decode({
      adGroupId: 229181242630073,
      suggestedBid: {
        rangeEnd: 1.17,
        rangeStart: 0.25,
        suggested: 0.59,
      },
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('KeywordBidRecommendationsResponse', () => {
  it('should pass getKeywordBidRecommendations response ', () => {
    const res = t.KeywordBidRecommendationsResponse.decode({
      keywordId: 15590130271788,
      adGroupId: 264272438240075,
      suggestedBid: {
        rangeEnd: 0.34,
        rangeStart: 0.27,
        suggested: 0.29,
      },
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('KeywordBidRecommendationsData', () => {
  it('should pass createKeywordBidRecommendations param ', () => {
    const res = t.KeywordBidRecommendationsData.decode({
      adGroupId: 264272438240075,
      keywords: [
        {
          keyword: 'keyword one',
          matchType: 'broad',
        },
        {
          keyword: 'keyword two',
          matchType: 'broad',
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('BidRecommendationsResponse', () => {
  it('should pass createKeywordBidRecommendations response ', () => {
    const res = t.BidRecommendationsResponse.decode({
      adGroupId: 264272438240075,
      recommendations: [
        {
          code: 'SUCCESS',
          keyword: 'keyword one',
          matchType: 'broad',
          suggestedBid: {
            rangeEnd: 0.8,
            rangeStart: 0.5,
            suggested: 0.5,
          },
        },
        {
          code: 'SUCCESS',
          keyword: 'keyword two',
          matchType: 'broad',
          suggestedBid: {
            rangeEnd: 0.48,
            rangeStart: 0.32,
            suggested: 0.44,
          },
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('BidRecommendationRequest', () => {
  it('should pass getBidRecommendations Keywords Example param', () => {
    const res = t.BidRecommendationRequest.decode({
      expressions: [
        {
          type: 'queryExactMatches',
          value: 'oranges',
        },
      ],
      adGroupId: 217706707887211,
    })

    expect(isRight(res)).toBeTruthy()
  })

  it('should pass getBidRecommendations Auto Example param', () => {
    const res = t.BidRecommendationRequest.decode({
      expressions: [
        {
          type: 'queryBroadRelMatches',
          value: 'apples',
        },
      ],
      adGroupId: 163368712670649,
    })

    expect(isRight(res)).toBeTruthy()
  })

  it('should pass getBidRecommendations Product Example param', () => {
    const res = t.BidRecommendationRequest.decode({
      expressions: [
        {
          type: 'asinCategorySameAs',
          value: '166099011',
        },
        {
          type: 'asinReviewRatingBetween',
          value: '4.5-5',
        },
      ],
      adGroupId: 163368712670649,
    })

    expect(isRight(res)).toBeTruthy()
  })
})
