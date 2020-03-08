import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  Campaign,
  ListCampaignsParams,
  CampaignId,
  CampaignResponse,
  SponsoredBrandsCampaignUpdateParams,
  CampaignExtended,
} from './types'

export class SponsoredBrandsCampaignOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/campaigns`

  /**
   * Gets an array of all campaigns associated with the client identifier passed in the authorization header, filtered by specified criteria.
   *
   * @param {ListCampaignsParams} [params]
   * @returns
   * @memberof SponsoredBrandsCampaignOperation
   */
  @DecodeArray(Campaign)
  public listCampaigns(params?: ListCampaignsParams) {
    return this.client.get<Campaign[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Gets an array of all campaigns with extended fields associated with the client identifier passed in the authorization header, filtered by specified criteria.
   *
   * @param {ListCampaignsParams} [params]
   * @returns
   * @memberof SponsoredBrandsCampaignOperation
   */
  @DecodeArray(CampaignExtended)
  public listCampaignsEx(params?: ListCampaignsParams) {
    return this.client.get<CampaignExtended[]>(this.paramsFilterTransformer('/extended', params))
  }

  /**
   * Gets a campaign specified by identifier
   *
   * @param {CampaignId} campaignId
   * @returns
   * @memberof SponsoredBrandsCampaignOperation
   */
  @Decode(Campaign)
  public getCampaign(campaignId: CampaignId) {
    return this.client.get<Campaign>(`${this.resource}/${campaignId}`)
  }

  /**
   * Gets a campaign with extended fields specified by identifier
   *
   * @param {CampaignId} campaignId
   * @returns
   * @memberof SponsoredBrandsCampaignOperation
   */
  @Decode(CampaignExtended)
  public getCampaignEx(campaignId: CampaignId) {
    return this.client.get<CampaignExtended>(`${this.resource}/extended/${campaignId}`)
  }

  /**
   * Creates one or more new Campaigns
   *
   * @param {Campaign[]} campaigns
   * @returns
   * @memberof SponsoredBrandsCampaignOperation
   */
  @DecodeArray(CampaignResponse)
  public createCampaigns(campaigns: Campaign[]) {
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
