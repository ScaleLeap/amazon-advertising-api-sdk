import * as t from 'io-ts'

/**
 * These metrics are specific to T00001 tactic campaign reports.
 */
export const SponsoredDisplayCampaignReportMetrics = t.union([
  t.literal('campaignName'),
  t.literal('campaignId'),
  t.literal('campaignStatus'),
  t.literal('impressions'),
  t.literal('clicks'),
  t.literal('cost'),
  t.literal('currency'),
  t.literal('attributedConversions1d'),
  t.literal('attributedConversions7d'),
  t.literal('attributedConversions14d'),
  t.literal('attributedConversions30d'),
  t.literal('attributedConversions1dSameSKU'),
  t.literal('attributedConversions7dSameSKU'),
  t.literal('attributedConversions14dSameSKU'),
  t.literal('attributedConversions30dSameSKU'),
  t.literal('attributedUnitsOrdered1d'),
  t.literal('attributedUnitsOrdered7d'),
  t.literal('attributedUnitsOrdered14d'),
  t.literal('attributedUnitsOrdered30d'),
  t.literal('attributedSales1d'),
  t.literal('attributedSales7d'),
  t.literal('attributedSales14d'),
  t.literal('attributedSales30d'),
  t.literal('attributedSales1dSameSKU'),
  t.literal('attributedSales7dSameSKU'),
  t.literal('attributedSales14dSameSKU'),
  t.literal('attributedSales30dSameSKU'),
  t.literal('attributedOrdersNewToBrand14d'),
  t.literal('attributedSalesNewToBrand14d'),
  t.literal('attributedUnitsOrderedNewToBrand14d'),
  t.literal('attributedDPV14d'),
  t.literal('attributedUnitsSold14d'),
])

export type SponsoredDisplayCampaignReportMetrics = t.TypeOf<
  typeof SponsoredDisplayCampaignReportMetrics
>
