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
  const MANUAL_CAMPAIGN_ID = 164069484151709
  const MANUAL_AD_GROUP_ID = 149522344269714
  const KEYWORD_ID = 16577721726418

  describe('getBiddableKeyword', () => {
    it(`should return a Keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: Keyword = await operation.getBiddableKeyword(KEYWORD_ID)

      expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID)
      expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID)
      expect(res.keywordId).toBe(KEYWORD_ID)
      expect(res).toHaveProperty('keywordText')
      expect(res).toHaveProperty('matchType')
      expect(res).toHaveProperty('state')
    })
  })

  describe.skip('createKeywords', () => {
    it(`should create a keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: CreateKeywordsParam[] = [
        {
          campaignId: MANUAL_CAMPAIGN_ID,

          adGroupId: MANUAL_AD_GROUP_ID,

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
