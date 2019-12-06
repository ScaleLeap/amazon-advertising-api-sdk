import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { AsinsReportMetricsEnum } from '../metrics/asins-report-metrics-enum'

export interface SponsoredProductsAsinsReportParams
  extends BaseReportParams<SponsoredProductsReportTypeEnum, AsinsReportMetricsEnum> {
  recordType: SponsoredProductsReportTypeEnum.ASINS
}
