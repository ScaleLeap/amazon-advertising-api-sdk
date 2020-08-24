import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import {
  NegativeTargetId,
  CreateSponsoredDisplayNegativeTargetingClausesParams,
  SponsoredDisplayNegativeTargetingClause,
  SponsoredDisplayNegativeTargetingClauseExtended,
  UpdateSponsoredDisplayNegativeTargetingClausesParams,
} from './types'
import { NegativeTargetingClauseResponse } from '../product-targeting/types'

export class SponsoredDisplayNegativeTargetingOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredDisplay}/negativeTargets`

  /**
   * Gets a negative targeting clause specified by identifier.
   *
   * @param id -
   * @returns
   */
  @Decode(SponsoredDisplayNegativeTargetingClause)
  public getNegativeTargetingClause(id: NegativeTargetId) {
    return this.client.get<SponsoredDisplayNegativeTargetingClause>(`${this.resource}/${id}`)
  }

  /**
   * Gets extended information for a negative targeting clause.
   *
   * @param id -
   * @returns
   */
  @Decode(SponsoredDisplayNegativeTargetingClauseExtended)
  public getNegativeTargetingClauseExtended(id: NegativeTargetId) {
    return this.client.get<SponsoredDisplayNegativeTargetingClauseExtended>(
      `${this.resource}/extended/${id}`,
    )
  }

  /**
   * Creates one or more negative targeting clauses.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(NegativeTargetingClauseResponse)
  public createNegativeTargetingClauses(
    params: CreateSponsoredDisplayNegativeTargetingClausesParams[],
  ) {
    return this.client.post<NegativeTargetingClauseResponse[]>(this.resource, params)
  }

  /**
   * Updates one or more negative targeting clauses.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(NegativeTargetingClauseResponse)
  public updateNegativeTargetingClauses(
    params: UpdateSponsoredDisplayNegativeTargetingClausesParams[],
  ) {
    return this.client.put<NegativeTargetingClauseResponse[]>(this.resource, params)
  }
}
