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

  @DecodeArray(SponsoredBrandsListDraftCampaignResponse)
  public listDraftCampaigns(params: SponsoredBrandsListDraftCampaignRequest) {
    return this.client.post<SponsoredBrandsListDraftCampaignResponse[]>(this.resource, params)
  }

  @DecodeArray(SponsoredBrandsDraftCampaignResponse)
  public createDraftCampaigns(params: SponsoredBrandsDraftCampaign[]) {
    return this.client.post<SponsoredBrandsDraftCampaignResponse[]>(this.resource, params)
  }

  @DecodeArray(SponsoredBrandsDraftCampaignResponse)
  public updateDraftCampaigns(params: SponsoredBrandsDraftCampaign[]) {
    return this.client.put<SponsoredBrandsDraftCampaignResponse[]>(this.resource, params)
  }

  @Decode(SponsoredBrandsDraftCampaign)
  public getDraftCampaign(draftCampaignId: SponsoredBrandsDraftCampaignId) {
    return this.client.get<SponsoredBrandsDraftCampaign>(`${this.resource}/${draftCampaignId}`)
  }

  @Decode(SponsoredBrandsDraftCampaignResponse)
  public archiveDraftCampaign(draftCampaignId: SponsoredBrandsDraftCampaignId) {
    return this.client.delete<SponsoredBrandsDraftCampaignResponse>(
      `${this.resource}/${draftCampaignId}`,
    )
  }

  @DecodeArray(SponsoredBrandsDraftCampaignResponse)
  public submitDraftCampaigns(draftCampaignIds: SponsoredBrandsDraftCampaignId[]) {
    return this.client.post<SponsoredBrandsDraftCampaignResponse[]>(this.resource, draftCampaignIds)
  }
}
