import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  Campaign,
  ListCampaignsParams,
  CampaignId,
  CampaignResponse,
  SponsoredBrandsCampaignUpdateParams,
} from './types'

export class SponsoredBrandsCampaignOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/campaigns`

  @DecodeArray(Campaign)
  public listCampaigns(params?: Partial<ListCampaignsParams>) {
    return this.client.get<Campaign[]>(this.paramsFilterTransformer('', params))
  }

  @Decode(Campaign)
  public getCampaign(campaignId: CampaignId) {
    return this.client.get<Campaign>(`${this.resource}/${campaignId}`)
  }

  @DecodeArray(CampaignResponse)
  public createCampaigns(campaigns: Campaign[]) {
    return this.client.post<CampaignResponse[]>(this.resource, campaigns)
  }

  @DecodeArray(CampaignResponse)
  public updateCampaigns(campaigns: SponsoredBrandsCampaignUpdateParams[]) {
    return this.client.put<CampaignResponse[]>(this.resource, campaigns)
  }
}
