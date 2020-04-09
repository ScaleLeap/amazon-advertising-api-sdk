import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  ListCampaignsParams,
  CampaignId,
  CampaignResponse,
  SponsoredBrandsCampaignUpdateParams,
  SponsoredBrandsCampaignCreateParams,
  SponsoredBrandsCampaign,
} from './types'

export class SponsoredBrandsCampaignOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/campaigns`

  /**
   * Gets a campaign specified by identifier
   *
   * @param {CampaignId} campaignId
   * @returns
   * @memberof SponsoredBrandsCampaignOperation
   */
  @Decode(SponsoredBrandsCampaign)
  public getCampaign(campaignId: CampaignId) {
    return this.client.get<SponsoredBrandsCampaign>(`${this.resource}/${campaignId}`)
  }

  /**
   * Gets an array of all campaigns associated with the client identifier passed in the authorization header, filtered by specified criteria.
   *
   * @param {ListCampaignsParams} [params]
   * @returns
   * @memberof SponsoredBrandsCampaignOperation
   */
  @DecodeArray(SponsoredBrandsCampaign)
  public listCampaigns(params?: ListCampaignsParams) {
    return this.client.get<SponsoredBrandsCampaign[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Creates one or more new Campaigns
   *
   * @param {SponsoredBrandsCampaignCreateParams[]} campaigns
   * @returns
   * @memberof SponsoredBrandsCampaignOperation
   */
  @DecodeArray(CampaignResponse)
  public createCampaigns(campaigns: SponsoredBrandsCampaignCreateParams[]) {
    return this.client.post<CampaignResponse[]>(this.resource, campaigns)
  }

  /**
   * Updates one or more campaigns.
   *
   * @param {SponsoredBrandsCampaignUpdateParams[]} campaigns
   * @returns
   * @memberof SponsoredBrandsCampaignOperation
   */
  @DecodeArray(CampaignResponse)
  public updateCampaigns(campaigns: SponsoredBrandsCampaignUpdateParams[]) {
    return this.client.put<CampaignResponse[]>(this.resource, campaigns)
  }

  /**
   * Archives a campaign specified by identifier.
   *
   * @param {CampaignId} campaignId
   * @returns
   * @memberof SponsoredBrandsCampaignOperation
   */
  @Decode(CampaignResponse)
  public archiveCampaign(campaignId: CampaignId) {
    return this.client.delete<CampaignResponse>(`${this.resource}/${campaignId}`)
  }
}
