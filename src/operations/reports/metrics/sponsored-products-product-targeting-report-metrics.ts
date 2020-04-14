import * as t from 'io-ts'

export const SponsoredProductsProductTargetingReportMetrics = t.union([
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
   * ID of the targeting expression used in a bid
   */
  t.literal('targetId'),

  /**
   * A string representation of your expression object in targeting clauses
   */
  t.literal('targetingExpression'),

  /**
   * A resolved string representation of your expression object in targeting clauses
   */
  t.literal('targetingText'),

  /**
   * Type of matching for the targeting expression used in bid. For manually created expressions this value is: TARGETING_EXPRESSION. For auto-targeting expressions this value is: TARGETING_EXPRESSION_PREDEFINED
   */
  t.literal('targetingType'),

  /**
   * Total ad impressions
   */
  t.literal('impressions'),

  /**
   * Total ad clicks
   */
  t.literal('clicks'),

  /**
   * Total cost of all clicks. Can be divided by clicks to obtain average CPC
   */
  t.literal('cost'),

  /**
   * Number of attributed conversion events occurring within 1 day of click on ad
   */
  t.literal('attributedConversions1d'),

  /**
   * Number of attributed conversion events occurring within 7 days of click on ad
   */
  t.literal('attributedConversions7d'),

  /**
   * Number of attributed conversion events occurring within 14 days of click on ad
   */
  t.literal('attributedConversions14d'),

  /**
   * Number of attributed conversion events occurring within 30 days of click on ad
   */
  t.literal('attributedConversions30d'),

  /**
   * Number of attributed conversion events occurring within 1 day of click on ad where the purchased SKU was the same as the one advertised
   */
  t.literal('attributedConversions1dSameSKU'),

  /**
   * Number of attributed conversion events occurring within 7 days of click on ad where the purchased SKU was the same as the one advertised
   */
  t.literal('attributedConversions7dSameSKU'),

  /**
   * Number of attributed conversion events occurring within 14 days of click on ad where the purchased SKU was the same as the one advertised
   */
  t.literal('attributedConversions14dSameSKU'),

  /**
   * Number of attributed conversion events occurring within 30 days of click on ad where the purchased SKU was the same as the one advertised
   */
  t.literal('attributedConversions30dSameSKU'),

  /**
   * Number of attributed units ordered within 1 day of click on ad
   */
  t.literal('attributedUnitsOrdered1d'),

  /**
   * Number of attributed units ordered within 7 days of click on ad
   */
  t.literal('attributedUnitsOrdered7d'),

  /**
   * Number of attributed units ordered within 14 days of click on ad
   */
  t.literal('attributedUnitsOrdered14d'),

  /**
   * Number of attributed units ordered within 30 days of click on ad
   */
  t.literal('attributedUnitsOrdered30d'),

  /**
   * Number of attributed sales occurring within 1 day of click on ad
   */
  t.literal('attributedSales1d'),

  /**
   * Number of attributed sales occurring within 7 days of click on ad
   */
  t.literal('attributedSales7d'),

  /**
   * Number of attributed sales occurring within 14 days of click on ad
   */
  t.literal('attributedSales14d'),

  /**
   * Number of attributed sales occurring within 30 days of click on ad
   */
  t.literal('attributedSales30d'),

  /**
   * Aggregate value of attributed sales occurring within 1 day of click on ad where the purchased SKU was the same as the one advertised
   */
  t.literal('attributedSales1dSameSKU'),

  /**
   * Aggregate value of attributed sales occurring within 7 days of click on ad where the purchased SKU was the same as the one advertised
   */
  t.literal('attributedSales7dSameSKU'),

  /**
   * Aggregate value of attributed sales occurring within 14 days of click on ad where the purchased SKU was the same as the one advertised
   */
  t.literal('attributedSales14dSameSKU'),

  /**
   * Aggregate value of attributed sales occurring within 30 days of click on ad where the purchased SKU was the same as the one advertised
   */
  t.literal('attributedSales30dSameSKU'),

  /**
   * Number of attributed units ordered within 1 day of click on ad where the purchased SKU was the same as the one advertised.
   */
  t.literal('attributedUnitsOrdered1dSameSKU'),

  /**
   * Number of attributed units ordered within 7 days of click on ad where the purchased SKU was the same as the one advertised.
   */
  t.literal('attributedUnitsOrdered7dSameSKU'),

  /**
   * Number of attributed units ordered within 14 days of click on ad where the purchased SKU was the same as the one advertised.
   */
  t.literal('attributedUnitsOrdered14dSameSKU'),

  /**
   * Number of attributed units ordered within 30 days of click on ad where the purchased SKU was the same as the one advertised.
   */
  t.literal('attributedUnitsOrdered30dSameSKU'),
])
export type SponsoredProductsProductTargetingReportMetrics = t.TypeOf<
  typeof SponsoredProductsProductTargetingReportMetrics
>
