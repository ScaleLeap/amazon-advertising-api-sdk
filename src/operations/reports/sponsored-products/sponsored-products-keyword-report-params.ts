import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { KeywordReportMetricsEnum } from '../metrics/keyword-report-metrics-enum'

export interface SponsoredProductsKeywordReportParams
  extends BaseReportParams<SponsoredProductsReportTypeEnum, KeywordReportMetricsEnum> {
  recordType: SponsoredProductsReportTypeEnum.KEYWORDS
}
