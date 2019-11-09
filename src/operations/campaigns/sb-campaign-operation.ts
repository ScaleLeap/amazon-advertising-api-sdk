import { Operation } from '../operation'
import { DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import { Campaign, ListCampaignsParams } from './types'

export class SponsoredBrandsCampaignOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/campaigns`

  @DecodeArray(Campaign)
  public listCampaigns(params?: Partial<ListCampaignsParams>) {
    return this.client.get<Campaign[]>(this.paramsFilterTransformer('', params))
  }
}
