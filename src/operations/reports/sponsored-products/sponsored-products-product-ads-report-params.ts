import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { SponsoredProductsProductAdsReportMetrics } from '../metrics/sponsored-products-product-ads-report-metrics'

export interface SponsoredProductsProductAdsReportParams
  extends BaseReportParams<
    SponsoredProductsReportTypeEnum,
    SponsoredProductsProductAdsReportMetrics
  > {
  recordType: SponsoredProductsReportTypeEnum.PRODUCT_ADS
}
