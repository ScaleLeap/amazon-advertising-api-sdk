import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import { AdGroup, AdGroupId, ListAdGroupsParams } from './types'

export class SponsoredBrandsAdGroupOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/adGroups`

  @Decode(AdGroup)
  public getAdGroup(adGroupId: AdGroupId) {
    return this.client.get<AdGroup>(`${this.resource}/${adGroupId}`)
  }

  @DecodeArray(AdGroup)
  public listAdGroups(params?: ListAdGroupsParams) {
    return this.client.get<AdGroup[]>(this.paramsFilterTransformer('', params))
  }
}
