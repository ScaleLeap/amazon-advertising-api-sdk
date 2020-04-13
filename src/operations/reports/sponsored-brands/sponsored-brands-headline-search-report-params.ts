import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { SponsoredBrandsHeadlineSearchReportMetrics } from '../metrics'

export interface SponsoredBrandsHeadlineSearchReportParams
  extends BaseReportParams<
    SponsoredBrandsReportTypeEnum,
    SponsoredBrandsHeadlineSearchReportMetrics
  > {
  recordType: SponsoredBrandsReportTypeEnum.HEADLINE_SEARCH
}
