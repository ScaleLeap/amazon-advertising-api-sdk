import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import {
  GetAdGroupSuggestedKeywordsParams,
  AdGroupSuggestedKeywordsResponse,
  GetAdGroupSuggestedKeywordsExtendedParams,
  AdGroupSuggestedKeywordsExtendedResponse,
} from './types'

export class SponsoredProductsSuggestedKeywordsOperation extends Operation {
  private resourcePostfix = '/suggested/keywords'
  private adGroupResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/adGroups`

  // TODO: Change adGroupId type to AdGroupId type
  @Decode(AdGroupSuggestedKeywordsResponse)
  public getAdGroupSuggestedKeywords(
    adGroupId: number,
    params?: GetAdGroupSuggestedKeywordsParams,
  ) {
    return this.client.get<AdGroupSuggestedKeywordsResponse>(
      this.query(`${this.adGroupResource}/${adGroupId}${this.resourcePostfix}`, params),
    )
  }

  // TODO: Change adGroupId type to AdGroupId type
  @DecodeArray(AdGroupSuggestedKeywordsExtendedResponse)
  public getAdGroupSuggestedKeywordsExtended(
    adGroupId: number,
    params?: GetAdGroupSuggestedKeywordsExtendedParams,
  ) {
    return this.client.get<AdGroupSuggestedKeywordsExtendedResponse[]>(
      this.query(`${this.adGroupResource}/${adGroupId}${this.resourcePostfix}/extended`, params),
    )
  }
}
