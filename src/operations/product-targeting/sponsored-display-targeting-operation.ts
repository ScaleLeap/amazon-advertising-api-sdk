import { Operation } from '../operation'
import { DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import { TargetingClauseResponse, CreateSponsoredDisplayTargetingClausesParams } from './types'

export class SponsoredDisplayTargetingOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredDisplay}/targets`

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
}
