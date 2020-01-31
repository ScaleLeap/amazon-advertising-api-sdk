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
} from './types'

export class SponsoredProductsProductTargetingOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/targets`
  protected negativeTargetsResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/negativeTargets`

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

  @Decode(ProductRecommendationResponse)
  public createTargetRecommendations(params: ProductRecommendationRequest) {
    return this.client.post<ProductRecommendationResponse>(
      `${this.resource}/productRecommendations`,
      params,
    )
  }

  @DecodeArray(CategoryResponse)
  public getTargetingCategories(asins: string[]) {
    return this.client.get<CategoryResponse[]>(
      this.paramsFilterTransformer('/categories', { asins }),
    )
  }

  @Decode(RefinementsResponse)
  public getRefinementsForCategory(categoryId: CategoryId) {
    return this.client.get<RefinementsResponse>(
      this.paramsFilterTransformer('/categories/refinements', { categoryId }),
    )
  }

  @DecodeArray(BrandResponse)
  public getBrandRecommendations(params: GetBrandRecommendationsParams) {
    return this.client.get<BrandResponse>(this.paramsFilterTransformer('/brands', params))
  }

  // Negative targeting clauses operations

  @DecodeArray(NegativeTargetingClauseResponse)
  public createNegativeTargetingClauses(params: CreateNegativeTargetingClausesParams[]) {
    return this.client.post<NegativeTargetingClauseResponse[]>(this.negativeTargetsResource, params)
  }
}
