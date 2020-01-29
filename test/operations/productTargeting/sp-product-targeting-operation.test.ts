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
  ListTargetingClausesParams,
  UpdateTargetingClausesParams,
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

  describe('getTargetingClause', () => {
    it(`should retrieve a targeting clause with a specific target ID ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getTargetingClause(TARGET_ID)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(TARGET_ID)
    })
  })

  describe('getTargetingClauseExtended', () => {
    it(`should retrieve a targeting clause with additional attributes using a specific target ID ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getTargetingClauseExtended(TARGET_ID)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(TARGET_ID)
    })
  })

  describe('listTargetingClauses', () => {
    it(`should retrieve a list of targeting clauses ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.listTargetingClauses()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should retrieve a list of targeting clauses satisfying optional criteria ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: ListTargetingClausesParams = {
        startIndex: 0,
        count: 1,
        campaignIdFilter: [CAMPAIGN_ID],
        adGroupIdFilter: [AD_GROUP_ID],
        targetIdFilter: [TARGET_ID],
      }
      const [res] = await operation.listTargetingClauses(params)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(TARGET_ID)
    })
  })

  describe('listTargetingClausesExtended', () => {
    it(`should retrieve a list of targeting clauses with additional attributes ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.listTargetingClausesExtended()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should retrieve a list of targeting clauses with additional attributes satisfying optional criteria ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: ListTargetingClausesParams = {
        startIndex: 0,
        count: 1,
        campaignIdFilter: [CAMPAIGN_ID],
        adGroupIdFilter: [AD_GROUP_ID],
        targetIdFilter: [TARGET_ID],
      }
      const [res] = await operation.listTargetingClausesExtended(params)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(TARGET_ID)
    })
  })

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

  describe('updateTargetingClauses', () => {
    it(`should updates one or more targeting clauses ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: UpdateTargetingClausesParams[] = [
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
      const res = await operation.updateTargetingClauses(params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe.skip('archiveTargetingClause', () => {
    it(`should set the status of targeting clauses to archived ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.archiveTargetingClause(TARGET_ID)

      expect(res).toHaveProperty('targetId')
    })
  })
})
