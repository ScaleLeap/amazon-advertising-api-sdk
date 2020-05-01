import { omit } from 'lodash'
import { Decode } from '../../../decorators'
import { BaseReportOperation } from '../base-report-operation'
import { ReportResponse } from '../report-response'
import { SponsoredProductsAdGroupReportParams } from './sponsored-products-ad-group-report-params'
import { SponsoredProductsAsinsReportParams } from './sponsored-products-asins-report-params'
import { SponsoredProductsCampaignReportParams } from './sponsored-products-campaign-report-params'
import { SponsoredProductsKeywordReportParams } from './sponsored-products-keyword-report-params'
import { SponsoredProductsProductAdsReportParams } from './sponsored-products-product-ads-report-params'
import { SponsoredProductsTargetsReportParams } from './sponsored-products-targets-report-params'
import { SponsoredProductsReportType } from '../report-types'

type SponsoredProductsReportParams =
  | SponsoredProductsAdGroupReportParams
  | SponsoredProductsAsinsReportParams
  | SponsoredProductsCampaignReportParams
  | SponsoredProductsKeywordReportParams
  | SponsoredProductsProductAdsReportParams
  | SponsoredProductsTargetsReportParams

/**
 * Paper-over the incosistency of the API.
 * The API returns `recordType` in singular, while it is documented to return it in plural.
 * And in the case of ASIN report, it returns `otherAsin` for some reason.
 */
function fixRecordTypeResponse(res: ReportResponse): ReportResponse {
  if (res.status === 'SUCCESS') {
    return res
  }

  const fix = (recordType: SponsoredProductsReportType): ReportResponse => {
    return Object.assign(res, { recordType })
  }

  switch (res.recordType) {
    case 'campaign':
      return fix('campaigns')
    case 'adGroup':
      return fix('adGroups')
    case 'keyword':
      return fix('keywords')
    case 'productAd':
      return fix('productAds')
    case 'otherAsin':
      return fix('asins')
    default:
      return res
  }
}

export class SponsoredProductsReportOperation<
  ReportParams extends SponsoredProductsReportParams
> extends BaseReportOperation {
  private type = 'sp'

  protected async requestReportByUri(uri: string, params: ReportParams): Promise<ReportResponse> {
    const res = await this.client.post<ReportResponse>(
      uri,
      this.paramsFilterTransformerReal(omit(params, ['recordType']), ['metrics']),
    )

    return fixRecordTypeResponse(res)
  }

  /**
   * Request the creation of a performance report for asins which have performance data to report.
   *
   * @privateRemarks
   * @param params -
   * @returns
   */
  private requestAsinReport(params: ReportParams) {
    return this.requestReportByUri(
      `${this.version}/${params.recordType}/report`,
      // add undocumented param `campaignType`, without it the request fails
      Object.assign({ campaignType: 'sponsoredProducts' }, params),
    )
  }

  /**
   * Request the creation of a performance report for all entities of a single type which have performance data to report.
   * Record types can be: campaigns, adGroups, keywords, productAds, and targets
   *
   * @param params -
   * @returns
   */
  @Decode(ReportResponse)
  public requestReport(params: ReportParams) {
    if (params.recordType === 'asins') {
      return this.requestAsinReport(params)
    }

    return this.client.post<ReportResponse>(
      `${this.version}/${this.type}/${params.recordType}/report`,
      this.paramsFilterTransformerReal(omit(params, ['recordType']), ['metrics']),
    )
  }
}
