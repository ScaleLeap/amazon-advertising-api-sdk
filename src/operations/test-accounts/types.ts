import * as t from 'io-ts'
import {
  AmazonMarketplaceAdvertisingCountryCodeType
} from '../commons/types'

export const RequestId = t.string
export type RequestId = t.TypeOf<typeof RequestId>

export const AccountMetaData = t.intersection([
  t.type({
    vendorCode: t.string
  })
])
export type AccountMetaData = t.TypeOf<typeof AccountMetaData>

export const AccountInfoType = t.union([
  t.literal('AUTHOR'),
  t.literal('VENDOR')
])
export type AccountInfoType = t.TypeOf<typeof AccountInfoType>

export const CreateAccount = t.intersection([
  t.type({
    /**
     * The country code identifying the publisher(s) on which ads will run.
     */
    countryCode: AmazonMarketplaceAdvertisingCountryCodeType,
    accountMetaData: AccountMetaData,
    /**
     * Account info.
     */
    accountType: AccountInfoType,
  })
])
export type CreateAccount = t.TypeOf<typeof CreateAccount>

export const CreateAccountResponseStatus = t.union([
  t.literal('IN_PROGRESS'),
  t.literal('COMPLETED'),
  t.literal('FAILED'),
])
export type CreateAccountResponseStatus = t.TypeOf<typeof CreateAccountResponseStatus>

export const CreateAccountResponse = t.intersection([
  t.type({
    /**
     * The RequestId of the account that was created
     */
    requestId: RequestId
  })
])
export type CreateAccountResponse = t.TypeOf<typeof CreateAccountResponse>

export const Account = t.intersection([
  t.type({
    countryCode: AmazonMarketplaceAdvertisingCountryCodeType,
    asins: t.array(t.string),
    accountType: AccountInfoType,
    id: t.string,
    status: CreateAccountResponseStatus
  })
])
export type Account = t.TypeOf<typeof Account>