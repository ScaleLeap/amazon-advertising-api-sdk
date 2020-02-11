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
  KeywordExtended,
  UpdateKeywordsParam,
} from '../../../src/operations/keywords/types'

setupPolly()

describe('SponsoredProductsAdGroupKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsAdGroupKeywordsOperation)
  const MANUAL_CAMPAIGN_ID = 164069484151709
  const MANUAL_AD_GROUP_ID = 149522344269714
  const ARCHIVED_KEYWORD_ID = 16577721726418
  const PAUSED_KEYWORD_ID = 239748696088896

  describe('getBiddableKeyword', () => {
    it(`should return a Keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: Keyword = await operation.getBiddableKeyword(ARCHIVED_KEYWORD_ID)

      expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID)
      expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID)
      expect(res.keywordId).toBe(ARCHIVED_KEYWORD_ID)
      expect(res).toHaveProperty('keywordText')
      expect(res).toHaveProperty('matchType')
      expect(res).toHaveProperty('state')
    })
  })

  describe('getBiddableKeywordExtended', () => {
    it(`should return a KeywordExtended ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: KeywordExtended = await operation.getBiddableKeywordExtended(ARCHIVED_KEYWORD_ID)

      expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID)
      expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID)
      expect(res.keywordId).toBe(ARCHIVED_KEYWORD_ID)
      expect(res).toHaveProperty('keywordText')
      expect(res).toHaveProperty('matchType')
      expect(res).toHaveProperty('state')
      expect(res).toHaveProperty('creationDate')
      expect(res).toHaveProperty('lastUpdatedDate')
      expect(res).toHaveProperty('servingStatus')
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

  describe('updateKeywords', () => {
    it(`should update a keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: UpdateKeywordsParam[] = [
        {
          keywordId: PAUSED_KEYWORD_ID,
          state: KeywordStateEnum.PAUSED,
          bid: 1,
        },
      ]
      const [res] = await operation.updateKeywords(params)

      expect(res.code).toEqual(KeywordResponseStatusEnum.SUCCESS)
    })
  })

  describe('archiveBiddableKeyword', () => {
    it(`should archive a keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.archiveBiddableKeyword(ARCHIVED_KEYWORD_ID)

      expect(res.code).toEqual(KeywordResponseStatusEnum.SUCCESS)
    })
  })

  describe('listBiddableKeywords', () => {
    it(`should return an array of Keywords ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: Keyword[] = await operation.listBiddableKeywords()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('listBiddableKeywordsExtended', () => {
    it(`should return an array of KeywordExtendeds ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: KeywordExtended[] = await operation.listBiddableKeywordsExtended()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })
})
