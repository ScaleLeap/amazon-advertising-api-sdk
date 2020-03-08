import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  Campaign,
  ListCampaignsParams,
  CampaignId,
  CampaignResponse,
  SponsoredProductsCampaignUpdateParams,
  CampaignExtended,
  SponsoredProductsCampaignCreateParams,
} from './types'

export class SponsoredProductsCampaignOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/campaigns`

  /**
   * Retrieves a list of Sponsored Products campaigns satisfying optional filtering criteria.
   *
   * @param {ListCampaignsParams} [params]
   * @returns
   * @memberof SponsoredProductsCampaignOperation
   */
  @DecodeArray(Campaign)
  public listCampaigns(params?: ListCampaignsParams) {
    return this.client.get<Campaign[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Retrieves a list of Sponsored Products campaigns with extended fields satisfying optional filtering criteria.
   *
   * @param {ListCampaignsParams} [params]
   * @returns
   * @memberof SponsoredProductsCampaignOperation
   */
  @DecodeArray(CampaignExtended)
  public listCampaignsEx(params?: ListCampaignsParams) {
    return this.client.get<CampaignExtended[]>(this.paramsFilterTransformer('/extended', params))
  }

  /**
   * Retrieves a campaign by campaignId.
   * Note that this call returns the minimal set of campaign fields, but is more efficient than getCampaignEx
   *
   * @param {CampaignId} campaignId
   * @returns
   * @memberof SponsoredProductsCampaignOperation
   */
  @Decode(Campaign)
  public getCampaign(campaignId: CampaignId) {
    return this.client.get<Campaign>(`${this.resource}/${campaignId}`)
  }

  /**
   * Retrieves a campaign and its extended fields by campaignId.
   * Note that this call returns the complete set of campaign fields (including serving status and other read-only fields), but is less efficient than getCampaign
   *
   * @param {CampaignId} campaignId
   * @returns
   * @memberof SponsoredProductsCampaignOperation
   */
  @Decode(CampaignExtended)
  public getCampaignEx(campaignId: CampaignId) {
    return this.client.get<CampaignExtended>(`${this.resource}/extended/${campaignId}`)
  }

  /**
   * Creates one or more campaigns.
   * Successfully created campaigns will be assigned a unique campaignId.
   *
   * @param {SponsoredProductsCampaignCreateParams[]} campaigns
   * @returns
   * @memberof SponsoredProductsCampaignOperation
   */
  @DecodeArray(CampaignResponse)
  public createCampaigns(campaigns: SponsoredProductsCampaignCreateParams[]) {
    return this.client.post<CampaignResponse[]>(this.resource, campaigns)
  }

  /**
   * Updates one or more campaigns.
   *
   * @param {SponsoredProductsCampaignUpdateParams[]} campaigns
   * @returns
   * @memberof SponsoredProductsCampaignOperation
   */
  @DecodeArray(CampaignResponse)
  public updateCampaigns(campaigns: SponsoredProductsCampaignUpdateParams[]) {
    return this.client.put<CampaignResponse[]>(this.resource, campaigns)
  }

  /**
   * Sets the campaign status to archived.
   * Archived entities cannot be made active again. See developer notes for more information.
   *
   * @param {CampaignId} campaignId
   * @returns
   * @memberof SponsoredProductsCampaignOperation
   */
  @Decode(CampaignResponse)
  public archiveCampaign(campaignId: CampaignId) {
    return this.client.delete<CampaignResponse>(`${this.resource}/${campaignId}`)
  }
}
