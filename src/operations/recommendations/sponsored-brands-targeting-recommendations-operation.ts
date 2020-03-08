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

  @Decode(SponsoredBrandsProductRecommendationsResponse)
  public getProductRecommendations(params: SponsoredBrandsProductRecommendationsRequest) {
    return this.client.post<SponsoredBrandsProductRecommendationsResponse>(
      `${this.resource}/product/list`,
      params,
    )
  }

  @Decode(SponsoredBrandsCategoryRecommendationsResponse)
  public getCategoryRecommendations(params: SponsoredBrandsCategoryRecommendationsRequest) {
    return this.client.post<SponsoredBrandsCategoryRecommendationsResponse>(
      `${this.resource}/category`,
      params,
    )
  }

  @Decode(SponsoredBrandsBrandRecommendationsResponse)
  public getBrandRecommendations(params: SponsoredBrandsBrandRecommendationsRequest) {
    return this.client.post<SponsoredBrandsBrandRecommendationsResponse>(
      `${this.resource}/brand`,
      params,
    )
  }
}
