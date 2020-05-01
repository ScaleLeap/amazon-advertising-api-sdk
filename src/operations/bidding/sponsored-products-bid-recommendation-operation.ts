import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import { AdGroupId } from '../ad-groups/types'
import {
  AdGroupBidRecommendationsResponse,
  KeywordBidRecommendationsResponse,
  KeywordBidRecommendationsData,
  BidRecommendationsResponse,
  BidRecommendationRequest,
  BidRecommendationForTargetsResponse,
} from './types'
import { KeywordId } from '../keywords/types'

export class SponsoredProductsBidRecommendationOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}`

  /**
   * Request bid recommendations for specified ad group.
   *
   * @param id -
   * @returns AdGroupBidRecommendationsResponse
   */
  @Decode(AdGroupBidRecommendationsResponse)
  public getAdGroupBidRecommendations(id: AdGroupId) {
    return this.client.get<AdGroupBidRecommendationsResponse>(
      `${this.resource}/adGroups/${id}/bidRecommendations`,
    )
  }

  /**
   * Request bid recommendations for specified keyword.
   *
   * @param id -
   * @returns KeywordBidRecommendationsResponse
   */
  @Decode(KeywordBidRecommendationsResponse)
  public getKeywordBidRecommendations(id: KeywordId) {
    return this.client.get<KeywordBidRecommendationsResponse>(
      `${this.resource}/keywords/${id}/bidRecommendations`,
    )
  }

  /**
   * Request bid recommendations for a list of up to 100 keywords.
   *
   * @param params -
   * @returns BidRecommendationsResponse
   */
  @Decode(BidRecommendationsResponse)
  public createKeywordBidRecommendations(params: KeywordBidRecommendationsData) {
    return this.client.post<BidRecommendationsResponse>(
      `${this.resource}/keywords/bidRecommendations`,
      params,
    )
  }

  /**
   * Retrieve a list of bid recommendations for keyword, product, or auto targeting expressions by adGroupId.
   *
   * @param params -
   * @returns BidRecommendationForTargetsResponse
   */
  @Decode(BidRecommendationForTargetsResponse)
  public getBidRecommendations(params: BidRecommendationRequest) {
    return this.client.post<BidRecommendationForTargetsResponse>(
      `${this.resource}/targets/bidRecommendations`,
      params,
    )
  }
}
