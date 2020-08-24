import { Operation } from '../operation'
import { DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import { CreateSponsoredDisplayNegativeTargetingClausesParams } from './types'
import { NegativeTargetingClauseResponse } from '../product-targeting/types'

export class SponsoredDisplayNegativeTargetingOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredDisplay}/negativeTargets`

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
}
