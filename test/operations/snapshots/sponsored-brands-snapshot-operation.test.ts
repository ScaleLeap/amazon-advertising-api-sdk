import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredBrandsSnapshotOperation } from '../../../src/operations/snapshots/sponsored-brands-snapshot-operation'
import { SANDBOX_URI, auth } from '../../http-client-factory'
import {
  SnapshotStateEnum,
  SnapshotStatusEnum,
  SponsoredBrandsRecordTypeEnum,
} from '../../../src/operations/snapshots/types'
import { HttpClient } from '../../../src'

jest.setTimeout(15000)

describe('SponsoredBrandsSnapshotOperation', () => {
  const client = new HttpClient(SANDBOX_URI, { ...auth, scope: 2973802954634317 }, true)
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsSnapshotOperation)

  describe('requestSnapshot', () => {
    it(`should return a snapshot report for all entities of a single record type`, async () => {
      const res = await operation.requestSnapshot(SponsoredBrandsRecordTypeEnum.CAMPAIGNS, {})

      expect(res).toHaveProperty('recordType')
      expect(res.status).toEqual(SnapshotStatusEnum.IN_PROGRESS)
    })

    it(`should return a snapshot report for all entities of a single record type with additional attributes satisfying optional criteria`, async () => {
      const res = await operation.requestSnapshot(SponsoredBrandsRecordTypeEnum.KEYWORDS, {
        stateFilter: SnapshotStateEnum.ARCHIVED,
      })

      expect(res).toHaveProperty('recordType')
      expect(res.status).toEqual(SnapshotStatusEnum.IN_PROGRESS)
    })
  })

  describe('getSnapshot', () => {
    it(`should return a snapshot with a specific snapshot id`, async () => {
      const requestSnapshotResponse = await operation.requestSnapshot(
        SponsoredBrandsRecordTypeEnum.CAMPAIGNS,
        {},
      )

      const res = await operation.getSnapshot(requestSnapshotResponse.snapshotId)

      expect(res.snapshotId).toBe(requestSnapshotResponse.snapshotId)
      if (res.status == SnapshotStatusEnum.SUCCESS) {
        expect(res).toHaveProperty('location')
        expect(res).toHaveProperty('fileSize')
      }
    })
  })
})
