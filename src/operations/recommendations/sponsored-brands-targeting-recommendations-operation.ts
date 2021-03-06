import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import {
  SponsoredBrandsProductRecommendationsRequest,
  SponsoredBrandsProductRecommendationsResponse,
  SponsoredBrandsCategoryRecommendationsRequest,
  SponsoredBrandsCategoryRecommendationsResponse,
  SponsoredBrandsBrandRecommendationsRequest,
  SponsoredBrandsBrandRecommendationsResponse,
} from './types'

export class SponsoredBrandsTargetingRecommendationsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/recommendations/targets`

  /**
   * Gets a list of recommended products for targeting.
   *
   * @param params -
   * @returns
   */
  @Decode(SponsoredBrandsProductRecommendationsResponse)
  public getProductRecommendations(params: SponsoredBrandsProductRecommendationsRequest) {
    return this.client.post<SponsoredBrandsProductRecommendationsResponse>(
      `${this.resource}/product/list`,
      params,
    )
  }

  /**
   * Gets a list of recommended categories for targeting.
   *
   * @param params -
   * @returns
   */
  @Decode(SponsoredBrandsCategoryRecommendationsResponse)
  public getCategoryRecommendations(params: SponsoredBrandsCategoryRecommendationsRequest) {
    return this.client.post<SponsoredBrandsCategoryRecommendationsResponse>(
      `${this.resource}/category`,
      params,
    )
  }

  /**
   * Gets a list of brand suggestions.
   *
   * @param params -
   * @returns
   */
  @Decode(SponsoredBrandsBrandRecommendationsResponse)
  public getBrandRecommendations(params: SponsoredBrandsBrandRecommendationsRequest) {
    return this.client.post<SponsoredBrandsBrandRecommendationsResponse>(
      `${this.resource}/brand`,
      params,
    )
  }
}
