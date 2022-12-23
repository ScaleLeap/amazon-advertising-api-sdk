import { SponsoredBrandsNegativeKeywordsOperation } from '../../../src/operations/keywords/sponsored-brands-negative-keywords-operation'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import {
  CreateSponsoredBrandsNegativeKeywordParams,
  UpdateSponsoredBrandsNegativeKeywordParams,
  NegativeKeywordMatchType,
} from '../../../src/operations/keywords/types'

/**
 * TODO: Get internal server error when create in sandbox api. Need check again.
 * Details: https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/runs/448663094?check_suite_focus=true
 */
describe('SponsoredBrandsNegativeKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsNegativeKeywordsOperation)
  const MANUAL_CAMPAIGN_ID = '164069484151709'
  const MANUAL_AD_GROUP_ID = '149522344269714'
  const KEYWORD_ID = 123
  const KEYWORD_TEXT = 'green apple'

  describe.skip('updateNegativeKeywords', () => {
    it(`should update one or more sb negative keywords`, async () => {
      const params: UpdateSponsoredBrandsNegativeKeywordParams[] = [
        {
          campaignId: MANUAL_CAMPAIGN_ID,
          adGroupId: MANUAL_AD_GROUP_ID,
          keywordId: KEYWORD_ID,
          state: 'archived',
        },
      ]
      const [res] = await operation.updateNegativeKeywords(params)

      expect(res.code).toEqual('SUCCESS')
    })
  })

  describe.skip('createNegativeKeywords', () => {
    it(`should create one or more sb negative keywords`, async () => {
      const params: CreateSponsoredBrandsNegativeKeywordParams[] = [
        {
          campaignId: MANUAL_CAMPAIGN_ID,
          adGroupId: MANUAL_AD_GROUP_ID,
          keywordText: KEYWORD_TEXT,
          matchType: 'negativeExact',
        },
      ]
      const [res] = await operation.createNegativeKeywords(params)

      expect(res.code).toEqual('SUCCESS')
    })
  })

  describe.skip('getNegativeKeyword', () => {
    it(`should return a sb negative keyword`, async () => {
      const res = await operation.getNegativeKeyword(KEYWORD_ID)

      expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID)
      expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID)
      expect(res.keywordId).toBe(KEYWORD_ID)
      expect(res.keywordText).toBe(KEYWORD_TEXT)
      expect(res.matchType).toBe<NegativeKeywordMatchType>('negativeExact')
    })
  })

  describe.skip('archiveNegativeKeyword', () => {
    it(`should archive a sb negative keyword`, async () => {
      const res = await operation.archiveNegativeKeyword(KEYWORD_ID)

      expect(res.code).toEqual('SUCCESS')
    })
  })
})
