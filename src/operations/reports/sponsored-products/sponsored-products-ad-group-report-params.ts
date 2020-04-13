import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { SponsoredProductsAdGroupReportMetrics } from '../metrics/sponsored-products-ad-group-report-metrics'

export interface SponsoredProductsAdGroupReportParams
  extends BaseReportParams<SponsoredProductsReportTypeEnum, SponsoredProductsAdGroupReportMetrics> {
  recordType: SponsoredProductsReportTypeEnum.AD_GROUPS
}
