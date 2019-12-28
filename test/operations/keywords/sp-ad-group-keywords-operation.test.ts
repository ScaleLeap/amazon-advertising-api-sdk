import setupPolly from '../../polly'
import { SponsoredProductsAdGroupKeywordsOperation } from '../../../src/operations/keywords/sp-ad-group-keywords-operation'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import {
  Keyword,
  CreateKeywordsParam,
  KeywordMatchTypeEnum,
  KeywordStateEnum,
  KeywordResponseStatusEnum,
} from '../../../src/operations/keywords/types'

setupPolly()

describe('SponsoredProductsAdGroupKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsAdGroupKeywordsOperation)
  const PAUSED_CAMPAIGN_ID = 31299234922913
  const PAUSED_AD_GROUP_ID = 109226894492069

  describe('createKeywords', () => {
    it(`should create a keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: CreateKeywordsParam[] = [
        {
          campaignId: PAUSED_CAMPAIGN_ID,

          adGroupId: PAUSED_AD_GROUP_ID,

          keywordText: 'Apple',

          matchType: KeywordMatchTypeEnum.BROAD,

          state: KeywordStateEnum.PAUSED,
        },
      ]
      const [res] = await operation.createKeywords(params)

      expect(res.code).toEqual(KeywordResponseStatusEnum.SUCCESS)
    })
  })

  describe('listBiddableKeywords', () => {
    it(`should return an array of Keywords ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: Keyword[] = await operation.listBiddableKeywords()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })
})
