import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { ProductAdsReportMetricsEnum } from '../metrics/product-ads-report-metrics-enum'

export interface SponsoredProductsProductAdsReportParams
  extends BaseReportParams<SponsoredProductsReportTypeEnum, ProductAdsReportMetricsEnum> {
  recordType: SponsoredProductsReportTypeEnum.PRODUCT_ADS
}
