import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportType } from '../report-types'
import { SponsoredProductsProductAdsReportMetrics } from '../metrics/sponsored-products-product-ads-report-metrics'

export interface SponsoredProductsProductAdsReportParams
  extends BaseReportParams<SponsoredProductsReportType, SponsoredProductsProductAdsReportMetrics> {
  recordType: 'productAds'
}
