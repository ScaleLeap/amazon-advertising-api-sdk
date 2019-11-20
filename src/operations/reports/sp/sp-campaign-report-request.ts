import { BaseReportRequest } from '../base-report-request'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { CampaignReportMetricsEnum } from '../metrics/campaign-report-metrics-enum'

export interface SponsoredProductsCampaignReportRequest
  extends BaseReportRequest<SponsoredProductsReportTypeEnum, CampaignReportMetricsEnum> {
  recordType: SponsoredProductsReportTypeEnum.CAMPAIGNS
}
