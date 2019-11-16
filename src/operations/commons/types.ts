import * as t from 'io-ts'

export class EnumType<A> extends t.Type<A> {
  public readonly _tag: 'EnumType' = 'EnumType'
  public enumObject!: object
  public constructor(e: object, name?: string) {
    super(
      name || 'enum',
      (u): u is A => Object.values(this.enumObject).some(v => v === u),
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    )
    this.enumObject = e
  }
}

// simple helper function
export const createEnumType = <T>(e: object, name?: string) => new EnumType<T>(e, name)

export enum CountryCode {
  AU = 'AU',
  CA = 'CA',
  DE = 'DE',
  ES = 'ES',
  FR = 'FR',
  IT = 'IT',
  JP = 'JP',
  UK = 'UK',
  US = 'US',
}

export const CountryCodeType = createEnumType<CountryCode>(CountryCode)
export type CountryCodeType = t.TypeOf<typeof CountryCodeType>

export enum CurrencyCode {
  AUD = 'AUD',
  CAD = 'CAD',
  EUR = 'EUR',
  GBP = 'GBP',
  JPY = 'JPY',
  USD = 'USD',
}

export const CurrencyCodeType = createEnumType<CurrencyCode>(CurrencyCode)
export type CurrencyCodeType = t.TypeOf<typeof CurrencyCodeType>

export enum TimeZone {
  AMERICA_LOS_ANGELES = 'America/Los_Angeles',
  ASIA_TOKYO = 'Asia/Tokyo',
  AUSTRALIA_SYDNEY = 'Australia/Sydney',
  EUROPE_LONDON = 'Europe/London',
  EUROPE_PARIS = 'Europe/Paris',
}

export const TimeZoneType = createEnumType<TimeZone>(TimeZone)
export type TimeZoneType = t.TypeOf<typeof TimeZoneType>

export const ListPagination = t.partial({
  /**
   * 0-indexed record offset for the result set. Defaults to 0.
   */
  startIndex: t.number,

  /**
   * Number of records to include in the paged response. Defaults to max page size.
   */
  count: t.number,
})
export type ListPagination = t.TypeOf<typeof ListPagination>

export const ResponseStatus = t.strict({
  /**
   * An enumerated success or error code for machine use.
   */
  code: t.number,

  /**
   * A human-readable description of the error, if unsuccessful.
   */
  details: t.string,
})
export type ResponseStatus = t.TypeOf<typeof ResponseStatus>
