import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredBrandsSnapshotOperation } from '../../../src/operations/snapshots/sponsored-brands-snapshot-operation'
import { SANDBOX_URI, auth } from '../../http-client-factory'
import {
  SnapshotStateEnum,
  SnapshotStatusEnum,
  SponsoredBrandsRecordTypeEnum,
  SuccessSnapshotResponse,
} from '../../../src/operations/snapshots/types'
import { HttpClient, Campaign } from '../../../src'

jest.setTimeout(15000)

describe('SponsoredBrandsSnapshotOperation', () => {
  const client = new HttpClient(SANDBOX_URI, { ...auth, scope: 2973802954634317 }, true)
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsSnapshotOperation)

  /**
   * TODO: Need check again on Production API. Sandbox API return xml response
   * Log: https://github.com/ScaleLeap/amazon-advertising-api-sdk/runs/558316956?check_suite_focus=true
   */
  describe.skip('downloadSnapshot', () => {
    it(`should return a snapshot uncompressed`, async () => {
      const param: SuccessSnapshotResponse = {
        snapshotId: 'amzn1.clicksAPI.v1.p1.5E82F8C3.b1095870-c8b5-47c2-b4ef-0c404c3e4fc9',
        status: SnapshotStatusEnum.SUCCESS,
        statusDetails: 'Snapshot has been successfully generated.',
        location:
          'https://advertising-api-test.amazon.com/v1/snapshots/amzn1.clicksAPI.v1.p1.5E82F8C3.b1095870-c8b5-47c2-b4ef-0c404c3e4fc9/download',
        fileSize: 148,
        expiration: new Date(),
      }

      const [res] = await operation.downloadSnapshot<Campaign[]>(param)

      expect(res).toHaveProperty('campaignId')
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
        expect(res.location).toBeTruthy()
        expect(res).toHaveProperty('location')
        expect(res).toHaveProperty('fileSize')
      }
    })
  })
})
