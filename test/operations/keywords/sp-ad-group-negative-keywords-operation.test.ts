import setupPolly from '../../polly'
import { SponsoredProductsAdGroupNegativeKeywordsOperation } from '../../../src/operations/keywords/sp-ad-group-negative-keywords-operation'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import {
  CreateNegativeKeywordsParam,
  KeywordStateEnum,
  NegativeKeywordResponseStatusEnum,
  NegativeKeywordMatchTypeEnum,
  UpdateNegativeKeywordsParam,
  NegativeKeyword,
  NegativeKeywordExtended,
  ListNegativeKeywordsParam,
} from '../../../src/operations/keywords/types'

setupPolly()

describe('SponsoredProductsAdGroupNegativeKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsAdGroupNegativeKeywordsOperation)
  const MANUAL_CAMPAIGN_ID = 164069484151709
  const MANUAL_AD_GROUP_ID = 149522344269714
  const KEYWORD_ID = 262433850080632
  const NEGATIVE_KEYWORD_TEXT = 'green apple'

  describe('getNegativeKeyword', () => {
    it(`should return a Negative Keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getNegativeKeyword(KEYWORD_ID)

      expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID)
      expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID)
      expect(res.keywordId).toBe(KEYWORD_ID)
      expect(res.keywordText).toBe(NEGATIVE_KEYWORD_TEXT)
      expect(res.matchType).toBe(NegativeKeywordMatchTypeEnum.NEGATIVE_EXACT)
    })
  })

  describe('getNegativeKeywordExtended', () => {
    it(`should return a Negative Keyword Extended ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getNegativeKeywordExtended(KEYWORD_ID)

      expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID)
      expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID)
      expect(res.keywordId).toBe(KEYWORD_ID)
      expect(res.keywordText).toBe(NEGATIVE_KEYWORD_TEXT)
      expect(res.matchType).toBe(NegativeKeywordMatchTypeEnum.NEGATIVE_EXACT)
    })
  })

  describe.skip('createNegativeKeywords', () => {
    it(`should create a negative keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: CreateNegativeKeywordsParam[] = [
        {
          campaignId: MANUAL_CAMPAIGN_ID,

          adGroupId: MANUAL_AD_GROUP_ID,

          keywordText: NEGATIVE_KEYWORD_TEXT,

          matchType: NegativeKeywordMatchTypeEnum.NEGATIVE_EXACT,

          state: KeywordStateEnum.PAUSED,
        },
      ]
      const [res] = await operation.createNegativeKeywords(params)

      expect(res.code).toEqual(NegativeKeywordResponseStatusEnum.SUCCESS)
    })
  })

  describe('updateKeywords', () => {
    it(`should update a negative keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: UpdateNegativeKeywordsParam[] = [
        {
          keywordId: KEYWORD_ID,
          state: KeywordStateEnum.ARCHIVED,
        },
      ]
      const [res] = await operation.updateNegativeKeywords(params)

      expect(res.code).toEqual(NegativeKeywordResponseStatusEnum.SUCCESS)
    })
  })

  describe('archiveNegativeKeyword', () => {
    it(`should archive a negative keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.archiveNegativeKeyword(KEYWORD_ID)

      expect(res.code).toEqual(NegativeKeywordResponseStatusEnum.SUCCESS)
    })
  })

  describe('listNegativeKeywords', () => {
    it(`should return an array of Negative Keywords ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: NegativeKeyword[] = await operation.listNegativeKeywords()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should return an array of Negative Keywords when filter additional properties ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: ListNegativeKeywordsParam = {
        startIndex: 0,
        count: 1,
        matchTypeFilter: NegativeKeywordMatchTypeEnum.NEGATIVE_EXACT,
        keywordText: NEGATIVE_KEYWORD_TEXT,
        campaignIdFilter: [MANUAL_CAMPAIGN_ID],
        adGroupIdFilter: [MANUAL_AD_GROUP_ID],
      }
      const [res] = await operation.listNegativeKeywords(params)

      expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID)
      expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID)
      expect(res.keywordId).toBe(KEYWORD_ID)
      expect(res.keywordText).toBe(NEGATIVE_KEYWORD_TEXT)
      expect(res.matchType).toBe(NegativeKeywordMatchTypeEnum.NEGATIVE_EXACT)
    })
  })

  describe('listNegativeKeywordsExtended', () => {
    it(`should return an array of Negative Keyword Extendeds ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: NegativeKeywordExtended[] = await operation.listNegativeKeywordsExtended()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should return an array of Negative Keyword Extendeds when filter additional properties ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: ListNegativeKeywordsParam = {
        startIndex: 0,
        count: 1,
        matchTypeFilter: NegativeKeywordMatchTypeEnum.NEGATIVE_EXACT,
        keywordText: NEGATIVE_KEYWORD_TEXT,
        campaignIdFilter: [MANUAL_CAMPAIGN_ID],
        adGroupIdFilter: [MANUAL_AD_GROUP_ID],
      }
      const [res] = await operation.listNegativeKeywordsExtended(params)

      expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID)
      expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID)
      expect(res.keywordId).toBe(KEYWORD_ID)
      expect(res.keywordText).toBe(NEGATIVE_KEYWORD_TEXT)
      expect(res.matchType).toBe(NegativeKeywordMatchTypeEnum.NEGATIVE_EXACT)
    })
  })
})
