import * as t from 'io-ts'

export const SponsoredDisplayCommonReportMetrics = t.union([
  /**
   * The name of the campaign.
   */
  t.literal('campaignName'),

  /**
   * The identifier of the campaign.
   */
  t.literal('campaignId'),

  /**
   * Total number of ad impressions.
   */
  t.literal('impressions'),

  /**
   * Total number of ad clicks associated with the campaign.
   */
  t.literal('clicks'),

  /**
   * The total cost of all ad clicks for the campaign. Divide cost by clicks to calculate average cost per click (CPC).
   */
  t.literal('cost'),

  /**
   * The currency code associated with the campaign.
   */
  t.literal('currency'),

  /**
   * Total number of attributed conversion events occuring within 24 hours of ad click.
   */
  t.literal('attributedConversions1d'),

  /**
   * Total number of attributed conversion events occuring within 7 days of ad click.
   */
  t.literal('attributedConversions7d'),

  /**
   * Total number of attributed conversion events occuring within 14 days of ad click.
   */
  t.literal('attributedConversions14d'),

  /**
   * Total number of attributed conversion events occuring within 30 days of ad click.
   */
  t.literal('attributedConversions30d'),

  /**
   * Total number of attributed conversion events occuring within 24 hours of ad click, where the SKU of the product advertised and the SKU of the conversion event are equivalent.
   */
  t.literal('attributedConversions1dSameSKU'),

  /**
   * Total number of attributed conversion events occuring within 7 days of ad click, where the SKU of the product advertised and the SKU of the conversion event are equivalent.
   */
  t.literal('attributedConversions7dSameSKU'),

  /**
   * Total number of attributed conversion events occuring within 14 days of ad click, where the SKU of the product advertised and the SKU of the conversion event are equivalent.
   */
  t.literal('attributedConversions14dSameSKU'),

  /**
   * Total number of attributed conversion events occuring within 30 days of ad click, where the SKU of the product advertised and the SKU of the conversion event are equivalent.
   */
  t.literal('attributedConversions30dSameSKU'),

  /**
   * Total number of attributed units ordered within 24 hours of ad click.
   */
  t.literal('attributedUnitsOrdered1d'),

  /**
   * Total number of attributed units ordered within 7 days of ad click.
   */
  t.literal('attributedUnitsOrdered7d'),

  /**
   * Total number of attributed units ordered within 14 days of ad click.
   */
  t.literal('attributedUnitsOrdered14d'),

  /**
   * Total number of attributed units ordered within 30 days of ad click.
   */
  t.literal('attributedUnitsOrdered30d'),

  /**
   * Total number of attributed sales occuring within 24 hours of ad click.
   */
  t.literal('attributedSales1d'),

  /**
   * Total number of attributed sales occuring within 7 days of ad click.
   */
  t.literal('attributedSales7d'),

  /**
   * Total number of attributed sales occuring within 14 days of ad click.
   */
  t.literal('attributedSales14d'),

  /**
   * Total number of attributed sales occuring within 30 days of ad click.
   */
  t.literal('attributedSales30d'),

  /**
   * Aggregate value of all attributed sales occuring within 24 hours of ad click, where the SKU of the product advertised and the SKU of the purchased item are equivalent.
   */
  t.literal('attributedSales1dSameSKU'),

  /**
   * Aggregate value of all attributed sales occuring within 7 days of ad click, where the SKU of the product advertised and the SKU of the purchased item are equivalent.
   */
  t.literal('attributedSales7dSameSKU'),

  /**
   * Aggregate value of all attributed sales occuring within 14 days of ad click, where the SKU of the product advertised and the SKU of the purchased item are equivalent.
   */
  t.literal('attributedSales14dSameSKU'),

  /**
   * Aggregate value of all attributed sales occuring within 30 days of ad click, where the SKU of the product advertised and the SKU of the purchased item are equivalent.
   */
  t.literal('attributedSales30dSameSKU'),
])
export type SponsoredDisplayCommonReportMetrics = t.TypeOf<
  typeof SponsoredDisplayCommonReportMetrics
>
