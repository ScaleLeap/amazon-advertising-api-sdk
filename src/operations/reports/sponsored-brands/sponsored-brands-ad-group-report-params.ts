import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { SponsoredProductsAdGroupReportMetrics } from '../metrics/sponsored-products-ad-group-report-metrics'

export interface SponsoredBrandsAdGroupReportParams
  extends BaseReportParams<SponsoredBrandsReportTypeEnum, SponsoredProductsAdGroupReportMetrics> {
  recordType: SponsoredBrandsReportTypeEnum.AD_GROUPS
}
