import { omit } from 'lodash'
import { Decode } from '../../../decorators'
import { BaseReportOperation } from '../base-report-operation'
import { ReportResponse } from '../report-response'
import { SponsoredBrandsAdGroupReportParams } from './sb-adgroup-report-params'
import { SponsoredBrandsCampaignReportParams } from './sb-campaign-report-params'
import { SponsoredBrandsKeywordReportParams } from './sb-keyword-report-params'

type SponsoredBrandsReportParams =
  | SponsoredBrandsAdGroupReportParams
  | SponsoredBrandsCampaignReportParams
  | SponsoredBrandsKeywordReportParams

export class SponsoredBrandsReportOperation<
  ReportParams extends SponsoredBrandsReportParams
> extends BaseReportOperation {
  private type = 'hsa'

  @Decode(ReportResponse)
  public requestReport(params: ReportParams) {
    return this.client.post<ReportResponse>(
      `${this.version}/${this.type}/${params.recordType}/report`,
      this.paramsFilterTransformerReal(omit(params, ['recordType']), ['metrics']),
    )
  }
}
