import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { KeywordReportMetricsEnum } from '../metrics/keyword-report-metrics-enum'

export interface SponsoredBrandsKeywordReportParams
  extends BaseReportParams<SponsoredBrandsReportTypeEnum, KeywordReportMetricsEnum> {
  recordType: SponsoredBrandsReportTypeEnum.KEYWORDS
}
