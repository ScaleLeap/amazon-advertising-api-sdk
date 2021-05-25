import * as t from 'io-ts'

/**
 * Metrics specific to remarketing and T00020 tactic ad group.
 */
export const SponsoredDisplayAsinReportMetrics = t.union([
  t.literal('campaignName'),
  t.literal('campaignId'),
  t.literal('adGroupName'),
  t.literal('adGroupId'),
  t.literal('asin'),
  t.literal('otherAsin'),
  t.literal('sku'),
  t.literal('currency'),
  t.literal('attributedUnitsOrdered1dOtherSKU'),
  t.literal('attributedUnitsOrdered7dOtherSKU'),
  t.literal('attributedUnitsOrdered14dOtherSKU'),
  t.literal('attributedUnitsOrdered30dOtherSKU'),
  t.literal('attributedSales1dOtherSKU'),
  t.literal('attributedSales7dOtherSKU'),
  t.literal('attributedSales14dOtherSKU'),
  t.literal('attributedSales30dOtherSKU'),
])

export type SponsoredDisplayAsinReportMetrics = t.TypeOf<typeof SponsoredDisplayAsinReportMetrics>
