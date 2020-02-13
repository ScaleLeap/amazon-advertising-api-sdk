import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredProductsSnapshotOperation } from '../../../src/operations/snapshots/sp-snapshot-operation'
import { httpClientFactory } from '../../http-client-factory'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { RecordTypeEnum, RecordTypeRequestEnum } from '../../../src/operations/snapshots/types'

describe('SponsoredProductsSnapshotOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsSnapshotOperation)

  describe('requestSnapshot', () => {
    it(`should return a snapshot report for all entities of a single record type ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.requestSnapshot(RecordTypeRequestEnum.CAMPAIGNS, {})

      expect(res.recordType).toBe(RecordTypeEnum.CAMPAIGN)
    })
  })
})
