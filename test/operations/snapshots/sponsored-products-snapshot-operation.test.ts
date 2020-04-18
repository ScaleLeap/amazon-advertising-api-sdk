import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredProductsSnapshotOperation } from '../../../src/operations/snapshots/sponsored-products-snapshot-operation'
import { httpClientFactory } from '../../http-client-factory'
import { SuccessSnapshotResponse } from '../../../src/operations/snapshots/types'
import { Keyword, KeywordMatchType, KeywordState } from '../../../src'

describe('SponsoredProductsSnapshotOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsSnapshotOperation)

  describe('downloadSnapshot', () => {
    it(`should return a snapshot uncompressed`, async () => {
      const param: SuccessSnapshotResponse = {
        snapshotId: 'amzn1.clicksAPI.v1.p1.5E820B56.b56140e7-dae5-4188-b8d6-001bb9845843',
        status: 'SUCCESS',
        statusDetails: 'Snapshot has been successfully generated.',
        location:
          'https://advertising-api-test.amazon.com/v1/snapshots/amzn1.clicksAPI.v1.p1.5E820B56.b56140e7-dae5-4188-b8d6-001bb9845843/download',
        fileSize: 148,
        expiration: new Date(),
      }

      const [res] = await operation.downloadSnapshot<Keyword[]>(param)

      expect(res.adGroupId).toEqual(149522344269714)
      expect(res.campaignId).toEqual(164069484151709)
      expect(res.keywordId).toEqual(239748696088896)
      expect(res.keywordText).toEqual('Apple')
      expect(res.matchType).toEqual<KeywordMatchType>('broad')
      expect(res.state).toEqual<KeywordState>('paused')
    })
  })

  describe('requestSnapshot', () => {
    it(`should return a snapshot report for all entities of a single record type`, async () => {
      const res = await operation.requestSnapshot('campaigns', {})

      expect(res.status).toEqual('IN_PROGRESS')
    })

    it(`should return a snapshot report for all entities of a single record type with additional attributes satisfying optional criteria`, async () => {
      const res = await operation.requestSnapshot('adGroups', {
        stateFilter: 'archived',
      })

      expect(res.status).toEqual('IN_PROGRESS')
    })
  })

  describe('getSnapshot', () => {
    it(`should return a snapshot with a specific snapshot id`, async () => {
      expect.assertions(4)
      const requestSnapshotResponse = await operation.requestSnapshot('keywords', {})

      const res = await operation.getSnapshot(requestSnapshotResponse.snapshotId)

      expect(res.snapshotId).toBe(requestSnapshotResponse.snapshotId)
      if (res.status == 'SUCCESS') {
        expect(res).toHaveProperty('location')
        expect(res).toHaveProperty('fileSize')
        expect(res).toHaveProperty('statusDetails')
      }
    })
  })
})
