import { SponsoredBrandsNegativeKeywordsOperation } from '../../../src/operations/keywords/sb-negative-keywords-operation'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import {
  CreateSBNegativeKeywordParams,
  NegativeKeywordMatchTypeEnum,
  NegativeKeywordResponseStatusEnum,
} from '../../../src/operations/keywords/types'

describe('SponsoredBrandsNegativeKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsNegativeKeywordsOperation)
  const MANUAL_CAMPAIGN_ID = 164069484151709
  const MANUAL_AD_GROUP_ID = 149522344269714
  const KEYWORD_TEXT = 'green apple'

  describe('createNegativeKeywords', () => {
    it(`should create a negative keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: CreateSBNegativeKeywordParams[] = [
        {
          campaignId: MANUAL_CAMPAIGN_ID,
          adGroupId: MANUAL_AD_GROUP_ID,
          keywordText: KEYWORD_TEXT,
          matchType: NegativeKeywordMatchTypeEnum.NEGATIVE_EXACT,
        },
      ]
      const [res] = await operation.createNegativeKeywords(params)

      expect(res.code).toEqual(NegativeKeywordResponseStatusEnum.SUCCESS)
    })
  })
})
