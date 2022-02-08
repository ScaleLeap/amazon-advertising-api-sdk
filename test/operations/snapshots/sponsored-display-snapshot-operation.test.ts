import { OperationProvider } from '../../../src/operations/operation-provider'
import { httpClientFactory } from '../../http-client-factory'
import { SponsoredDisplaySnapshotOperation } from '../../../src/operations/snapshots/sponsored-display-snapshot-operation'

describe(`${SponsoredDisplaySnapshotOperation.name}`, () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredDisplaySnapshotOperation)

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
})
