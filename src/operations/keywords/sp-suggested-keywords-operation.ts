import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import { AdGroupSuggestedKeywordsResponse, GetAdGroupSuggestedKeywordsParams } from './types'

export class SponsoredProductsSuggestedKeywordsOperation extends Operation {
  private resourcePostfix = '/suggested/keywords'
  private adGroupResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/adGroups`

  // TODO: Change adGroupId type to AdGroupId
  @Decode(AdGroupSuggestedKeywordsResponse)
  public getAdGroupSuggestedKeywords(
    adGroupId: number,
    params?: GetAdGroupSuggestedKeywordsParams,
  ) {
    return this.client.get<AdGroupSuggestedKeywordsResponse>(
      this.query(`${this.adGroupResource}/${adGroupId}${this.resourcePostfix}`, params),
    )
  }
}
