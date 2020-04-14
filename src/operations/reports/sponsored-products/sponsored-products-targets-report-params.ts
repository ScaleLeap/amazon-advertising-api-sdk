import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { SponsoredProductsProductTargetingReportMetrics } from '../metrics/sponsored-products-product-targeting-report-metrics'

export interface SponsoredProductsTargetsReportParams
  extends BaseReportParams<
    SponsoredProductsReportTypeEnum,
    SponsoredProductsProductTargetingReportMetrics
  > {
  recordType: SponsoredProductsReportTypeEnum.PRODUCT_ATTRIBUTE_TARGETING
}
