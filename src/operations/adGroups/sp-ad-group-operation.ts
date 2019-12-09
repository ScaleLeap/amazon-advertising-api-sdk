import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import { AdGroup, AdGroupId, AdGroupResponse, AdGroupExtended, ListAdGroupsParams } from './types'

export class SponsoredProductsAdGroupOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/adGroups`

  @Decode(AdGroup)
  public getAdGroup(adGroupId: AdGroupId) {
    return this.client.get<AdGroup>(`${this.resource}/${adGroupId}`)
  }

  @Decode(AdGroupExtended)
  public getAdGroupEx(adGroupId: AdGroupId) {
    return this.client.get<AdGroupExtended>(`${this.resource}/extended/${adGroupId}`)
  }

  @DecodeArray(AdGroupResponse)
  public createAdGroups(adGroups: AdGroup[]) {
    return this.client.post<AdGroupResponse[]>(this.resource, adGroups)
  }

  @DecodeArray(AdGroupResponse)
  public updateAdGroups(adGroups: AdGroup[]) {
    return this.client.put<AdGroupResponse[]>(this.resource, adGroups)
  }

  @Decode(AdGroupResponse)
  public archiveAdGroup(adGroupId: AdGroupId) {
    return this.client.delete<AdGroupResponse>(`${this.resource}/${adGroupId}`)
  }

  @DecodeArray(AdGroup)
  public listAdGroups(params?: ListAdGroupsParams) {
    return this.client.get<AdGroup[]>(this.paramsFilterTransformer('', params))
  }

  @DecodeArray(AdGroupExtended)
  public listAdGroupsEx(params?: ListAdGroupsParams) {
    return this.client.get<AdGroupExtended[]>(this.paramsFilterTransformer('/extended', params))
  }
}
