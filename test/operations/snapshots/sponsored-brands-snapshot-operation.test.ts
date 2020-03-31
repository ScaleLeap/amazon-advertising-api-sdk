import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredBrandsSnapshotOperation } from '../../../src/operations/snapshots/sponsored-brands-snapshot-operation'
import { SANDBOX_URI, auth } from '../../http-client-factory'
import {
  SnapshotStateEnum,
  SnapshotStatusEnum,
  SponsoredBrandsRecordTypeEnum,
  SuccessSnapshotResponse,
} from '../../../src/operations/snapshots/types'
import { HttpClient } from '../../../src'

jest.setTimeout(15000)

describe('SponsoredBrandsSnapshotOperation', () => {
  const client = new HttpClient(SANDBOX_URI, { ...auth, scope: 2973802954634317 }, true)
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsSnapshotOperation)

  describe.skip('downloadSnapshot', () => {
    it(`should return a snapshot uncompressed`, async () => {
      const param: SuccessSnapshotResponse = {
        snapshotId: 'amzn1.clicksAPI.v1.p1.5E738857.1c2be957-493d-4495-85e6-2530da68c5f6',
        status: SnapshotStatusEnum.SUCCESS,
        statusDetails: 'Snapshot has been successfully generated.',
        location:
          'https://advertising-api-test.amazon.com/v1/snapshots/amzn1.clicksAPI.v1.p1.5E738857.1c2be957-493d-4495-85e6-2530da68c5f6/download',
        fileSize: 148,
        expiration: new Date(),
      }

      const res = await operation.downloadSnapshot(param)

      expect(res.length).toBeGreaterThan(0)
    })
  })

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
