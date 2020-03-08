import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import {
  SponsoredBrandsBidsRecommendationRequest,
  SponsoredBrandsBidsRecommendationResponse,
} from './types'

export class SponsoredBrandsBidRecommendationsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/recommendations/bids`

  @Decode(SponsoredBrandsBidsRecommendationResponse)
  public getBidRecommendations(params: SponsoredBrandsBidsRecommendationRequest) {
    return this.client.post<SponsoredBrandsBidsRecommendationResponse>(this.resource, params)
  }
}
