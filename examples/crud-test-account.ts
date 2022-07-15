import { amazonAdvertising } from './auth'

const testAccountOperation = amazonAdvertising.testAccount
const REQUEST_ID = 'VMTZD2V14R745AHA5C4S'

// Retrieves a single testAccount specified by identifier.
testAccountOperation.getTestAccount(REQUEST_ID)

// Retrieves one or more testAccounts associated with the authorization passed in the request header.
testAccountOperation.listTestAccounts()

// Registers a brand in the sandbox environment.
const createTestAccountParam = {
  countryCode: "IT",
  accountMetaData: {
    vendorCode: "ABCDE"
  },
  accountType: "VENDOR"
}
testAccountOperation.createTestAccount(createTestAccountParam)
