import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { SponsoredBrandsCampaignReportMetrics } from '../metrics'

export interface SponsoredBrandsCampaignReportParams
  extends BaseReportParams<SponsoredBrandsReportTypeEnum, SponsoredBrandsCampaignReportMetrics> {
  recordType: SponsoredBrandsReportTypeEnum.CAMPAIGNS
}
