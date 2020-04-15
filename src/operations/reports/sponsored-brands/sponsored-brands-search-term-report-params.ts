import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { SponsoredBrandsSearchTermReportMetrics } from '../metrics'

export interface SponsoredBrandsSearchTermReportParams
  extends BaseReportParams<SponsoredBrandsReportTypeEnum, SponsoredBrandsSearchTermReportMetrics> {
  recordType: SponsoredBrandsReportTypeEnum.SEARCH_TERM
}
