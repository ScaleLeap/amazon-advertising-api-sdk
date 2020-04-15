import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { SponsoredBrandsKeywordReportMetrics } from '../metrics'

export interface SponsoredBrandsKeywordReportParams
  extends BaseReportParams<SponsoredBrandsReportTypeEnum, SponsoredBrandsKeywordReportMetrics> {
  recordType: SponsoredBrandsReportTypeEnum.KEYWORDS
}
