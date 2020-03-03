import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  SBListDraftCampaignRequest,
  SBListDraftCampaignResponse,
  SBDraftCampaign,
  SBDraftCampaignResponse,
  SBDraftCampaignId,
} from './types'

export class SponsoredBrandsDraftsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/drafts/campaigns`

  @DecodeArray(SBListDraftCampaignResponse)
  public listDraftCampaigns(params: SBListDraftCampaignRequest) {
    return this.client.post<SBListDraftCampaignResponse[]>(this.resource, params)
  }

  @DecodeArray(SBDraftCampaignResponse)
  public createDraftCampaigns(params: SBDraftCampaign[]) {
    return this.client.post<SBDraftCampaignResponse[]>(this.resource, params)
  }

  @DecodeArray(SBDraftCampaignResponse)
  public updateDraftCampaigns(params: SBDraftCampaign[]) {
    return this.client.put<SBDraftCampaignResponse[]>(this.resource, params)
  }

  @Decode(SBDraftCampaign)
  public getDraftCampaign(draftCampaignId: SBDraftCampaignId) {
    return this.client.get<SBDraftCampaign>(`${this.resource}/${draftCampaignId}`)
  }

  @Decode(SBDraftCampaignResponse)
  public archiveDraftCampaign(draftCampaignId: SBDraftCampaignId) {
    return this.client.delete<SBDraftCampaignResponse>(`${this.resource}/${draftCampaignId}`)
  }

  @DecodeArray(SBDraftCampaignResponse)
  public submitDraftCampaigns(draftCampaignIds: SBDraftCampaignId[]) {
    return this.client.post<SBDraftCampaignResponse[]>(this.resource, draftCampaignIds)
  }
}
