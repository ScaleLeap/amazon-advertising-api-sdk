import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import { Campaign, ListCampaignsParams, CampaignId, CampaignResponse } from './types'
import { PortfolioId } from '../portfolios/types'

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
  public createCampaigns(porfolioId: PortfolioId, campaigns: Campaign[]) {
    return this.client.post<CampaignResponse[]>(this.resource, { porfolioId, campaigns })
  }
}
