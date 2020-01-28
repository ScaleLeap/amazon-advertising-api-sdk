import setupPolly from '../../polly'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import { SponsoredProductsProductTargetingOperation } from '../../../src/operations/productTargeting/sp-product-targeting-operation'
import {
  CreateTargetingClausesParams,
  TargetingClauseStateEnum,
  TargetingExpressionTypeEnum,
  ExpressionTypeEnum,
} from '../../../src/operations/productTargeting/types'

setupPolly()

describe('SponsoredProductsProductTargetingOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsProductTargetingOperation)
  const CAMPAIGN_ID = 164069484151709
  const AD_GROUP_ID = 202694745498469
  const TARGET_ID = 256247845256441
  const ASIN = 'B07663Z46Z'

  describe.skip('createTargetingClauses', () => {
    it(`should create one or more targeting expressions ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: CreateTargetingClausesParams[] = [
        {
          campaignId: CAMPAIGN_ID,
          adGroupId: AD_GROUP_ID,
          state: TargetingClauseStateEnum.PAUSED,
          expression: [
            {
              type: TargetingExpressionTypeEnum.ASIN_SAME_AS,
              value: ASIN,
            },
          ],
          expressionType: ExpressionTypeEnum.MANUAL,
          bid: 10,
        },
      ]
      const res = await operation.createTargetingClauses(params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })
})
