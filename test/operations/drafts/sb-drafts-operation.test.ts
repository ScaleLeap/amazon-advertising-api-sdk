import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import { SponsoredBrandsDraftsOperation } from '../../../src/operations/drafts/sb-drafts-operation'
import { SBDraftCampaign, BudgetTypeEnum } from '../../../src/operations/drafts/types'
import {
  KeywordMatchTypeEnum,
  NegativeKeywordMatchTypeEnum,
} from '../../../src/operations/keywords/types'

/**
 * TODO: Need check on Production API again. Sandbox API return error:
 * Could not find resource for full path: https://advertising-api-test.amazon.com/v1/hsa/drafts/campaigns
 */
describe.skip('SponsoredBrandsDraftsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsDraftsOperation)
  const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']
  const URL = 'https://www.google.com'

  describe('createDraftCampaigns', () => {
    it(`should create one or more sb draft campaigns ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: SBDraftCampaign[] = [
        {
          name: 'Draft Campaign 1',
          budget: 1,
          budgetType: BudgetTypeEnum.LIFETIME,
          startDate: '20201001',
          endDate: '20201031',
          bidOptimization: true,
          bidMultiplier: 0,
          portfolioId: 0,
          creative: {
            brandName: 'string',
            brandLogoAssetID: 'string',
            brandLogoUrl: URL,
            headline: 'string',
            asins: ASINS,
            shouldOptimizeAsins: false,
          },
          landingPage: {
            asins: ASINS,
            url: URL,
          },
          keywords: [
            {
              keywordText: 'string1',
              matchType: KeywordMatchTypeEnum.BROAD,
              bid: 1,
            },
          ],
          negativeKeywords: [
            {
              keywordText: 'string2',
              matchType: NegativeKeywordMatchTypeEnum.NEGATIVE_EXACT,
            },
          ],
        },
      ]
      const res = await operation.createDraftCampaigns(params)

      expect(res).toHaveProperty('draftCampaignId')
    })
  })
})
