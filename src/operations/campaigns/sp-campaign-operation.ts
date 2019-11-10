import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import { Campaign, ListCampaignsParams, CampaignId, CampaignResponse } from './types'

export class SponsoredProductsCampaignOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/campaigns`

  @DecodeArray(Campaign)
  public listCampaigns(params?: Partial<ListCampaignsParams>) {
    return this.client.get<Campaign[]>(this.paramsFilterTransformer('', params))
  }

  @Decode(Campaign)
  public getCampaign(campaignId: CampaignId): Promise<Campaign> {
    return this.client.get<Campaign>(`${this.resource}/${campaignId}`)
  }

  @DecodeArray(CampaignResponse)
  public createCampaigns(campaigns: Campaign[]) {
    return this.client.post<CampaignResponse[]>(this.resource, campaigns)
  }
}
