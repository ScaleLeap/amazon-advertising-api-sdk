import * as t from 'io-ts'

export const ProfileId = t.number
export type ProfileId = t.TypeOf<typeof ProfileId>

export const ProfileResponse = t.strict({
  /**
   * The ID of the profile that was updated, if successful.
   */
  profileId: ProfileId,

  /**
   * An enumerated success or error code for machine use.
   */
  code: t.string,

  /**
   * A human-readable description of the error, if unsuccessful.
   */
  details: t.string,
})
export type ProfileResponse = t.TypeOf<typeof ProfileResponse>

const CountryCode = t.union([
  t.literal('AU'),
  t.literal('CA'),
  t.literal('DE'),
  t.literal('ES'),
  t.literal('FR'),
  t.literal('IT'),
  t.literal('JP'),
  t.literal('UK'),
  t.literal('US'),
])
export type CountryCode = t.TypeOf<typeof CountryCode>

export const CurrencyCode = t.union([
  t.literal('AUD'),
  t.literal('CAD'),
  t.literal('EUR'),
  t.literal('GBP'),
  t.literal('JPY'),
  t.literal('USD'),
])
export type CurrencyCode = t.TypeOf<typeof CurrencyCode>

export const TimeZone = t.union([
  t.literal('America/Los_Angeles'),
  t.literal('Asia/Tokyo'),
  t.literal('Australia/Sydney'),
  t.literal('Europe/London'),
  t.literal('Europe/Paris'),
])
export type TimeZone = t.TypeOf<typeof TimeZone>

export const AccountInfoType = t.union([t.literal('seller'), t.literal('vendor')])
export type AccountInfoType = t.TypeOf<typeof AccountInfoType>

export const AccountInfo = t.strict({
  /**
   * The string identifier for the marketplace associated with this profile.
   *
   * This is the same identifier used by MWS.
   */
  description: t.string,

  /**
   * The string identifier for the ID associated with this account.
   */
  id: t.string,

  /**
   * The string identifier for the account name.
   */
  name: t.string,

  /**
   * The type of account being called.
   */
  type: AccountInfoType,
})
export type AccountInfo = t.TypeOf<typeof AccountInfo>

export const Profile = t.strict({
  /**
   * The ID of the profile.
   */
  profileId: ProfileId,

  /**
   * The country code identifying the publisher(s) on which ads will run.
   */
  countryCode: CountryCode,

  /**
   * The currency used for all monetary values for entities under this profile.
   */
  currencyCode: CurrencyCode,

  /**
   * The optional budget shared by all entities created under this profile.
   * TODO: setup a check for minimums.
   */
  dailyBudget: t.number,

  /**
   * The tz database time zone used for all date-based campaign management and reporting.
   */
  timeZone: TimeZone,

  /**
   * Account info.
   */
  accountInfo: AccountInfo,
})
export type Profile = t.TypeOf<typeof Profile>
