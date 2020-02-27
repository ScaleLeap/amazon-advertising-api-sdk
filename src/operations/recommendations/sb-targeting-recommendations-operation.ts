import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import {
  SBProductRecommendationsRequest,
  SBProductRecommendationsResponse,
  SBCategoryRecommendationsRequest,
  SBCategoryRecommendationsResponse,
  SBBrandRecommendationsRequest,
  SBBrandRecommendationsResponse,
} from './types'

export class SponsoredBrandsTargetingRecommendationsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/recommendations/targets`

  @Decode(SBProductRecommendationsResponse)
  public getProductRecommendations(params: SBProductRecommendationsRequest) {
    return this.client.post<SBProductRecommendationsResponse>(
      `${this.resource}/product/list`,
      params,
    )
  }

  @Decode(SBCategoryRecommendationsResponse)
  public getCategoryRecommendations(params: SBCategoryRecommendationsRequest) {
    return this.client.post<SBCategoryRecommendationsResponse>(`${this.resource}/category`, params)
  }

  @Decode(SBBrandRecommendationsResponse)
  public getBrandRecommendations(params: SBBrandRecommendationsRequest) {
    return this.client.post<SBBrandRecommendationsResponse>(`${this.resource}/brand`, params)
  }
}
