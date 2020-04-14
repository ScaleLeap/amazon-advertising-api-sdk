import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { SponsoredProductsKeywordReportMetrics } from '../metrics/sponsored-products-keyword-report-metrics'

export interface SponsoredBrandsKeywordReportParams
  extends BaseReportParams<SponsoredBrandsReportTypeEnum, SponsoredProductsKeywordReportMetrics> {
  recordType: SponsoredBrandsReportTypeEnum.KEYWORDS
}
