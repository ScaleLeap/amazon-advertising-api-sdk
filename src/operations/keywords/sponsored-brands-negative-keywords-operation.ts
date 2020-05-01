import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  KeywordId,
  SponsoredBrandsNegativeKeywordResponse,
  UpdateSponsoredBrandsNegativeKeywordParams,
  CreateSponsoredBrandsNegativeKeywordParams,
  SponsoredBrandsNegativeKeyword,
} from './types'

export class SponsoredBrandsNegativeKeywordsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/negativeKeywords`

  /**
   * Updates one or more negative keywords.
   * Negative keywords submitted for update have state set to pending while under moderation review.
   * Note that moderation may take up to 72 hours.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredBrandsNegativeKeywordResponse)
  public updateNegativeKeywords(params: UpdateSponsoredBrandsNegativeKeywordParams[]) {
    return this.client.put<SponsoredBrandsNegativeKeywordResponse[]>(this.resource, params)
  }

  /**
   * Creates one or more negative keywords.
   * Note that bid and state can't be set at negative keyword creation.
   * Negative keywords submitted for creation have state set to pending while under moderation review.
   * Note that moderation review may take up to 72 hours.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredBrandsNegativeKeywordResponse)
  public createNegativeKeywords(params: CreateSponsoredBrandsNegativeKeywordParams[]) {
    return this.client.post<SponsoredBrandsNegativeKeywordResponse[]>(this.resource, params)
  }

  /**
   * Gets a negative keyword specified by identifier.
   *
   * @param keywordId -
   * @returns
   */
  @Decode(SponsoredBrandsNegativeKeyword)
  public getNegativeKeyword(keywordId: KeywordId) {
    return this.client.get<SponsoredBrandsNegativeKeyword>(`${this.resource}/${keywordId}`)
  }

  /**
   * Archives a negative keyword specified by identifier.
   * This operation is equivalent to an update operation that sets the status field to 'archived'.
   * Note that setting the status field to 'archived' is permanent and can't be undone. See Developer Notes for more information.
   *
   * @param keywordId -
   * @returns
   */
  @Decode(SponsoredBrandsNegativeKeywordResponse)
  public archiveNegativeKeyword(keywordId: KeywordId) {
    return this.client.delete<SponsoredBrandsNegativeKeywordResponse>(
      `${this.resource}/${keywordId}`,
    )
  }
}
