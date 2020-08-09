import * as t from 'io-ts'

/**
 * The type of entity for which the Sponsored Products report should be generated.
 */
export const SponsoredProductsReportType = t.union([
  t.literal('campaigns'),
  t.literal('adGroups'),
  t.literal('keywords'),
  t.literal('asins'),
  t.literal('productAds'),
  t.literal('targets'),
])
export type SponsoredProductsReportType = t.TypeOf<typeof SponsoredProductsReportType>

/**
 * The type of entity for which the Sponsored Brands report should be generated.
 */
export const SponsoredBrandsReportType = t.union([
  t.literal('campaigns'),
  t.literal('adGroups'),
  t.literal('keywords'),
  t.literal('headlineSearch'),
  t.literal('searchTerms'),
  t.literal('targets'),
])
export type SponsoredBrandsReportType = t.TypeOf<typeof SponsoredBrandsReportType>

/**
 * The type of entity for which the Sponsored Brands report should be generated.
 */
export const SponsoredDisplayReportType = t.union([
  t.literal('campaigns'),
  t.literal('adGroups'),
  t.literal('productAds'),
  t.literal('targets'),
])
export type SponsoredDisplayReportType = t.TypeOf<typeof SponsoredDisplayReportType>
