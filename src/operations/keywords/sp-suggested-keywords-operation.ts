import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import {
  GetAdGroupSuggestedKeywordsParams,
  AdGroupSuggestedKeywordsResponse,
  GetAdGroupSuggestedKeywordsExtendedParams,
  AdGroupSuggestedKeywordsExtendedResponse,
  AsinSuggestedKeywordsResponse,
  BulkAsinSuggestedKeywordsResponse,
} from './types'
import { AdGroupId } from '../adGroups/types'

export class SponsoredProductsSuggestedKeywordsOperation extends Operation {
  private resourcePostfix = '/suggested/keywords'
  private adGroupResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/adGroups/`
  private asinResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/asins`

  @Decode(AdGroupSuggestedKeywordsResponse)
  public getAdGroupSuggestedKeywords(
    adGroupId: AdGroupId,
    params?: GetAdGroupSuggestedKeywordsParams,
  ) {
    return this.client.get<AdGroupSuggestedKeywordsResponse>(
      this.query(`${this.adGroupResource}${adGroupId}${this.resourcePostfix}`, params),
    )
  }

  @DecodeArray(AdGroupSuggestedKeywordsExtendedResponse)
  public getAdGroupSuggestedKeywordsExtended(
    adGroupId: AdGroupId,
    params?: GetAdGroupSuggestedKeywordsExtendedParams,
  ) {
    return this.client.get<AdGroupSuggestedKeywordsExtendedResponse[]>(
      this.query(`${this.adGroupResource}${adGroupId}${this.resourcePostfix}/extended`, params),
    )
  }

  @Decode(AsinSuggestedKeywordsResponse)
  public getAsinSuggestedKeywords(asinValue: string, maxNumSuggestions = 100) {
    return this.client.get<AsinSuggestedKeywordsResponse>(
      this.query(`${this.asinResource}/${asinValue}${this.resourcePostfix}`, { maxNumSuggestions }),
    )
  }

  @Decode(BulkAsinSuggestedKeywordsResponse)
  public bulkGetAsinSuggestedKeywords(asinValue: Array<string>, maxNumSuggestions?: number) {
    return this.client.post<BulkAsinSuggestedKeywordsResponse>(
      `${this.asinResource}${this.resourcePostfix}`,
      { asins: asinValue, maxNumSuggestions },
    )
  }
}
