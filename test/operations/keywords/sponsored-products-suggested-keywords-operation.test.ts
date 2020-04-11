import { SponsoredProductsSuggestedKeywordsOperation } from '../../../src/operations/keywords/sponsored-products-suggested-keywords-operation'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import {
  GetAdGroupSuggestedKeywordsParams,
  GetAdGroupSuggestedKeywordsExtendedParams,
} from '../../../src/operations/keywords/types'

describe('SponsoredProductsSuggestedKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsSuggestedKeywordsOperation)
  const AD_GROUP_ID = 149522344269714
  const ASIN = 'B07663Z46Z'
  const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']
  const DEFAULT_SUGGESTION_KEYWORDS_NUMBER = 100

  describe('getAdGroupSuggestedKeywords', () => {
    it(`should return suggested keyword data for the specified adGroupId`, async () => {
      const res = await operation.getAdGroupSuggestedKeywords(AD_GROUP_ID)

      expect(res.adGroupId).toBe(AD_GROUP_ID)
    })

    it(`should return suggested keyword data for the specified adGroupId, adStateFilter`, async () => {
      const params: GetAdGroupSuggestedKeywordsParams = {
        maxNumSuggestions: 1,
        adStateFilter: ['enabled', 'paused', 'archived'],
      }
      const res = await operation.getAdGroupSuggestedKeywords(AD_GROUP_ID, params)

      expect(res.adGroupId).toBe(AD_GROUP_ID)
    })
  })

  // TODO: response is empty. Need check again.
  describe('getAdGroupSuggestedKeywordsExtended', () => {
    it(`should return extended suggested keyword data for the specified adGroupId`, async () => {
      const res = await operation.getAdGroupSuggestedKeywordsExtended(AD_GROUP_ID)

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should return extended suggested keyword data for the specified adGroupId, suggestBids, adStateFilter`, async () => {
      const params: GetAdGroupSuggestedKeywordsExtendedParams = {
        maxNumSuggestions: 1000,
        suggestBids: 'yes',
        adStateFilter: ['enabled', 'paused', 'archived'],
      }
      const res = await operation.getAdGroupSuggestedKeywordsExtended(AD_GROUP_ID, params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  /**
   * Docs: https://advertising.amazon.com/API/docs/en-us/reference/sponsored-products/2/suggested-keywords
   * Response only return suggested keyword. Doesn't return ASIN
   */
  describe('getAsinSuggestedKeywords', () => {
    it(`should return suggested keywords for specified ASIN`, async () => {
      const res = await operation.getAsinSuggestedKeywords(ASIN)

      expect(res.length).toEqual(DEFAULT_SUGGESTION_KEYWORDS_NUMBER)
    })

    it(`should return suggested keywords for specified ASIN, max suggestion keyword`, async () => {
      const SUGGESTION_KEYWORD_NUMBER = 1
      const res = await operation.getAsinSuggestedKeywords(ASIN, SUGGESTION_KEYWORD_NUMBER)

      expect(res.length).toEqual(SUGGESTION_KEYWORD_NUMBER)
    })
  })

  describe('bulkGetAsinSuggestedKeywords', () => {
    it(`should return keyword suggestions for specified list of ASINs`, async () => {
      const res = await operation.bulkGetAsinSuggestedKeywords(ASINS)

      expect(res.length).toEqual(DEFAULT_SUGGESTION_KEYWORDS_NUMBER)
    })
    it(`should return keyword suggestions for specified list of ASINs, max suggestion keyword`, async () => {
      const SUGGESTION_KEYWORD_NUMBER = 1
      const res = await operation.bulkGetAsinSuggestedKeywords(ASINS, SUGGESTION_KEYWORD_NUMBER)

      expect(res.length).toEqual(SUGGESTION_KEYWORD_NUMBER)
    })
  })
})
