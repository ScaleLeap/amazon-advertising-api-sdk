import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  CampaignId,
  CampaignResponse,
  SponsoredDisplayCampaignCreateParams,
  SponsoredDisplayCampaignUpdateParams,
  ListCampaignsParams,
  SponsoredDisplayCampaign,
  SponsoredDisplayCampaignExtended,
} from './types'

export class SponsoredDisplayCampaignOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredDisplay}/campaigns`

  /**
   * Gets an array of Campaign objects for a requested set of Sponsored Display campaigns.
   * Note that the Campaign object is designed for performance, and includes a small set of commonly used fields to reduce size.
   * If the extended set of fields is required, use the campaign operations that return the CampaignResponseEx object.
   *
   * @param campaignId -
   * @returns
   */
  @DecodeArray(SponsoredDisplayCampaign)
  public listCampaigns(params?: ListCampaignsParams) {
    return this.client.get<SponsoredDisplayCampaign[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Gets an array of CampaignResponseEx objects for a set of requested campaigns.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredDisplayCampaignExtended)
  public listCampaignsExtended(params?: ListCampaignsParams) {
    return this.client.get<SponsoredDisplayCampaignExtended[]>(
      this.paramsFilterTransformer('/extended', params),
    )
  }

  /**
   * Updates one or more campaigns.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(CampaignResponse)
  public updateCampaigns(params: SponsoredDisplayCampaignUpdateParams[]) {
    return this.client.put<CampaignResponse[]>(this.resource, params)
  }

  /**
   * Creates one or more campaigns.
   * Successfully created campaigns will be assigned a unique campaignId.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(CampaignResponse)
  public createCampaigns(params: SponsoredDisplayCampaignCreateParams[]) {
    return this.client.post<CampaignResponse[]>(this.resource, params)
  }

  /**
   * Returns a Campaign object for a requested campaign.
   * Note that the Campaign object is designed for performance, with a small set of commonly used campaign fields to reduce size.
   * If the extended set of fields is required, use the campaign operations that return the CampaignResponseEx object.
   *
   * @param id -
   * @returns
   */
  @Decode(SponsoredDisplayCampaign)
  public getCampaign(id: CampaignId) {
    return this.client.get<SponsoredDisplayCampaign>(`${this.resource}/${id}`)
  }

  /**
   * Gets an array of CampaignResponseEx objects for a set of requested campaigns.
   *
   * @param id -
   * @returns
   */
  @Decode(SponsoredDisplayCampaignExtended)
  public getCampaignExtended(id: CampaignId) {
    return this.client.get<SponsoredDisplayCampaignExtended>(`${this.resource}/extended/${id}`)
  }

  /**
   * This operation is equivalent to an update operation that sets the status field to 'archived'.
   * Note that setting the status field to 'archived' is permanent and can't be undone.
   * See Developer Notes for more information.
   *
   * @param id -
   * @returns
   */
  @Decode(CampaignResponse)
  public archiveCampaign(id: CampaignId) {
    return this.client.delete<CampaignResponse>(`${this.resource}/${id}`)
  }
}
