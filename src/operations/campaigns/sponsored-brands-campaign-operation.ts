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
   * @param campaignId -
   * @returns
   */
  @Decode(SponsoredBrandsCampaign)
  public getCampaign(campaignId: CampaignId) {
    return this.client.get<SponsoredBrandsCampaign>(`${this.resource}/${campaignId}`)
  }

  /**
   * Gets an array of all campaigns associated with the client identifier passed in the authorization header, filtered by specified criteria.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredBrandsCampaign)
  public listCampaigns(params?: ListCampaignsParams) {
    return this.client.get<SponsoredBrandsCampaign[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Creates one or more new Campaigns
   *
   * @param campaigns -
   * @returns
   */
  @DecodeArray(CampaignResponse)
  public createCampaigns(campaigns: SponsoredBrandsCampaignCreateParams[]) {
    return this.client.post<CampaignResponse[]>(this.resource, campaigns)
  }

  /**
   * Updates one or more campaigns.
   *
   * @param campaigns -
   * @returns
   */
  @DecodeArray(CampaignResponse)
  public updateCampaigns(campaigns: SponsoredBrandsCampaignUpdateParams[]) {
    return this.client.put<CampaignResponse[]>(this.resource, campaigns)
  }

  /**
   * Archives a campaign specified by identifier.
   *
   * @param campaignId -
   * @returns
   */
  @Decode(CampaignResponse)
  public archiveCampaign(campaignId: CampaignId) {
    return this.client.delete<CampaignResponse>(`${this.resource}/${campaignId}`)
  }
}
