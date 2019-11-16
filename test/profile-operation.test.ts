import { OperationProvider } from '../src/operations/operation-provider'
import { ProfileOperation } from '../src/operations/profiles/profile-operation'
import { httpClientFactory } from './http-client-factory'
import { Profile, RegisterProfileResponseStatus } from '../src/operations/profiles/types'
import setupPolly from './polly'
import { CountryCode } from '../src/operations/commons/types'
import { POLLY_PASSTHROUGH_TAG } from './constants'

setupPolly()

describe('ProfileOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const profileOperation = operationProvider.create(ProfileOperation)
  const TEST_PROFILE_ID = 2984328618318898

  describe('listProfiles', () => {
    it(`should return an array or profiles ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: Profile[] = await profileOperation.listProfiles()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('getProfile', () => {
    it(`should return a profile object ${POLLY_PASSTHROUGH_TAG}`, async () => {
      expect.assertions(2)
      const profile = await profileOperation.getProfile(TEST_PROFILE_ID)

      expect(profile).toBeTruthy()

      if (profile) {
        expect(profile.profileId).toBe(TEST_PROFILE_ID)
      }
    })
  })

  describe('updateProfiles', () => {
    it(`should update the profile ${POLLY_PASSTHROUGH_TAG}`, async () => {
      expect.assertions(5)
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
    })
  })

  describe.skip('registerProfile', () => {
    it(`should work with default params ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const profile = await profileOperation.registerProfile()
      expect(profile).toBeTruthy()
    })
  })

  describe.skip('registerBrand', () => {
    it(`should return success ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const param = {
        countryCode: CountryCode.US,
        brand: 'yay',
      }

      const res = await profileOperation.registerBrand(param)
      expect(res).toBeTruthy()
      expect(res.code).toBe(RegisterProfileResponseStatus.types[1].value)
    })
  })
})
