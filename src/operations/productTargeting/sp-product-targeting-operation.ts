import { Operation } from '../operation'
import { DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import { CreateTargetingClausesParams, TargetingClauseResponse } from './types'

export class SponsoredProductsProductTargetingOperation extends Operation {
  protected targetResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/targets`

  @DecodeArray(TargetingClauseResponse)
  public createTargetingClauses(params: CreateTargetingClausesParams[]) {
    return this.client.post<TargetingClauseResponse[]>(`${this.targetResource}`, params)
  }
}
