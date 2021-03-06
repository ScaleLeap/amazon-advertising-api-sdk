import { SponsoredProductsAdGroupKeywordsOperation } from '../../../src/operations/keywords/sponsored-products-ad-group-keywords-operation'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import {
  Keyword,
  CreateKeywordsParam,
  KeywordExtended,
  UpdateKeywordsParam,
  KeywordResponseStatus,
} from '../../../src/operations/keywords/types'

describe('SponsoredProductsAdGroupKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsAdGroupKeywordsOperation)
  const MANUAL_CAMPAIGN_ID = 164069484151709
  const MANUAL_AD_GROUP_ID = 149522344269714
  const ARCHIVED_KEYWORD_ID = 16577721726418
  const PAUSED_KEYWORD_ID = 239748696088896

  describe('getBiddableKeyword', () => {
    it(`should return a Keyword`, async () => {
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
    it(`should return a KeywordExtended`, async () => {
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
    it(`should create a keyword`, async () => {
      const params: CreateKeywordsParam[] = [
        {
          campaignId: MANUAL_CAMPAIGN_ID,
          adGroupId: MANUAL_AD_GROUP_ID,
          keywordText: 'Apple',
          matchType: 'broad',
          state: 'paused',
        },
      ]
      const [res] = await operation.createKeywords(params)

      expect(res.code).toEqual<KeywordResponseStatus>('SUCCESS')
    })
  })

  describe('updateKeywords', () => {
    it(`should update a keyword`, async () => {
      const params: UpdateKeywordsParam[] = [
        {
          keywordId: PAUSED_KEYWORD_ID,
          state: 'paused',
          bid: 1,
        },
      ]
      const [res] = await operation.updateKeywords(params)

      expect(res.code).toEqual<KeywordResponseStatus>('SUCCESS')
    })
  })

  describe('archiveBiddableKeyword', () => {
    it(`should archive a keyword`, async () => {
      const res = await operation.archiveBiddableKeyword(ARCHIVED_KEYWORD_ID)

      expect(res.code).toEqual<KeywordResponseStatus>('SUCCESS')
    })
  })

  describe('listBiddableKeywords', () => {
    it(`should return an array of Keywords`, async () => {
      const res: Keyword[] = await operation.listBiddableKeywords()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('listBiddableKeywordsExtended', () => {
    it(`should return an array of KeywordExtendeds`, async () => {
      const res: KeywordExtended[] = await operation.listBiddableKeywordsExtended()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })
})
