import { OperationProvider } from '../../../src/operations/operation-provider'
import { ProfileOperation } from '../../../src/operations/profiles/profile-operation'
import { httpClientFactory } from '../../http-client-factory'
import { Profile } from '../../../src/operations/profiles/types'
import { AmazonMarketplaceAdvertisingCountryCode } from '@scaleleap/amazon-marketplaces'
import { delay } from '../../test-utils'

jest.setTimeout(15000)

describe('ProfileOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const profileOperation = operationProvider.create(ProfileOperation)
  const TEST_PROFILE_ID = 2984328618318898

  describe('listProfiles', () => {
    it(`should return an array or profiles`, async () => {
      const res: Profile[] = await profileOperation.listProfiles()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('getProfile', () => {
    it(`should return a profile object`, async () => {
      expect.assertions(2)
      const profile = await profileOperation.getProfile(TEST_PROFILE_ID)

      expect(profile).toBeTruthy()

      if (profile) {
        expect(profile.profileId).toBe(TEST_PROFILE_ID)
      }
    })
  })

  describe('updateProfiles', () => {
    it(`should update the profile`, async () => {
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

      await delay()

      const profile = await profileOperation.getProfile(TEST_PROFILE_ID)
      expect(profile).toBeTruthy()
    })
  })

  describe('registerProfile', () => {
    it(`should work with default params`, async () => {
      const profile = await profileOperation.registerProfile()
      expect(profile).toBeTruthy()
    })
  })

  describe('registerBrand', () => {
    it(`should return success`, async () => {
      const param = {
        countryCode: AmazonMarketplaceAdvertisingCountryCode.US,
        brand: 'yay',
      }

      const res = await profileOperation.registerBrand(param)
      expect(res).toBeTruthy()
      expect(res.code).toBe('SUCCESS')
    })
  })

  /**
   * TODO: Need check again on Production API. Sandbox API return an error:
   * ResourceNotFoundError: Could not find resource for full path: https://advertising-api-test.amazon.com/v2/brands
   */
  describe.skip('getBrands', () => {
    it(`should return an array of brands`, async () => {
      const [brand] = await profileOperation.getBrands()

      expect(brand.brandId).toBe('2973802954634317')
      expect(brand.brandRegistryName).toBe('yay')
    })
  })
})
