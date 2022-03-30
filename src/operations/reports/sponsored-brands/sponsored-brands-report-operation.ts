import { omit } from 'lodash'
import { Decode } from '../../../decorators'
import { BaseReportOperation } from '../base-report-operation'
import { ReportResponse } from '../report-response'
import {
  SponsoredBrandsAdGroupReportParams,
  SponsoredBrandsCampaignReportParams,
  SponsoredBrandsKeywordReportParams,
  SponsoredBrandsTargetReportParams,
} from './index'

export type SponsoredBrandsReportParams =
  | SponsoredBrandsAdGroupReportParams
  | SponsoredBrandsCampaignReportParams
  | SponsoredBrandsKeywordReportParams
  | SponsoredBrandsTargetReportParams

export class SponsoredBrandsReportOperation<
  ReportParams extends SponsoredBrandsReportParams,
> extends BaseReportOperation {
  private type = 'hsa'

  /**
   * Request the creation of a performance report for all entities of a single type which have performance data to report.
   * Record types can be: campaigns, adGroups, and keywords
   *
   * @param params -
   * @returns
   */
  @Decode(ReportResponse)
  public requestReport(params: ReportParams) {
    return this.client.post<ReportResponse>(
      `${this.version}/${this.type}/${params.recordType}/report`,
      this.paramsFilterTransformerReal(omit(params, ['recordType']), ['metrics']),
    )
  }
}
