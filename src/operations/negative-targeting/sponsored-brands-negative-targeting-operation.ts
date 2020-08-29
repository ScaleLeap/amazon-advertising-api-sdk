import { Operation } from '../operation'
import { Decode } from '../../decorators'

import {
  SponsoredBrandsListNegativeTargetsResponse,
  SponsoredBrandsListNegativeTargetsRequest,
  SponsoredBrandsUpdateNegativeTargetsResponse,
  SponsoredBrandsUpdateNegativeTargetsRequest,
  SponsoredBrandsCreateNegativeTargetsResponse,
  SponsoredBrandsCreateNegativeTargetsRequest,
  SponsoredBrandsNegativeTargetingClause,
  NegativeTargetId,
  SponsoredBrandsBatchGetNegativeTargetsResponse,
  SponsoredBrandsBatchGetNegativeTargetsRequest,
} from './types'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import { SponsoredBrandsTargetingClauseResponse } from '../product-targeting/types'

export class SponsoredBrandsNegativeTargetingOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/negativeTargets`

  /**
   * Gets a list of product negative targets associated with the client identifier passed in the authorization header, filtered by specified criteria.
   *
   * @param params -
   * @returns
   */
  @Decode(SponsoredBrandsListNegativeTargetsResponse)
  public listNegativeTargets(params: SponsoredBrandsListNegativeTargetsRequest) {
    return this.client.post<SponsoredBrandsListNegativeTargetsResponse>(this.resource, params)
  }

  /**
   * Updates one or more negative targets.
   *
   * @param params -
   * @returns
   */
  @Decode(SponsoredBrandsUpdateNegativeTargetsResponse)
  public updateNegativeTargets(params: SponsoredBrandsUpdateNegativeTargetsRequest) {
    return this.client.put<SponsoredBrandsUpdateNegativeTargetsResponse>(this.resource, params)
  }

  /**
   * Create one or more new negative targets.
   *
   * @param params -
   * @returns
   */
  @Decode(SponsoredBrandsCreateNegativeTargetsResponse)
  public createNegativeTargets(params: SponsoredBrandsCreateNegativeTargetsRequest) {
    return this.client.post<SponsoredBrandsCreateNegativeTargetsResponse>(this.resource, params)
  }

  /**
   * Gets a negative target specified by identifier.
   *
   * @param negativeTargetId -
   * @returns
   */
  @Decode(SponsoredBrandsNegativeTargetingClause)
  public getNegativeTarget(negativeTargetId: NegativeTargetId) {
    return this.client.get<SponsoredBrandsNegativeTargetingClause>(
      `${this.resource}/${negativeTargetId}`,
    )
  }

  /**
   * Archives a negative target specified by identifier.
   * Note that archiving is permanent, and once a negative target has been archived it can't be made active again.
   *
   * @param negativeTargetId -
   * @returns
   */
  @Decode(SponsoredBrandsTargetingClauseResponse)
  public archiveNegativeTarget(negativeTargetId: NegativeTargetId) {
    return this.client.delete<SponsoredBrandsTargetingClauseResponse>(
      `${this.resource}/${negativeTargetId}`,
    )
  }

  /**
   * Gets one or more product negative targets specified by identifiers.
   *
   * @param params -
   * @returns
   */
  @Decode(SponsoredBrandsBatchGetNegativeTargetsResponse)
  public batchGetNegativeTargets(params: SponsoredBrandsBatchGetNegativeTargetsRequest) {
    return this.client.post<SponsoredBrandsBatchGetNegativeTargetsResponse>(this.resource, params)
  }
}
