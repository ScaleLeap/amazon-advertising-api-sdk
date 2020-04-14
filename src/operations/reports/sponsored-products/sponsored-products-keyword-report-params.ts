import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { SponsoredProductsKeywordReportMetrics } from '../metrics/sponsored-products-keyword-report-metrics'

export interface SponsoredProductsKeywordReportParams
  extends BaseReportParams<SponsoredProductsReportTypeEnum, SponsoredProductsKeywordReportMetrics> {
  recordType: SponsoredProductsReportTypeEnum.KEYWORDS
}
