import { Operation } from '../operation'
import { DecodeArray, Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  NegativeTargetingClause,
  NegativeTargetId,
  NegativeTargetingClauseExtended,
  NegativeTargetingClauseResponse,
  CreateNegativeTargetingClausesParams,
  ListNegativeTargetingClausesParams,
  UpdateNegativeTargetingClausesParams,
} from './types'

export class SponsoredProductsNegativeTargetingOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/negativeTargets`

  /**
   * Get a specific negative targeting clause by targetId.
   *
   * @param targetId -
   * @returns
   */
  @Decode(NegativeTargetingClause)
  public getNegativeTargetingClause(targetId: NegativeTargetId) {
    return this.client.get<NegativeTargetingClause>(`${this.resource}/${targetId}`)
  }

  /**
   * Retrieve a negative targeting clause with additional attributes using a specific target ID.
   *
   * @param targetId -
   * @returns
   */
  @Decode(NegativeTargetingClauseExtended)
  public getNegativeTargetingClauseExtended(targetId: NegativeTargetId) {
    return this.client.get<NegativeTargetingClauseExtended>(`${this.resource}/extended/${targetId}`)
  }

  /**
   * Create negative targeting clauses at the campaign level.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(NegativeTargetingClauseResponse)
  public createNegativeTargetingClauses(params: CreateNegativeTargetingClausesParams[]) {
    return this.client.post<NegativeTargetingClauseResponse[]>(this.resource, params)
  }

  /**
   * Retrieves a list of negative targeting clauses.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(NegativeTargetingClause)
  public listNegativeTargetingClauses(params?: ListNegativeTargetingClausesParams) {
    return this.client.get<NegativeTargetingClause[]>(
      this.paramsFilterTransformer(this.resource, params),
    )
  }

  /**
   * Retrieve a list of targeting clauses with extended properties.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(NegativeTargetingClauseExtended)
  public listNegativeTargetingClausesExtended(params?: ListNegativeTargetingClausesParams) {
    return this.client.get<NegativeTargetingClauseExtended[]>(
      this.paramsFilterTransformer(`${this.resource}/extended`, params),
    )
  }

  /**
   * Archive negative targeting clauses.
   *
   * @param targetId -
   * @returns
   */
  @Decode(NegativeTargetingClauseResponse)
  public archiveNegativeTargetingClause(targetId: NegativeTargetId) {
    return this.client.delete<NegativeTargetingClauseResponse>(`${this.resource}/${targetId}`)
  }

  /**
   * Update negative targeting clauses.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(NegativeTargetingClauseResponse)
  public updateNegativeTargetingClauses(params: UpdateNegativeTargetingClausesParams[]) {
    return this.client.put<NegativeTargetingClauseResponse[]>(this.resource, params)
  }
}
