import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { ProductTargetingReportMetricsEnum } from '../metrics/product-targeting-report-metrics-enum'

export interface SponsoredProductsTargetsReportParams
  extends BaseReportParams<SponsoredProductsReportTypeEnum, ProductTargetingReportMetricsEnum> {
  recordType: SponsoredProductsReportTypeEnum.PRODUCT_ATTRIBUTE_TARGETING
}
