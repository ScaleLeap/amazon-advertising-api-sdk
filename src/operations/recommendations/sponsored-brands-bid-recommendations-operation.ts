import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import { SBBidsRecommendationRequest, SBBidsRecommendationResponse } from './types'

export class SponsoredBrandsBidRecommendationsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/recommendations/bids`

  @Decode(SBBidsRecommendationResponse)
  public getBidRecommendations(params: SBBidsRecommendationRequest) {
    return this.client.post<SBBidsRecommendationResponse>(this.resource, params)
  }
}
