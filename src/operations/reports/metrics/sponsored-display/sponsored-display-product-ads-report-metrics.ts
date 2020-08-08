import * as t from 'io-ts'
import { SponsoredDisplayAdGroupReportMetrics } from './sponsored-display-ad-group-report-metrics'

/**
 * Metrics specific to remarketing and T00020 tactic product ad.
 */
export const SponsoredDisplayProductAdsReportMetrics = t.union([
  SponsoredDisplayAdGroupReportMetrics,

  t.union([
    /**
     * The ASIN of the product.
     */
    t.literal('asin'),

    /**
     * The SKU of the product.
     */
    t.literal('sku'),

    /**
     * The unique numerical ID of the ad.
     */
    t.literal('adId'),
  ]),
])

export type SponsoredDisplayProductAdsReportMetrics = t.TypeOf<
  typeof SponsoredDisplayProductAdsReportMetrics
>
