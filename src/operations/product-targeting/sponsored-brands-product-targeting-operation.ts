import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  SponsoredBrandsListTargetsRequest,
  SponsoredBrandsListTargetsResponse,
  SponsoredBrandsUpdateTargetsRequest,
  SponsoredBrandsUpdateTargetsResponse,
  SponsoredBrandsCreateTargetsRequest,
  SponsoredBrandsCreateTargetsResponse,
  TargetId,
  SponsoredBrandsTargetingClause,
  SponsoredBrandsTargetingClauseResponse,
  SponsoredBrandsBatchGetTargetsRequest,
  SponsoredBrandsBatchGetTargetsResponse,
} from './types'

export class SponsoredBrandsProductTargetingOperation extends Operation {
  protected targetResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/targets`
  protected negativeTargetResource = `sb/negativeTargets`

  /**
   * Gets a list of product targets associated with the client identifier passed in the authorization header, filtered by specified criteria.
   *
   * @param params -
   * @returns
   */
  @Decode(SponsoredBrandsListTargetsResponse)
  public listTargets(params: SponsoredBrandsListTargetsRequest) {
    return this.client.post<SponsoredBrandsListTargetsResponse>(this.targetResource, params)
  }

  /**
   * Updates one or more targets.
   *
   * @param params -
   * @returns
   */
  @Decode(SponsoredBrandsUpdateTargetsResponse)
  public updateTargets(params: SponsoredBrandsUpdateTargetsRequest[]) {
    return this.client.put<SponsoredBrandsUpdateTargetsResponse>(this.targetResource, params)
  }

  /**
   * Create one or more new targets.
   *
   * @param params -
   * @returns
   */
  @Decode(SponsoredBrandsCreateTargetsResponse)
  public createTargets(params: SponsoredBrandsCreateTargetsRequest) {
    return this.client.post<SponsoredBrandsCreateTargetsResponse>(this.targetResource, params)
  }

  /**
   * Gets a target specified by identifier.
   *
   * @param targetId -
   * @returns
   */
  @Decode(SponsoredBrandsTargetingClause)
  public getTarget(targetId: TargetId) {
    return this.client.get<SponsoredBrandsTargetingClause>(`${this.targetResource}/${targetId}`)
  }

  /**
   * Archives a target specified by identifier. Note that archiving is permanent, and once a target has been archived it can't be made active again.
   *
   * @param targetId -
   * @returns
   */
  @Decode(SponsoredBrandsTargetingClauseResponse)
  public archiveTarget(targetId: TargetId) {
    return this.client.delete<SponsoredBrandsTargetingClauseResponse>(
      `${this.targetResource}/${targetId}`,
    )
  }

  /**
   * Gets one or more product targets specified by identifiers.
   *
   * @param params -
   * @returns
   */
  @Decode(SponsoredBrandsBatchGetTargetsResponse)
  public batchGetTargets(params: SponsoredBrandsBatchGetTargetsRequest) {
    return this.client.post<SponsoredBrandsBatchGetTargetsResponse>(this.targetResource, params)
  }
}
