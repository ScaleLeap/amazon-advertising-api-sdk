import * as t from 'io-ts'

export const SponsoredProductsAsinsReportMetrics = t.union([
  /**
   * Unique name of the campaign
   */
  t.literal('campaignName'),

  /**
   * Unique numerical ID of the campaign
   */
  t.literal('campaignId'),

  /**
   * Unique name of the ad group
   */
  t.literal('adGroupName'),

  /**
   * Unique numerical ID of the ad group
   */
  t.literal('adGroupId'),

  /**
   * Unique numerical ID of the keyword
   */
  t.literal('keywordId'),

  /**
   * Keyword or phrase used in bid
   */
  t.literal('keywordText'),

  /**
   * Unique ASIN advertised
   */
  t.literal('asin'),

  /**
   * A non-dimensional metric for ASINs other than the one advertised
   */
  t.literal('otherAsin'),

  /**
   * Unique SKU advertised. Not available for vendors.
   */
  t.literal('sku'),

  /**
   * A dimensional metric
   */
  t.literal('currency'),

  /**
   * One of: broad, phrase, or exact
   */
  t.literal('matchType'),

  /**
   * Number of ASIN (SKU) units sold. 1 day.
   */
  t.literal('attributedUnitsOrdered1d'),

  /**
   * Number of ASIN (SKU) units sold. 7 days.
   */
  t.literal('attributedUnitsOrdered7d'),

  /**
   * Number of ASIN (SKU) units sold. 14 days.
   */
  t.literal('attributedUnitsOrdered14d'),

  /**
   * Number of ASIN (SKU) units sold. 30 days.
   */
  t.literal('attributedUnitsOrdered30d'),

  /**
   * Number of other ASIN (SKU) units sold. 1 day.
   */
  t.literal('attributedUnitsOrdered1dOtherSKU'),

  /**
   * Number of other ASIN (SKU) units sold. 7 days.
   */
  t.literal('attributedUnitsOrdered7dOtherSKU'),

  /**
   * Number of other ASIN (SKU) units sold. 14 days.
   */
  t.literal('attributedUnitsOrdered14dOtherSKU'),

  /**
   * Number of other ASIN (SKU) units sold. 30 days.
   */
  t.literal('attributedUnitsOrdered30dOtherSKU'),

  /**
   * Sales for another ASIN (SKU). 1 day.
   */
  t.literal('attributedSales1dOtherSKU'),

  /**
   * Sales for another ASIN (SKU). 7 days.
   */
  t.literal('attributedSales7dOtherSKU'),

  /**
   * Sales for another ASIN (sku). 14 days.
   */
  t.literal('attributedSales14dOtherSKU'),

  /**
   * Sales for another ASIN (sku). 30 days.
   */
  t.literal('attributedSales30dOtherSKU'),
])
export type SponsoredProductsAsinsReportMetrics = t.TypeOf<
  typeof SponsoredProductsAsinsReportMetrics
>
