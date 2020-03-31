import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredProductsSnapshotOperation } from '../../../src/operations/snapshots/sponsored-products-snapshot-operation'
import { httpClientFactory } from '../../http-client-factory'
import {
  RecordTypeRequestEnum,
  SnapshotStateEnum,
  SnapshotStatusEnum,
  SuccessSnapshotResponse,
} from '../../../src/operations/snapshots/types'
import { delay } from '../../test-utils'

describe('SponsoredProductsSnapshotOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsSnapshotOperation)

  describe('downloadSnapshot', () => {
    it(`should return a snapshot uncompressed`, async () => {
      const param: SuccessSnapshotResponse = {
        snapshotId: 'amzn1.clicksAPI.v1.p1.5E820B56.b56140e7-dae5-4188-b8d6-001bb9845843',
        status: SnapshotStatusEnum.SUCCESS,
        statusDetails: 'Snapshot has been successfully generated.',
        location:
          'https://advertising-api-test.amazon.com/v1/snapshots/amzn1.clicksAPI.v1.p1.5E820B56.b56140e7-dae5-4188-b8d6-001bb9845843/download',
        fileSize: 148,
        expiration: new Date(),
      }

      const res = await operation.downloadSnapshot(param)

      expect(res.length).toBeGreaterThan(0)
    })
  })

  describe('requestSnapshot', () => {
    it(`should return a snapshot report for all entities of a single record type`, async () => {
      const res = await operation.requestSnapshot(RecordTypeRequestEnum.CAMPAIGNS, {})

      expect(res).toHaveProperty('recordType')
      expect(res.status).toEqual(SnapshotStatusEnum.IN_PROGRESS)
    })

    it(`should return a snapshot report for all entities of a single record type with additional attributes satisfying optional criteria`, async () => {
      const res = await operation.requestSnapshot(RecordTypeRequestEnum.AD_GROUPS, {
        stateFilter: SnapshotStateEnum.ARCHIVED,
      })

      expect(res).toHaveProperty('recordType')
      expect(res.status).toEqual(SnapshotStatusEnum.IN_PROGRESS)
    })
  })

  describe('getSnapshot', () => {
    it(`should return a snapshot with a specific snapshot id`, async () => {
      const requestSnapshotResponse = await operation.requestSnapshot(
        RecordTypeRequestEnum.KEYWORDS,
        {},
      )

      await delay()

      const res = await operation.getSnapshot(requestSnapshotResponse.snapshotId)

      expect(res.snapshotId).toBe(requestSnapshotResponse.snapshotId)
      if (res.status == SnapshotStatusEnum.SUCCESS) {
        expect(res).toHaveProperty('location')
        expect(res).toHaveProperty('fileSize')
      }
    })
  })
})
