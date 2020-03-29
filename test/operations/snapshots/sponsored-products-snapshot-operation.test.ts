import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredProductsSnapshotOperation } from '../../../src/operations/snapshots/sponsored-products-snapshot-operation'
import { httpClientFactory } from '../../http-client-factory'
import {
  RecordTypeRequestEnum,
  SnapshotStateEnum,
  SnapshotStatusEnum,
} from '../../../src/operations/snapshots/types'
import { delay } from '../../test-utils'

describe('SponsoredProductsSnapshotOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsSnapshotOperation)

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
