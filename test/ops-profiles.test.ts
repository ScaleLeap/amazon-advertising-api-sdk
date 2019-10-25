import { OperationProvider } from '../src/operations/operation-provider'
import { ProfileOperation } from '../src/operations/profiles/ProfileOperation'
import { httpClientFactory } from './http-client-factory'
import { Profile } from '../src/operations/profiles/types'
import setupPolly from './polly'

setupPolly()

describe('ProfileOperation', () => {
  describe('listProfiles', () => {
    it('should return an array or profiles', async () => {
      const client = httpClientFactory()
      const operationProvider = new OperationProvider(client)
      const profileOperation = operationProvider.create(ProfileOperation)
      const res: Profile[] = await profileOperation.listProfiles()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })
})
