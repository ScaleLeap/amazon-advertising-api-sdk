import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { CampaignReportMetricsEnum } from '../metrics/campaign-report-metrics-enum'

export interface SponsoredProductsCampaignReportParams
  extends BaseReportParams<SponsoredProductsReportTypeEnum, CampaignReportMetricsEnum> {
  recordType: SponsoredProductsReportTypeEnum.CAMPAIGNS
}
