import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import { AdGroup, AdGroupId, ListAdGroupsParams } from './types'

export class SponsoredBrandsAdGroupOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/adGroups`

  /**
   * Gets an array of ad groups associated with the client identifier passed in the authorization header, filtered by specified criteria
   *
   * @param {AdGroupId} adGroupId
   * @returns
   */
  @Decode(AdGroup)
  public getAdGroup(adGroupId: AdGroupId) {
    return this.client.get<AdGroup>(`${this.resource}/${adGroupId}`)
  }

  /**
   * Gets an ad group specified by identifier.
   *
   * @param {ListAdGroupsParams} [params]
   * @returns
   */
  @DecodeArray(AdGroup)
  public listAdGroups(params?: ListAdGroupsParams) {
    return this.client.get<AdGroup[]>(this.paramsFilterTransformer('', params))
  }
}
