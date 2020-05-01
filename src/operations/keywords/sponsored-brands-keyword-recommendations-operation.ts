import { Operation } from '../operation'
import { DecodeArray } from '../../decorators'
import {
  SponsoredBrandsKeywordRecommendationParams,
  SponsoredBrandsKeywordRecommendation,
} from './types'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

export class SponsoredBrandsKeywordRecommendationsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/recommendations/keyword`

  /**
   * Gets an array of keyword recommendation objects for a set of ASINs included either on a landing page or a Store page.
   * Vendors may also specify a custom landing page.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredBrandsKeywordRecommendation)
  public getKeywordRecommendations(params: SponsoredBrandsKeywordRecommendationParams) {
    return this.client.post<SponsoredBrandsKeywordRecommendation[]>(this.resource, params)
  }
}
