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
import {
  NegativeTargetingClauseResponse,
  ListNegativeTargetingClausesParams,
} from '../product-targeting/types'

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

  /**
   * Gets a list of negative targeting clauses.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredDisplayNegativeTargetingClause)
  public listNegativeTargetingClauses(params?: ListNegativeTargetingClausesParams) {
    return this.client.get<SponsoredDisplayNegativeTargetingClause[]>(
      this.paramsFilterTransformer(this.resource, params),
    )
  }

  /**
   * Gets a list of negative targeting clause objects with extended fields.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredDisplayNegativeTargetingClauseExtended)
  public listNegativeTargetingClausesExtended(params?: ListNegativeTargetingClausesParams) {
    return this.client.get<SponsoredDisplayNegativeTargetingClauseExtended[]>(
      this.paramsFilterTransformer(`${this.resource}/extended`, params),
    )
  }

  /**
   * Sets the `state` of a negative targeting clause to `archived`.
   *
   * @param id -
   * @returns
   */
  @Decode(NegativeTargetingClauseResponse)
  public archiveNegativeTargetingClause(id: NegativeTargetId) {
    return this.client.delete<NegativeTargetingClauseResponse>(`${this.resource}/${id}`)
  }
}
