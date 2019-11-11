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
} from './types'

export class SponsoredProductsCampaignOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/campaigns`

  @DecodeArray(Campaign)
  public listCampaigns(params?: ListCampaignsParams) {
    return this.client.get<Campaign[]>(this.paramsFilterTransformer('', params))
  }

  @DecodeArray(CampaignExtended)
  public listCampaignsEx(params?: ListCampaignsParams) {
    return this.client.get<CampaignExtended[]>(this.paramsFilterTransformer('/extended', params))
  }

  @Decode(Campaign)
  public getCampaign(campaignId: CampaignId) {
    return this.client.get<Campaign>(`${this.resource}/${campaignId}`)
  }

  @Decode(CampaignExtended)
  public getCampaignEx(campaignId: CampaignId) {
    return this.client.get<CampaignExtended>(`${this.resource}/extended/${campaignId}`)
  }

  @DecodeArray(CampaignResponse)
  public createCampaigns(campaigns: Campaign[]) {
    return this.client.post<CampaignResponse[]>(this.resource, campaigns)
  }

  @DecodeArray(CampaignResponse)
  public updateCampaigns(campaigns: SponsoredProductsCampaignUpdateParams[]) {
    return this.client.put<CampaignResponse[]>(this.resource, campaigns)
  }

  @Decode(CampaignResponse)
  public archiveCampaign(campaignId: CampaignId) {
    return this.client.delete<CampaignResponse>(`${this.resource}/${campaignId}`)
  }
}
