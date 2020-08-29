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
} from './types'

export class SponsoredProductsProductTargetingOperation extends Operation {
  protected targetResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/targets`
  protected negativeTargetsResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/negativeTargets`

  /**
   * Retrieve a targeting clause with a specific target ID.
   *
   * @param targetId -
   * @returns
   */
  @Decode(TargetingClause)
  public getTargetingClause(targetId: TargetId) {
    return this.client.get<TargetingClause>(`${this.targetResource}/${targetId}`)
  }

  /**
   * Retrieve a targeting clause with additional attributes using a specific target ID.
   *
   * @param targetId -
   * @returns
   */
  @Decode(TargetingClauseExtended)
  public getTargetingClauseExtended(targetId: TargetId) {
    return this.client.get<TargetingClauseExtended>(`${this.targetResource}/extended/${targetId}`)
  }

  /**
   * Retrieves a list of targeting clauses.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(TargetingClause)
  public listTargetingClauses(params?: ListTargetingClausesParams) {
    return this.client.get<TargetingClause[]>(
      this.paramsFilterTransformer(this.targetResource, params),
    )
  }

  /**
   * Retrieve a list of targeting clauses with extended properties.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(TargetingClauseExtended)
  public listTargetingClausesExtended(params?: ListTargetingClausesParams) {
    return this.client.get<TargetingClauseExtended[]>(
      this.paramsFilterTransformer(`${this.targetResource}/extended`, params),
    )
  }

  /**
   * Creates one or more targeting expressions.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(TargetingClauseResponse)
  public createTargetingClauses(params: CreateTargetingClausesParams[]) {
    return this.client.post<TargetingClauseResponse[]>(this.targetResource, params)
  }

  /**
   * Update one or more targeting clauses.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(TargetingClauseResponse)
  public updateTargetingClauses(params: UpdateTargetingClausesParams[]) {
    return this.client.put<TargetingClauseResponse[]>(this.targetResource, params)
  }

  /**
   * Set the status of targeting clauses to archived.
   * This same operation can also be performed via an update (PUT method), but is included for completeness.
   * Archived entities cannot be made active again.
   *
   * @param targetId -
   * @returns
   */
  @Decode(TargetingClauseResponse)
  public archiveTargetingClause(targetId: TargetId) {
    return this.client.delete<TargetingClauseResponse>(`${this.targetResource}/${targetId}`)
  }

  /**
   * Generate list of recommended products to target, based on the ASIN that is input.
   * Successful response will be a list of recommended ASINs to target.
   *
   * @param params -
   * @returns
   */
  @Decode(ProductRecommendationResponse)
  public createTargetRecommendations(params: ProductRecommendationRequest) {
    return this.client.post<ProductRecommendationResponse>(
      `${this.targetResource}/productRecommendations`,
      params,
    )
  }

  /**
   * Gets the list of targeting categories.
   *
   * @param asins -
   * @returns
   */
  @DecodeArray(CategoryResponse)
  public getTargetingCategories(asins: string[]) {
    return this.client.get<CategoryResponse[]>(
      this.paramsFilterTransformer(`${this.targetResource}/categories`, { asins }),
    )
  }

  /**
   * Get refinements for a single category.
   * Categories and Refinements are determined based on marketplaceId of the profile in the request.
   * Note that refinements will differ between marketplaces.
   *
   * @param categoryId -
   * @returns
   */
  @Decode(RefinementsResponse)
  public getRefinementsForCategory(categoryId: CategoryId) {
    return this.client.get<RefinementsResponse>(
      this.paramsFilterTransformer(`${this.targetResource}/categories/refinements`, { categoryId }),
    )
  }

  /**
   * Get recommended brands for Sponsored Products.
   * Only one parameter (keyword or categoryId) per request is allowed.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(BrandResponse)
  public getBrandRecommendations(params: GetBrandRecommendationsParams) {
    return this.client.get<BrandResponse>(
      this.paramsFilterTransformer(`${this.targetResource}/brands`, params),
    )
  }
}
