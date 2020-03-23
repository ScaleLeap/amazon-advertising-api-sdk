import * as t from 'io-ts'

import {
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
} from '@scaleleap/amazon-marketplaces'

export class EnumType<A> extends t.Type<A> {
  public readonly _tag: 'EnumType' = 'EnumType'
  public enumObject!: object
  public constructor(e: object, name?: string) {
    super(
      name || 'enum',
      (u): u is A => Object.values(this.enumObject).some((v) => v === u),
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    )
    this.enumObject = e
  }
}

// simple helper function
export const createEnumType = <T>(e: object, name?: string) => new EnumType<T>(e, name)

export const AmazonMarketplaceAdvertisingCountryCodeType = createEnumType<
  AmazonMarketplaceAdvertisingCountryCode
>(AmazonMarketplaceAdvertisingCountryCode)
export type AmazonMarketplaceAdvertisingCountryCodeType = t.TypeOf<
  typeof AmazonMarketplaceAdvertisingCountryCodeType
>

export const AmazonMarketplaceAdvertisingCurrencyType = createEnumType<
  AmazonMarketplaceAdvertisingCurrency
>(AmazonMarketplaceAdvertisingCurrency)
export type AmazonMarketplaceAdvertisingCurrencyType = t.TypeOf<
  typeof AmazonMarketplaceAdvertisingCurrencyType
>

export const AmazonMarketplaceAdvertisingTimeZoneType = createEnumType<
  AmazonMarketplaceAdvertisingTimeZone
>(AmazonMarketplaceAdvertisingTimeZone)
export type AmazonMarketplaceAdvertisingTimeZoneType = t.TypeOf<
  typeof AmazonMarketplaceAdvertisingTimeZoneType
>

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
