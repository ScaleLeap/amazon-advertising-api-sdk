import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('Keyword', () => {
  it('should pass getBiddableKeyword response', () => {
    const res = t.Keyword.decode({
      keywordId: 16577721726418,
      adGroupId: 149522344269714,
      campaignId: 164069484151709,
      keywordText: 'Apple',
      matchType: 'broad',
      state: 'paused',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('UpdateSponsoredBrandsNegativeKeywordParams', () => {
  it('should pass update sb negative keyword params', () => {
    const res = t.UpdateSponsoredBrandsNegativeKeywordParams.decode({
      keywordId: 0,
      adGroupId: 0,
      campaignId: 0,
      state: 'enabled',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('CreateSponsoredBrandsNegativeKeywordParams', () => {
  it('should pass create sb negative keyword params', () => {
    const res = t.CreateSponsoredBrandsNegativeKeywordParams.decode({
      adGroupId: 0,
      campaignId: 0,
      keywordText: 'string',
      matchType: 'negativeExact',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsKeywordResponse', () => {
  it('should pass create, update, archive sb negative keyword response', () => {
    const res = t.SponsoredBrandsKeywordResponse.decode({
      keywordId: 0,
      code: 'string',
      details: 'string',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsNegativeKeyword', () => {
  it('should pass get sb negative keyword response', () => {
    const res = t.SponsoredBrandsNegativeKeyword.decode({
      keywordId: 0,
      adGroupId: 0,
      campaignId: 0,
      keywordText: 'string',
      matchType: 'negativeExact',
      state: 'enabled',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SponsoredBrandsKeywordRecommendation', () => {
  it('should pass getKeywordRecommendations response', () => {
    const res = t.SponsoredBrandsKeywordRecommendation.decode({
      recommendationId: 'addKeyword',
      value: 'string',
      matchType: 'broad',
    })

    expect(isRight(res)).toBeTruthy()
  })
})
