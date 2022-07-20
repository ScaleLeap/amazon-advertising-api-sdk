import { OperationProvider } from '../../../src/operations/operation-provider'
import { TestAccountOperation } from '../../../src/operations/test-accounts/test-account-operation'
import { httpClientFactory } from '../../http-client-factory'
import { Account } from '../../../src/operations/test-accounts/types'
import { AmazonMarketplaceAdvertisingCountryCode } from '@scaleleap/amazon-marketplaces'
import { delay } from '../../test-utils'

jest.setTimeout(15000)

describe.skip('TestAccountOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const accountOperation = operationProvider.create(TestAccountOperation)
  const REQUEST_ID = 'VMTZD2V14R745AHA5C4S'

  describe('listAccounts', () => {
    it(`should return an array of accounts`, async () => {
      const res: Account[] = await accountOperation.listTestAccounts()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('getAccount', () => {
    it(`should return a account object`, async () => {
      const account = await accountOperation.getTestAccount(REQUEST_ID)

      expect(account).toBeTruthy()
    })
  })

  describe('createTestAccount', () => {
    it(`should create the test account`, async () => {
      const res = await accountOperation.createTestAccount({
        countryCode: AmazonMarketplaceAdvertisingCountryCode.IT,
        accountType: 'VENDOR',
        accountMetaData: {
          vendorCode: 'ABCDE',
        },
      })

      expect(res).toBeTruthy()
      expect(res).toHaveLength(1)

      await delay()

      const account = await accountOperation.getTestAccount(REQUEST_ID)
      expect(account).toBeTruthy()
    })
  })
})
