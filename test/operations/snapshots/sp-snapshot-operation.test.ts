import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredProductsSnapshotOperation } from '../../../src/operations/snapshots/sp-snapshot-operation'
import { httpClientFactory } from '../../http-client-factory'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import {
  RecordTypeEnum,
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
    it(`should return a snapshot report for all entities of a single record type ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.requestSnapshot(RecordTypeRequestEnum.CAMPAIGNS, {})

      expect(res.recordType).toBe(RecordTypeEnum.CAMPAIGN)
    })

    it(`should return a snapshot report for all entities of a single record type with additional attributes satisfying optional criteria ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.requestSnapshot(RecordTypeRequestEnum.AD_GROUPS, {
        stateFilter: SnapshotStateEnum.ARCHIVED,
      })

      expect(res.recordType).toBe(RecordTypeEnum.AD_GROUP)
    })
  })

  describe('getSnapshot', () => {
    it(`should return a snapshot with a specific snapshot id ${POLLY_PASSTHROUGH_TAG}`, async () => {
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
