import setupPolly from '../../polly'
import { SponsoredProductsSuggestedKeywordsOperation } from '../../../src/operations/keywords/sp-suggested-keywords-operation'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import {
  GetAdGroupSuggestedKeywordsParams,
  AdGroupStateEnum,
  GetAdGroupSuggestedKeywordsExtendedParams,
  SuggestBidsEnum,
} from '../../../src/operations/keywords/types'

setupPolly()

describe('SponsoredProductsSuggestedKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsSuggestedKeywordsOperation)
  const AD_GROUP_ID = 149522344269714

  describe('getAdGroupSuggestedKeywords', () => {
    it(`should return suggested keyword data for the specified adGroupId ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getAdGroupSuggestedKeywords(AD_GROUP_ID)

      expect(res.adGroupId).toBe(AD_GROUP_ID)
    })

    it(`should return suggested keyword data for the specified adGroupId, adStateFilter ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: GetAdGroupSuggestedKeywordsParams = {
        maxNumSuggestions: 1,
        adStateFilter: [AdGroupStateEnum.ENABLED, AdGroupStateEnum.PAUSED, AdGroupStateEnum.PAUSED],
      }
      const res = await operation.getAdGroupSuggestedKeywords(AD_GROUP_ID, params)

      expect(res.adGroupId).toBe(AD_GROUP_ID)
    })
  })

  // TODO: response is empty. Need check again.
  describe('getAdGroupSuggestedKeywordsExtended', () => {
    it(`should return extended suggested keyword data for the specified adGroupId ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getAdGroupSuggestedKeywordsExtended(AD_GROUP_ID)

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should return extended suggested keyword data for the specified adGroupId, suggestBids, adStateFilter ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: GetAdGroupSuggestedKeywordsExtendedParams = {
        maxNumSuggestions: 1000,
        suggestBids: SuggestBidsEnum.YES,
        adStateFilter: [AdGroupStateEnum.ENABLED, AdGroupStateEnum.PAUSED, AdGroupStateEnum.PAUSED],
      }
      const res = await operation.getAdGroupSuggestedKeywordsExtended(AD_GROUP_ID, params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('getAsinSuggestedKeywords', () => {
    it(`should return suggested keywords for specified ASIN ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const ASIN = 'B07663Z46Z'
      const res = await operation.getAsinSuggestedKeywords(ASIN)

      expect(res.asin).toMatch(ASIN)
    })

    it(`should return suggested keywords for specified ASIN, max suggestion keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const ASIN = 'B07663Z46Z'
      const SUGGESTION_KEYWORD_NUMBER = 1
      const res = await operation.getAsinSuggestedKeywords(ASIN, SUGGESTION_KEYWORD_NUMBER)

      expect(res.asin).toMatch(ASIN)
      const suggestionKeywordsResponseNumber = res.suggestedKeywords.length
      expect([0, SUGGESTION_KEYWORD_NUMBER]).toContain(suggestionKeywordsResponseNumber)
    })
  })

  describe('bulkGetAsinSuggestedKeywords', () => {
    it(`should return keyword suggestions for specified list of ASINs ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']
      const res = await operation.bulkGetAsinSuggestedKeywords(ASINS)

      expect(Array.isArray(res)).toBeTruthy()
    })
    it(`should return keyword suggestions for specified list of ASINs, max suggestion keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']
      const SUGGESTION_KEYWORD_NUMBER = 1
      const res = await operation.bulkGetAsinSuggestedKeywords(ASINS, SUGGESTION_KEYWORD_NUMBER)

      const suggestionKeywordsResponseNumber = res.length
      expect([0, SUGGESTION_KEYWORD_NUMBER]).toContain(suggestionKeywordsResponseNumber)
    })
  })
})
