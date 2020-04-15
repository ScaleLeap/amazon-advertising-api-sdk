import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { SponsoredBrandsAdGroupReportMetrics } from '../metrics'

export interface SponsoredBrandsAdGroupReportParams
  extends BaseReportParams<SponsoredBrandsReportTypeEnum, SponsoredBrandsAdGroupReportMetrics> {
  recordType: SponsoredBrandsReportTypeEnum.AD_GROUPS
}
