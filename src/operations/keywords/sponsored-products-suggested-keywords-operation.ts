import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import {
  GetAdGroupSuggestedKeywordsParams,
  AdGroupSuggestedKeywordsResponse,
  GetAdGroupSuggestedKeywordsExtendedParams,
  AdGroupSuggestedKeywordsExtendedResponse,
  SuggestedKeywords,
} from './types'
import { AdGroupId } from '../ad-groups/types'

export class SponsoredProductsSuggestedKeywordsOperation extends Operation {
  private resourcePostfix = '/suggested/keywords'
  private adGroupResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/adGroups/`
  private asinResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/asins`

  /**
   * Retrieve suggested keyword data for the specified adGroupId.
   *
   * @param {AdGroupId} adGroupId
   * @param {GetAdGroupSuggestedKeywordsParams} [params]
   * @returns
   * @memberof SponsoredProductsSuggestedKeywordsOperation
   */
  @Decode(AdGroupSuggestedKeywordsResponse)
  public getAdGroupSuggestedKeywords(
    adGroupId: AdGroupId,
    params?: GetAdGroupSuggestedKeywordsParams,
  ) {
    return this.client.get<AdGroupSuggestedKeywordsResponse>(
      this.query(`${this.adGroupResource}${adGroupId}${this.resourcePostfix}`, params),
    )
  }

  /**
   * Retrieve extended suggested keyword data for the specified adGroupId.
   *
   * @param {AdGroupId} adGroupId
   * @param {GetAdGroupSuggestedKeywordsExtendedParams} [params]
   * @returns
   * @memberof SponsoredProductsSuggestedKeywordsOperation
   */
  @DecodeArray(AdGroupSuggestedKeywordsExtendedResponse)
  public getAdGroupSuggestedKeywordsExtended(
    adGroupId: AdGroupId,
    params?: GetAdGroupSuggestedKeywordsExtendedParams,
  ) {
    return this.client.get<AdGroupSuggestedKeywordsExtendedResponse[]>(
      this.query(`${this.adGroupResource}${adGroupId}${this.resourcePostfix}/extended`, params),
    )
  }

  /**
   * Provides suggested keywords for specified ASIN.
   * Suggested keywords are ordered by most effective to least effective.
   *
   * @param {string} asinValue
   * @param {number} [maxNumSuggestions=100]
   * @returns
   * @memberof SponsoredProductsSuggestedKeywordsOperation
   */
  @Decode(SuggestedKeywords)
  public getAsinSuggestedKeywords(asinValue: string, maxNumSuggestions = 100) {
    return this.client.get<SuggestedKeywords>(
      this.query(`${this.asinResource}/${asinValue}${this.resourcePostfix}`, { maxNumSuggestions }),
    )
  }

  /**
   * Provides keyword suggestions for specified list of ASINs.
   * Suggested keywords are ordered by most effective to least effective.
   *
   * @param {Array<string>} asinValue
   * @param {number} [maxNumSuggestions]
   * @returns
   * @memberof SponsoredProductsSuggestedKeywordsOperation
   */
  @Decode(SuggestedKeywords)
  public bulkGetAsinSuggestedKeywords(asinValue: Array<string>, maxNumSuggestions?: number) {
    return this.client.post<SuggestedKeywords>(`${this.asinResource}${this.resourcePostfix}`, {
      asins: asinValue,
      maxNumSuggestions,
    })
  }
}
