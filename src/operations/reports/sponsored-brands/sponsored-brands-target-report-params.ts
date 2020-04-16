import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { SponsoredBrandsTargetReportMetrics } from '../metrics'

export interface SponsoredBrandsTargetReportParams
  extends BaseReportParams<SponsoredBrandsReportTypeEnum, SponsoredBrandsTargetReportMetrics> {
  recordType: SponsoredBrandsReportTypeEnum.TARGETS
}
