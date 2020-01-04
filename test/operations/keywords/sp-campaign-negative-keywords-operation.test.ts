import setupPolly from '../../polly'
import { SponsoredProductsCampaignNegativeKeywordsOperation } from '../../../src/operations/keywords/sp-campaign-negative-keywords-operation'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import {
  CreateCampaignNegativeKeywordsParam,
  CampaignNegativeKeywordMatchTypeEnum,
  CampaignNegativeKeywordStateEnum,
  CampaignNegativeKeywordResponseStatusEnum,
  CampaignNegativeKeyword,
  CampaignNegativeKeywordExtended,
  ListCampaignNegativeKeywordsParam,
  UpdateCampaignNegativeKeywordsParam,
} from '../../../src/operations/keywords/types'

setupPolly()

describe('SponsoredProductsCampaignNegativeKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsCampaignNegativeKeywordsOperation)
  const MANUAL_CAMPAIGN_ID = 164069484151709
  const KEYWORD_ID = 38353327298089
  const KEYWORD_TEXT = 'banana'

  describe.skip('getCampaignNegativeKeyword', () => {
    it(`should return a campaign negative keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getCampaignNegativeKeyword(KEYWORD_ID)

      expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID)
      expect(res.keywordId).toBe(KEYWORD_ID)
      expect(res.keywordText).toBe(KEYWORD_TEXT)
      expect(res.matchType).toBe(CampaignNegativeKeywordMatchTypeEnum.NEGATIVE_EXACT)
    })
  })

  describe.skip('getCampaignNegativeKeywordExtended', () => {
    it(`should return a campaign negative keyword extended ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getCampaignNegativeKeywordExtended(KEYWORD_ID)

      expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID)
      expect(res.keywordId).toBe(KEYWORD_ID)
      expect(res.keywordText).toBe(KEYWORD_TEXT)
      expect(res.matchType).toBe(CampaignNegativeKeywordMatchTypeEnum.NEGATIVE_EXACT)
    })
  })

  describe('createCampaignNegativeKeywords', () => {
    it(`should create a negative keyword for campaign ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: CreateCampaignNegativeKeywordsParam[] = [
        {
          campaignId: MANUAL_CAMPAIGN_ID,

          keywordText: KEYWORD_TEXT,

          matchType: CampaignNegativeKeywordMatchTypeEnum.NEGATIVE_EXACT,

          state: CampaignNegativeKeywordStateEnum.ENABLED,
        },
      ]
      const [res] = await operation.createCampaignNegativeKeywords(params)

      expect(res.code).toEqual(CampaignNegativeKeywordResponseStatusEnum.SUCCESS)
    })
  })

  describe.skip('updateCampaignNegativeKeywords', () => {
    it(`should update a campaign negative keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: UpdateCampaignNegativeKeywordsParam[] = [
        {
          keywordId: KEYWORD_ID,
          state: CampaignNegativeKeywordStateEnum.DELETED,
        },
      ]
      const [res] = await operation.updateCampaignNegativeKeywords(params)

      expect(res.code).toEqual(CampaignNegativeKeywordResponseStatusEnum.SUCCESS)
    })
  })

  describe.skip('archiveCampaignNegativeKeyword', () => {
    it(`should archive a campaign negative keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.archiveCampaignNegativeKeyword(KEYWORD_ID)

      expect(res.code).toEqual(CampaignNegativeKeywordResponseStatusEnum.SUCCESS)
    })
  })

  describe.skip('listCampaignNegativeKeywords', () => {
    it(`should return an array of campaign negative keywords ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: CampaignNegativeKeyword[] = await operation.listCampaignNegativeKeywords()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should return an array of campaign negative keywords when filter additional properties ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: ListCampaignNegativeKeywordsParam = {
        startIndex: 0,
        count: 1,
        matchTypeFilter: CampaignNegativeKeywordMatchTypeEnum.NEGATIVE_EXACT,
        keywordText: KEYWORD_TEXT,
        campaignIdFilter: [MANUAL_CAMPAIGN_ID],
      }
      const [res] = await operation.listCampaignNegativeKeywords(params)

      expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID)
      expect(res.keywordId).toBe(KEYWORD_ID)
      expect(res.keywordText).toBe(KEYWORD_TEXT)
      expect(res.matchType).toBe(CampaignNegativeKeywordMatchTypeEnum.NEGATIVE_EXACT)
    })
  })

  describe.skip('listCampaignNegativeKeywordsExtended', () => {
    it(`should return an array of campaign negative keywords extendeds ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: CampaignNegativeKeywordExtended[] = await operation.listCampaignNegativeKeywordsExtended()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should return an array of campaign negative keywords extendeds when filter additional properties ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: ListCampaignNegativeKeywordsParam = {
        startIndex: 0,
        count: 1,
        matchTypeFilter: CampaignNegativeKeywordMatchTypeEnum.NEGATIVE_EXACT,
        keywordText: KEYWORD_TEXT,
        campaignIdFilter: [MANUAL_CAMPAIGN_ID],
      }
      const [res] = await operation.listCampaignNegativeKeywordsExtended(params)

      expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID)
      expect(res.keywordId).toBe(KEYWORD_ID)
      expect(res.keywordText).toBe(KEYWORD_TEXT)
      expect(res.matchType).toBe(CampaignNegativeKeywordMatchTypeEnum.NEGATIVE_EXACT)
    })
  })
})
