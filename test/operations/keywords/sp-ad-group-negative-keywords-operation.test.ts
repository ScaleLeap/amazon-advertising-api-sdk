import setupPolly from '../../polly'
import { SponsoredProductsAdGroupNegativeKeywordsOperation } from '../../../src/operations/keywords/sp-ad-group-negative-keywords-operation'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import {
  CreateNegativeKeywordsParam,
  KeywordMatchTypeEnum,
  KeywordStateEnum,
  NegativeKeywordResponseStatusEnum,
  NegativeKeywordMatchTypeEnum,
} from '../../../src/operations/keywords/types'

setupPolly()

describe('SponsoredProductsAdGroupNegativeKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsAdGroupNegativeKeywordsOperation)
  const MANUAL_CAMPAIGN_ID = 164069484151709
  const MANUAL_AD_GROUP_ID = 149522344269714

  describe('createNegativeKeywords', () => {
    it(`should create a negative keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: CreateNegativeKeywordsParam[] = [
        {
          campaignId: MANUAL_CAMPAIGN_ID,

          adGroupId: MANUAL_AD_GROUP_ID,

          keywordText: 'green apple',

          matchType: NegativeKeywordMatchTypeEnum.NEGATIVE_EXACT,

          state: KeywordStateEnum.PAUSED,
        },
      ]
      const [res] = await operation.createNegativeKeywords(params)

      expect(res.code).toEqual(NegativeKeywordResponseStatusEnum.SUCCESS)
    })
  })
})
