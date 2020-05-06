import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  SponsoredBrandsListDraftCampaignRequest,
  SponsoredBrandsListDraftCampaignResponse,
  SponsoredBrandsDraftCampaign,
  SponsoredBrandsDraftCampaignResponse,
  SponsoredBrandsDraftCampaignId,
} from './types'

export class SponsoredBrandsDraftsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/drafts/campaigns`

  /**
   * Gets an array of draft campaign objects.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredBrandsListDraftCampaignResponse)
  public listDraftCampaigns(params: SponsoredBrandsListDraftCampaignRequest) {
    return this.client.post<SponsoredBrandsListDraftCampaignResponse[]>(this.resource, params)
  }

  /**
   * Creates one or more new draft campaigns.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredBrandsDraftCampaignResponse)
  public createDraftCampaigns(params: SponsoredBrandsDraftCampaign[]) {
    return this.client.post<SponsoredBrandsDraftCampaignResponse[]>(this.resource, params)
  }

  /**
   * Updates one or more draft campaigns.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredBrandsDraftCampaignResponse)
  public updateDraftCampaigns(params: SponsoredBrandsDraftCampaign[]) {
    return this.client.put<SponsoredBrandsDraftCampaignResponse[]>(this.resource, params)
  }

  /**
   * Gets a draft campaign specified by identifier.
   *
   * @param draftCampaignId -
   * @returns
   */
  @Decode(SponsoredBrandsDraftCampaign)
  public getDraftCampaign(draftCampaignId: SponsoredBrandsDraftCampaignId) {
    return this.client.get<SponsoredBrandsDraftCampaign>(`${this.resource}/${draftCampaignId}`)
  }

  /**
   * Archives a draft campaign specified by identifier.
   *
   * @param draftCampaignId -
   * @returns
   */
  @Decode(SponsoredBrandsDraftCampaignResponse)
  public archiveDraftCampaign(draftCampaignId: SponsoredBrandsDraftCampaignId) {
    return this.client.delete<SponsoredBrandsDraftCampaignResponse>(
      `${this.resource}/${draftCampaignId}`,
    )
  }

  /**
   * Submits one or more existing draft campaigns to the moderation approval queue.
   *
   * @param draftCampaignIds -
   * @returns
   */
  @DecodeArray(SponsoredBrandsDraftCampaignResponse)
  public submitDraftCampaigns(draftCampaignIds: SponsoredBrandsDraftCampaignId[]) {
    return this.client.post<SponsoredBrandsDraftCampaignResponse[]>(
      `${this.resource}/submit`,
      draftCampaignIds,
    )
  }
}
