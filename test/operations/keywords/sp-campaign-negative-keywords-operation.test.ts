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
} from '../../../src/operations/keywords/types'

setupPolly()

describe('SponsoredProductsCampaignNegativeKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsCampaignNegativeKeywordsOperation)
  const MANUAL_CAMPAIGN_ID = 164069484151709
  const NEGATIVE_KEYWORD_TEXT = 'banana'

  describe('createCampaignNegativeKeywords', () => {
    it(`should create a negative keyword for campaign ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: CreateCampaignNegativeKeywordsParam[] = [
        {
          campaignId: MANUAL_CAMPAIGN_ID,

          keywordText: NEGATIVE_KEYWORD_TEXT,

          matchType: CampaignNegativeKeywordMatchTypeEnum.NEGATIVE_EXACT,

          state: CampaignNegativeKeywordStateEnum.ENABLED,
        },
      ]
      const [res] = await operation.createCampaignNegativeKeywords(params)

      expect(res.code).toEqual(CampaignNegativeKeywordResponseStatusEnum.SUCCESS)
    })
  })
})
