import { omit } from 'lodash'
import { Decode } from '../../../decorators'
import { Operation } from '../../operation'
import { ReportResponse, ReportId, ReportResponseStatusEnum } from '../report-response'
import { SponsoredProductsAdGroupReportParams } from './sp-adgroup-report-params'
import { SponsoredProductsAsinsReportParams } from './sp-asins-report-params'
import { SponsoredProductsCampaignReportParams } from './sp-campaign-report-params'
import { SponsoredProductsKeywordReportParams } from './sp-keyword-report-params'
import { SponsoredProductsProductAdsReportParams } from './sp-product-ads-report-params'
import { SponsoredProductsTargetsReportParams } from './sp-target-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { CampaignTypeEnum } from '../../campaigns/types'

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
  if (res.status === ReportResponseStatusEnum.SUCCESS) {
    return res
  }

  const fix = (recordType: SponsoredProductsReportTypeEnum): ReportResponse => {
    return Object.assign(res, { recordType })
  }

  switch (res.recordType) {
    case 'campaign':
      return fix(SponsoredProductsReportTypeEnum.CAMPAIGNS)
    case 'adGroup':
      return fix(SponsoredProductsReportTypeEnum.AD_GROUPS)
    case 'keyword':
      return fix(SponsoredProductsReportTypeEnum.KEYWORDS)
    case 'productAd':
      return fix(SponsoredProductsReportTypeEnum.PRODUCT_ADS)
    case 'otherAsin':
      return fix(SponsoredProductsReportTypeEnum.ASINS)
    default:
      return res
  }
}


export class SponsoredProductsReportOperation<
  ReportParams extends SponsoredProductsReportParams
> extends Operation {
  private type = 'sp'

  protected async requestReportByUri(
    uri: string,
    params: ReportParams,
  ): Promise<ReportResponse> {
    const res = await this.client.post<ReportResponse>(
      uri,
      this.paramsFilterTransformerReal(omit(params, ['recordType']), ['metrics']),
    )

    return fixRecordTypeResponse(res)
  }

  private requestAsinReport(params: ReportParams){
    return this.requestReportByUri(
      `${this.version}/${params.recordType}/report`,
      // add undocumented param `campaignType`, without it the request fails
      Object.assign({ campaignType: CampaignTypeEnum.SPONSORED_PRODUCTS }, params),
    )
  }

  @Decode(ReportResponse)
  public requestReport(params: ReportParams) {
    if (params.recordType === SponsoredProductsReportTypeEnum.ASINS) {
      return this.requestAsinReport(params)
    }

    return this.client.post<ReportResponse>(
      `${this.version}/${this.type}/${params.recordType}/report`,
      this.paramsFilterTransformerReal(omit(params, ['recordType']), ['metrics']),
    )
  }

  @Decode(ReportResponse)
  public getReport(reportId: ReportId) {
    return this.client.get<ReportResponse>(`${this.version}/reports/${reportId}`)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public async downloadReport<T extends string>(
    reportId: ReportId,
  ): Promise<Partial<Record<T, 'number' | 'string'>>[]> {
    return this.client.download(`${this.version}/reports/${reportId}/download`)
  }
}
