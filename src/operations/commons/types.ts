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

/**
 * The advertising tactic associated with the campaign.
 */
export const Tactic = t.union([
  /**
   * Reach shoppers who showed interest in categories related to your promoted products, or target specific products or product categories on Amazon.
   * This tactic is for use by only vendors.
   * This tactic is used to retrieve metrics for Sponsored Display campaigns that use interest, product or category audiences, including Sponsored Display campaigns that were previously Product Display Ads campaigns.
   * This tactic name is only applicable for the requestReport operation and does not apply to any other campaign management operations.
   */
  t.literal('T00001'),

  /**
   * Choose individual products to show your ads in placements related to those products.
   * [Categories] Categories: Choose individual categories to show your ads in placements related to those categories.
   */
  t.literal('T00020'),

  /**
   * Note that this advertising tactic is not currently supported. This note will be removed when this advertising tactic is available.
   * Select individual audiences to show your ads.
   */
  t.literal('T00030'),

  /**
   * Shoppers who viewed the detail pages of your advertised products or similar products.
   */
  t.literal('remarketing'),
])
export type Tactic = t.TypeOf<typeof Tactic>
