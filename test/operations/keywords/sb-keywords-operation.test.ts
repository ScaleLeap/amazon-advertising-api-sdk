import { SponsoredBrandsKeywordsOperation } from '../../../src/operations/keywords/sb-keywords-operation'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import {
  CreateSBKeywordParams,
  KeywordMatchTypeEnum,
  KeywordResponseStatusEnum,
  SBKeyword,
  ListSBKeywordParams,
  KeywordStateEnum,
} from '../../../src/operations/keywords/types'

describe('SponsoredBrandsKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsKeywordsOperation)
  const CAMPAIGN_ID = 164069484151709
  const AD_GROUP_ID = 149522344269714
  const KEYWORD_TEXT = 'Pear'
  const BID = 1

  describe('listKeywords', () => {
    it(`should return an array of keywords ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: SBKeyword[] = await operation.listKeywords()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should return an array of keywords filtered by optional criteria ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: ListSBKeywordParams = {
        startIndex: 0,
        count: 1,
        matchTypeFilter: [KeywordMatchTypeEnum.PHRASE],
        keywordText: KEYWORD_TEXT,
        stateFilter: KeywordStateEnum.PAUSED,
        campaignIdFilter: [CAMPAIGN_ID],
        adGroupIdFilter: [AD_GROUP_ID],
      }
      const res: SBKeyword[] = await operation.listKeywords(params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe.skip('createKeywords', () => {
    it(`should create a sb keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: CreateSBKeywordParams[] = [
        {
          adGroupId: AD_GROUP_ID,
          campaignId: CAMPAIGN_ID,
          keywordText: KEYWORD_TEXT,
          matchType: KeywordMatchTypeEnum.BROAD,
          bid: BID,
        },
      ]
      const [res] = await operation.createKeywords(params)

      expect(res.code).toEqual(KeywordResponseStatusEnum.SUCCESS)
    })
  })
})
