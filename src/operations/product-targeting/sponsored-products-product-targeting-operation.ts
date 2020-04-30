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
  UpdateNegativeTargetingClausesParams,
} from './types'

export class SponsoredProductsProductTargetingOperation extends Operation {
  protected targetResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/targets`
  protected negativeTargetsResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/negativeTargets`

  /**
   * Retrieve a targeting clause with a specific target ID.
   *
   * @param {TargetId} targetId
   * @returns
   */
  @Decode(TargetingClause)
  public getTargetingClause(targetId: TargetId) {
    return this.client.get<TargetingClause>(`${this.targetResource}/${targetId}`)
  }

  /**
   * Retrieve a targeting clause with additional attributes using a specific target ID.
   *
   * @param {TargetId} targetId
   * @returns
   */
  @Decode(TargetingClauseExtended)
  public getTargetingClauseExtended(targetId: TargetId) {
    return this.client.get<TargetingClauseExtended>(`${this.targetResource}/extended/${targetId}`)
  }

  /**
   * Retrieves a list of targeting clauses.
   *
   * @param {ListTargetingClausesParams} [params]
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
   * @param {ListTargetingClausesParams} [params]
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
   * @param {CreateTargetingClausesParams[]} params
   * @returns
   */
  @DecodeArray(TargetingClauseResponse)
  public createTargetingClauses(params: CreateTargetingClausesParams[]) {
    return this.client.post<TargetingClauseResponse[]>(this.targetResource, params)
  }

  /**
   * Update one or more targeting clauses.
   *
   * @param {UpdateTargetingClausesParams[]} params
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
   * @param {TargetId} targetId
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
   * @param {ProductRecommendationRequest} params
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
   * @param {string[]} asins
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
   * @param {CategoryId} categoryId
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
   * @param {GetBrandRecommendationsParams} params
   * @returns
   */
  @DecodeArray(BrandResponse)
  public getBrandRecommendations(params: GetBrandRecommendationsParams) {
    return this.client.get<BrandResponse>(
      this.paramsFilterTransformer(`${this.targetResource}/brands`, params),
    )
  }

  // Negative targeting clauses operations

  /**
   * Get a specific negative targeting clause by targetId.
   *
   * @param {TargetId} targetId
   * @returns
   */
  @Decode(NegativeTargetingClause)
  public getNegativeTargetingClause(targetId: TargetId) {
    return this.client.get<NegativeTargetingClause>(`${this.negativeTargetsResource}/${targetId}`)
  }

  /**
   * Retrieve a negative targeting clause with additional attributes using a specific target ID.
   *
   * @param {TargetId} targetId
   * @returns
   */
  @Decode(NegativeTargetingClauseExtended)
  public getNegativeTargetingClauseExtended(targetId: TargetId) {
    return this.client.get<NegativeTargetingClauseExtended>(
      `${this.negativeTargetsResource}/extended/${targetId}`,
    )
  }

  /**
   * Create negative targeting clauses at the campaign level.
   *
   * @param {CreateNegativeTargetingClausesParams[]} params
   * @returns
   */
  @DecodeArray(NegativeTargetingClauseResponse)
  public createNegativeTargetingClauses(params: CreateNegativeTargetingClausesParams[]) {
    return this.client.post<NegativeTargetingClauseResponse[]>(this.negativeTargetsResource, params)
  }

  /**
   * Retrieves a list of negative targeting clauses.
   *
   * @param {ListNegativeTargetingClausesParams} [params]
   * @returns
   */
  @DecodeArray(NegativeTargetingClause)
  public listNegativeTargetingClauses(params?: ListNegativeTargetingClausesParams) {
    return this.client.get<NegativeTargetingClause[]>(
      this.paramsFilterTransformer(this.negativeTargetsResource, params),
    )
  }

  /**
   * Retrieve a list of targeting clauses with extended properties.
   *
   * @param {ListNegativeTargetingClausesParams} [params]
   * @returns
   */
  @DecodeArray(NegativeTargetingClauseExtended)
  public listNegativeTargetingClausesExtended(params?: ListNegativeTargetingClausesParams) {
    return this.client.get<NegativeTargetingClauseExtended[]>(
      this.paramsFilterTransformer(`${this.negativeTargetsResource}/extended`, params),
    )
  }

  /**
   * Archive negative targeting clauses.
   *
   * @param {TargetId} targetId
   * @returns
   */
  @Decode(NegativeTargetingClauseResponse)
  public archiveNegativeTargetingClause(targetId: TargetId) {
    return this.client.delete<NegativeTargetingClauseResponse>(
      `${this.negativeTargetsResource}/${targetId}`,
    )
  }

  /**
   * Update negative targeting clauses.
   *
   * @param {UpdateNegativeTargetingClausesParams[]} params
   * @returns
   */
  @DecodeArray(NegativeTargetingClauseResponse)
  public updateNegativeTargetingClauses(params: UpdateNegativeTargetingClausesParams[]) {
    return this.client.put<NegativeTargetingClauseResponse[]>(this.negativeTargetsResource, params)
  }
}
