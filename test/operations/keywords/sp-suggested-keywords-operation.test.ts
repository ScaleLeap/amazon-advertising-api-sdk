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

  // TODO: response is alway empty. Need check again.
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
})
