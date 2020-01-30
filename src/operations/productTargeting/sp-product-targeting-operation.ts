import { Operation } from '../operation'
import { DecodeArray, Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  CreateTargetingClausesParams,
  TargetingClauseResponse,
  TargetId,
  TargetingClause,
  TargetingClauseExtended,
  ListTargetingClausesParams,
  UpdateTargetingClausesParams,
  ProductRecommendationRequest,
  ProductRecommendationResponse,
} from './types'

export class SponsoredProductsProductTargetingOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/targets`

  @Decode(TargetingClause)
  public getTargetingClause(targetId: TargetId) {
    return this.client.get<TargetingClause>(`${this.resource}/${targetId}`)
  }

  @Decode(TargetingClauseExtended)
  public getTargetingClauseExtended(targetId: TargetId) {
    return this.client.get<TargetingClauseExtended>(`${this.resource}/extended/${targetId}`)
  }

  @DecodeArray(TargetingClause)
  public listTargetingClauses(params?: ListTargetingClausesParams) {
    return this.client.get<TargetingClause[]>(this.paramsFilterTransformer('', params))
  }

  @DecodeArray(TargetingClauseExtended)
  public listTargetingClausesExtended(params?: ListTargetingClausesParams) {
    return this.client.get<TargetingClauseExtended[]>(
      this.paramsFilterTransformer('/extended', params),
    )
  }

  @DecodeArray(TargetingClauseResponse)
  public createTargetingClauses(params: CreateTargetingClausesParams[]) {
    return this.client.post<TargetingClauseResponse[]>(this.resource, params)
  }

  @DecodeArray(TargetingClauseResponse)
  public updateTargetingClauses(params: UpdateTargetingClausesParams[]) {
    return this.client.put<TargetingClauseResponse[]>(this.resource, params)
  }

  @Decode(TargetingClauseResponse)
  public archiveTargetingClause(targetId: TargetId) {
    return this.client.delete<TargetingClauseResponse>(`${this.resource}/${targetId}`)
  }

  @DecodeArray(ProductRecommendationResponse)
  public createTargetRecommendations(params: ProductRecommendationRequest) {
    return this.client.post<ProductRecommendationResponse[]>(
      `${this.resource}/productRecommendations`,
      params,
    )
  }
}
