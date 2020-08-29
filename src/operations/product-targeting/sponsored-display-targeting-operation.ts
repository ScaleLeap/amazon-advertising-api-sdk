import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  TargetingClauseResponse,
  CreateSponsoredDisplayTargetingClausesParams,
  TargetId,
  SponsoredDisplayTargetingClause,
  SponsoredDisplayTargetingClauseExtended,
  UpdateSponsoredDisplayTargetingClausesParams,
  ListTargetingClausesParams,
} from './types'

export class SponsoredDisplayTargetingOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredDisplay}/targets`

  /**
   * Gets a targeting clause specified by identifier.
   *
   * @param targetId -
   * @returns
   */
  @Decode(SponsoredDisplayTargetingClause)
  public getTargetingClause(targetId: TargetId) {
    return this.client.get<SponsoredDisplayTargetingClause>(`${this.resource}/${targetId}`)
  }

  /**
   * Gets extended information for a targeting clause.
   *
   * @param targetId -
   * @returns
   */
  @Decode(SponsoredDisplayTargetingClauseExtended)
  public getTargetingClauseExtended(targetId: TargetId) {
    return this.client.get<SponsoredDisplayTargetingClauseExtended>(
      `${this.resource}/extended/${targetId}`,
    )
  }

  /**
   * Creates one or more targeting clauses.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(TargetingClauseResponse)
  public createTargetingClauses(params: CreateSponsoredDisplayTargetingClausesParams[]) {
    return this.client.post<TargetingClauseResponse[]>(this.resource, params)
  }

  /**
   * Update one or more targeting clauses.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(TargetingClauseResponse)
  public updateTargetingClauses(params: UpdateSponsoredDisplayTargetingClausesParams[]) {
    return this.client.put<TargetingClauseResponse[]>(this.resource, params)
  }

  /**
   * Gets a list of targeting clauses.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredDisplayTargetingClause)
  public listTargetingClauses(params?: ListTargetingClausesParams) {
    return this.client.get<SponsoredDisplayTargetingClause[]>(
      this.paramsFilterTransformer(this.resource, params),
    )
  }

  /**
   * Gets a list of targeting clause objects with extended fields.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredDisplayTargetingClauseExtended)
  public listTargetingClausesExtended(params?: ListTargetingClausesParams) {
    return this.client.get<SponsoredDisplayTargetingClauseExtended[]>(
      this.paramsFilterTransformer(`${this.resource}/extended`, params),
    )
  }

  /**
   * Set the status of targeting clauses to archived.
   * Equivalent to using the updateTargetingClauses operation to set the state property of a targeting clause to archived.
   *
   * @param targetId -
   * @returns
   */
  @Decode(TargetingClauseResponse)
  public archiveTargetingClause(targetId: TargetId) {
    return this.client.delete<TargetingClauseResponse>(`${this.resource}/${targetId}`)
  }
}
