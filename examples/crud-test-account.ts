import { amazonAdvertising } from './auth'
import { AmazonMarketplaceAdvertisingCountryCode } from '@scaleleap/amazon-marketplaces'
import { CreateAccount } from '../src/operations/test-accounts/types'

const testAccountOperation = amazonAdvertising.testAccount
const REQUEST_ID = 'VMTZD2V14R745AHA5C4S'

// Retrieves a single testAccount specified by identifier.
testAccountOperation.getTestAccount(REQUEST_ID)

// Retrieves one or more testAccounts associated with the authorization passed in the request header.
testAccountOperation.listTestAccounts()

// Registers a brand in the sandbox environment.
const createTestAccount: CreateAccount = {
  countryCode: AmazonMarketplaceAdvertisingCountryCode.IT,
  accountType: 'VENDOR',
  accountMetaData: {
    vendorCode: 'ABCDE',
  },
}
testAccountOperation.createTestAccount(createTestAccount)
