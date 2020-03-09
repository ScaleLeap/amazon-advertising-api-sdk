import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import {
  SponsoredBrandsBidsRecommendationRequest,
  SponsoredBrandsBidsRecommendationResponse,
} from './types'

export class SponsoredBrandsBidRecommendationsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/recommendations/bids`

  /**
   * Get a list of bid recommendation objects for a specified list of keywords or products.
   *
   * @param {SponsoredBrandsBidsRecommendationRequest} params
   * @returns
   * @memberof SponsoredBrandsBidRecommendationsOperation
   */
  @Decode(SponsoredBrandsBidsRecommendationResponse)
  public getBidRecommendations(params: SponsoredBrandsBidsRecommendationRequest) {
    return this.client.post<SponsoredBrandsBidsRecommendationResponse>(this.resource, params)
  }
}
