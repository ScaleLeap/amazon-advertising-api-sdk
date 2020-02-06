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
  CategoryResponse,
  CategoryId,
  RefinementsResponse,
  BrandResponse,
  GetBrandRecommendationsParams,
  NegativeTargetingClauseResponse,
  CreateNegativeTargetingClausesParams,
  NegativeTargetingClause,
  NegativeTargetingClauseExtended,
  ListNegativeTargetingClausesParams,
} from './types'

export class SponsoredProductsProductTargetingOperation extends Operation {
  protected targetResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/targets`
  protected negativeTargetsResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/negativeTargets`

  @Decode(TargetingClause)
  public getTargetingClause(targetId: TargetId) {
    return this.client.get<TargetingClause>(`${this.targetResource}/${targetId}`)
  }

  @Decode(TargetingClauseExtended)
  public getTargetingClauseExtended(targetId: TargetId) {
    return this.client.get<TargetingClauseExtended>(`${this.targetResource}/extended/${targetId}`)
  }

  @DecodeArray(TargetingClause)
  public listTargetingClauses(params?: ListTargetingClausesParams) {
    return this.client.get<TargetingClause[]>(
      this.paramsFilterTransformer(this.targetResource, params),
    )
  }

  @DecodeArray(TargetingClauseExtended)
  public listTargetingClausesExtended(params?: ListTargetingClausesParams) {
    return this.client.get<TargetingClauseExtended[]>(
      this.paramsFilterTransformer(`${this.targetResource}/extended`, params),
    )
  }

  @DecodeArray(TargetingClauseResponse)
  public createTargetingClauses(params: CreateTargetingClausesParams[]) {
    return this.client.post<TargetingClauseResponse[]>(this.targetResource, params)
  }

  @DecodeArray(TargetingClauseResponse)
  public updateTargetingClauses(params: UpdateTargetingClausesParams[]) {
    return this.client.put<TargetingClauseResponse[]>(this.targetResource, params)
  }

  @Decode(TargetingClauseResponse)
  public archiveTargetingClause(targetId: TargetId) {
    return this.client.delete<TargetingClauseResponse>(`${this.targetResource}/${targetId}`)
  }

  @Decode(ProductRecommendationResponse)
  public createTargetRecommendations(params: ProductRecommendationRequest) {
    return this.client.post<ProductRecommendationResponse>(
      `${this.targetResource}/productRecommendations`,
      params,
    )
  }

  @DecodeArray(CategoryResponse)
  public getTargetingCategories(asins: string[]) {
    return this.client.get<CategoryResponse[]>(
      this.paramsFilterTransformer(`${this.targetResource}/categories`, { asins }),
    )
  }

  @Decode(RefinementsResponse)
  public getRefinementsForCategory(categoryId: CategoryId) {
    return this.client.get<RefinementsResponse>(
      this.paramsFilterTransformer(`${this.targetResource}/categories/refinements`, { categoryId }),
    )
  }

  @DecodeArray(BrandResponse)
  public getBrandRecommendations(params: GetBrandRecommendationsParams) {
    return this.client.get<BrandResponse>(
      this.paramsFilterTransformer(`${this.targetResource}/brands`, params),
    )
  }

  // Negative targeting clauses operations

  @Decode(NegativeTargetingClause)
  public getNegativeTargetingClause(targetId: TargetId) {
    return this.client.get<NegativeTargetingClause>(`${this.negativeTargetsResource}/${targetId}`)
  }

  @Decode(NegativeTargetingClauseExtended)
  public getNegativeTargetingClauseExtended(targetId: TargetId) {
    return this.client.get<NegativeTargetingClauseExtended>(
      `${this.negativeTargetsResource}/extended/${targetId}`,
    )
  }

  @DecodeArray(NegativeTargetingClauseResponse)
  public createNegativeTargetingClauses(params: CreateNegativeTargetingClausesParams[]) {
    return this.client.post<NegativeTargetingClauseResponse[]>(this.negativeTargetsResource, params)
  }

  @DecodeArray(NegativeTargetingClause)
  public listNegativeTargetingClauses(params?: ListNegativeTargetingClausesParams) {
    return this.client.get<NegativeTargetingClause[]>(
      this.paramsFilterTransformer(this.negativeTargetsResource, params),
    )
  }

  @DecodeArray(NegativeTargetingClauseExtended)
  public listNegativeTargetingClausesExtended(params?: ListNegativeTargetingClausesParams) {
    return this.client.get<NegativeTargetingClauseExtended[]>(
      this.paramsFilterTransformer(`${this.negativeTargetsResource}/extended`, params),
    )
  }
}
