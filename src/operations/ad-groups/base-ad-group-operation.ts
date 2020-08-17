import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  AdGroup,
  AdGroupId,
  AdGroupResponse,
  AdGroupExtended,
  ListAdGroupsParams,
  CreateAdGroupsParams,
  UpdateAdGroupsParams,
} from './types'

export class BaseAdGroupOperation extends Operation {
  protected uriPrefix: AmazonAdTypeURIPrefix = AmazonAdTypeURIPrefix.SponsoredProducts
  protected resource = `${this.version}/${this.uriPrefix}/adGroups`

  /**
   * Retrieves an ad group by ID.
   * Note that this call returns the minimal set of ad group fields, but is more efficient than getAdGroupExtended
   *
   * @param adGroupId -
   * @returns
   */
  @Decode(AdGroup)
  public getAdGroup(adGroupId: AdGroupId) {
    return this.client.get<AdGroup>(`${this.resource}/${adGroupId}`)
  }

  /**
   * Retrieves an ad group and its extended fields by ID.
   * Note that this call returns the complete set of ad group fields (including serving status and other read-only fields), but is less efficient than getAdGroup
   *
   * @param adGroupId -
   * @returns
   */
  @Decode(AdGroupExtended)
  public getAdGroupExtended(adGroupId: AdGroupId) {
    return this.client.get<AdGroupExtended>(`${this.resource}/extended/${adGroupId}`)
  }

  /**
   * Creates one or more ad groups. Successfully created ad groups will be assigned a unique adGroupId
   *
   * @param adGroups -
   * @returns
   */
  @DecodeArray(AdGroupResponse)
  public createAdGroups(adGroups: CreateAdGroupsParams[]) {
    return this.client.post<AdGroupResponse[]>(this.resource, adGroups)
  }

  /**
   * Updates one or more ad groups. Ad groups are identified using their adGroupId
   *
   * @param adGroups -
   * @returns
   */
  @DecodeArray(AdGroupResponse)
  public updateAdGroups(adGroups: UpdateAdGroupsParams[]) {
    return this.client.put<AdGroupResponse[]>(this.resource, adGroups)
  }

  /**
   * Sets the ad group status to archived.
   * This same operation can be performed via an update, but is included for completeness
   * Archived entities cannot be made active again. See developer notes for more information.
   *
   * @param adGroupId -
   * @returns
   */
  @Decode(AdGroupResponse)
  public archiveAdGroup(adGroupId: AdGroupId) {
    return this.client.delete<AdGroupResponse>(`${this.resource}/${adGroupId}`)
  }

  /**
   * Retrieves a list of ad groups satisfying optional criteria.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(AdGroup)
  public listAdGroups(params?: ListAdGroupsParams) {
    return this.client.get<AdGroup[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Retrieves a list of ad groups with extended fields satisfying optional filtering criteria.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(AdGroupExtended)
  public listAdGroupsExtended(params?: ListAdGroupsParams) {
    return this.client.get<AdGroupExtended[]>(this.paramsFilterTransformer('/extended', params))
  }
}
