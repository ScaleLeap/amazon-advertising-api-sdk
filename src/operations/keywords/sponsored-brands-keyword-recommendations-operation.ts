import { Operation } from '../operation'
import { DecodeArray } from '../../decorators'
import { SBKeywordRecommendationParams, SBKeywordRecommendation } from './types'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

export class SponsoredBrandsKeywordRecommendationsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/recommendations/keyword`

  @DecodeArray(SBKeywordRecommendation)
  public getKeywordRecommendations(params: SBKeywordRecommendationParams) {
    return this.client.post<SBKeywordRecommendation[]>(this.resource, params)
  }
}
