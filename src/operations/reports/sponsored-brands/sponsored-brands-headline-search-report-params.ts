import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { HeadlineSearchReportMetricsEnum } from '../metrics'

export interface SponsoredBrandsHeadlineSearchReportParams
  extends BaseReportParams<SponsoredBrandsReportTypeEnum, HeadlineSearchReportMetricsEnum> {
  recordType: SponsoredBrandsReportTypeEnum.HEADLINE_SEARCH
}
