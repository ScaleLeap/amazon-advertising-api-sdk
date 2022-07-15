import { OperationProvider } from '../../../src/operations/operation-provider'
import { AccountOperation } from '../../../src/operations/test-accounts/test-account-operation'
import { httpClientFactory } from '../../http-client-factory'
import { Account } from '../../../src/operations/test-accounts/types'
import { AmazonMarketplaceAdvertisingCountryCode } from '@scaleleap/amazon-marketplaces'
import { delay } from '../../test-utils'

jest.setTimeout(15000)

describe('AccountOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const accountOperation = operationProvider.create(AccountOperation)
  const TEST_PROFILE_ID = 2984328618318898

  describe('listAccounts', () => {
    it(`should return an array or accounts`, async () => {
      const res: Account[] = await accountOperation.listTestAccounts()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('getAccount', () => {
    it(`should return a account object`, async () => {
      expect.assertions(2)
      const account = await accountOperation.getTestAccount(TEST_PROFILE_ID)

      expect(account).toBeTruthy()

      if (account) {
        expect(account.accountId).toBe(TEST_PROFILE_ID)
      }
    })
  })

  describe('updateAccounts', () => {
    it(`should update the account`, async () => {
      expect.assertions(5)
      const dailyBudget = 340

      const res = await accountOperation.updateAccounts([
        {
          accountId: TEST_PROFILE_ID,
          dailyBudget,
          accountInfo: {
            id: 'AUZWHWR0590BC',
            marketplaceStringId: 'ATVPDKIKX0DER',
            type: 'seller',
            subType: 'AMAZON_ATTRIBUTION',
          },
        },
      ])

      expect(res).toBeTruthy()
      expect(res).toHaveLength(1)

      if (res && res[0]) {
        expect(res[0].code).toBe('SUCCESS')
        expect(res[0].accountId).toBe(TEST_PROFILE_ID)
      }

      await delay()

      const account = await accountOperation.getAccount(TEST_PROFILE_ID)
      expect(account).toBeTruthy()
    })
  })

  describe('registerAccount', () => {
    it(`should work with default params`, async () => {
      const account = await accountOperation.registerAccount()
      expect(account).toBeTruthy()
    })
  })

  describe('registerBrand', () => {
    it(`should return success`, async () => {
      const param = {
        countryCode: AmazonMarketplaceAdvertisingCountryCode.US,
        brand: 'yay',
      }

      const res = await accountOperation.registerBrand(param)
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
      const [brand] = await accountOperation.getBrands()

      expect(brand.brandId).toBe('2973802954634317')
      expect(brand.brandRegistryName).toBe('yay')
    })
  })
})
