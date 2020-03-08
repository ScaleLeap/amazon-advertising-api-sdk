import { Operation } from '../operation'
import { DecodeArray } from '../../decorators'
import {
  SponsoredBrandsKeywordRecommendationParams,
  SponsoredBrandsKeywordRecommendation,
} from './types'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

export class SponsoredBrandsKeywordRecommendationsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/recommendations/keyword`

  @DecodeArray(SponsoredBrandsKeywordRecommendation)
  public getKeywordRecommendations(params: SponsoredBrandsKeywordRecommendationParams) {
    return this.client.post<SponsoredBrandsKeywordRecommendation[]>(this.resource, params)
  }
}
