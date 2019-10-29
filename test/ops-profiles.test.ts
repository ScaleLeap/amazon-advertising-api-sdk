import { OperationProvider } from '../src/operations/operation-provider'
import { ProfileOperation } from '../src/operations/profiles/ops-profiles'
import { httpClientFactory } from './http-client-factory'
import { Profile } from '../src/operations/profiles/types'
import setupPolly from './polly'

setupPolly()

describe('ProfileOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const profileOperation = operationProvider.create(ProfileOperation)
  const TEST_PROFILE_ID = 2984328618318898

  describe('listProfiles', () => {
    it('should return an array or profiles', async () => {
      const res: Profile[] = await profileOperation.listProfiles()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('getProfile', () => {
    it('should return a profile object', async () => {
      const profile = await profileOperation.getProfile(TEST_PROFILE_ID)

      expect(profile).toBeTruthy()

      if (profile) {
        expect(profile.profileId).toBe(TEST_PROFILE_ID)
      }
    })
  })

  describe('updateProfiles', () => {
    it('should update the profile', async () => {
      const dailyBudget = 340

      const res = await profileOperation.updateProfiles([
        {
          profileId: TEST_PROFILE_ID,
          dailyBudget,
        },
      ])

      expect(res).toBeTruthy()
      expect(res).toHaveLength(1)

      if (res && res[0]) {
        expect(res[0].code).toBe('SUCCESS')
        expect(res[0].profileId).toBe(TEST_PROFILE_ID)
      }

      const profile = await profileOperation.getProfile(TEST_PROFILE_ID)
      expect(profile).toBeTruthy()

      if (profile) {
        expect(profile.dailyBudget).toBe(dailyBudget)
      }
    })
  })
})
