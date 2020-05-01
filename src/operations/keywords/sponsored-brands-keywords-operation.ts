import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import {
  ListSponsoredBrandsKeywordParams,
  CreateSponsoredBrandsKeywordParams,
  SponsoredBrandsKeywordResponse,
  SponsoredBrandsKeyword,
  UpdateSponsoredBrandsKeywordParams,
  KeywordId,
} from './types'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

export class SponsoredBrandsKeywordsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/keywords`

  /**
   * Gets an array of keywords, filtered by optional criteria
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredBrandsKeyword)
  public listKeywords(params?: ListSponsoredBrandsKeywordParams) {
    return this.client.get<SponsoredBrandsKeyword[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Updates one or more keywords.
   * Keywords submitted for update have state set to pending while under moderation review.
   * Note that moderation may take up to 72 hours.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredBrandsKeywordResponse)
  public updateKeywords(params: UpdateSponsoredBrandsKeywordParams[]) {
    return this.client.put<SponsoredBrandsKeywordResponse[]>(this.resource, params)
  }

  /**
   * Creates one or more keywords.
   * Note that state can't be set at keyword creation.
   * Keywords submitted for creation have state set to pending while under moderation review.
   * Note that moderation review may take up to 72 hours.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SponsoredBrandsKeywordResponse)
  public createKeywords(params: CreateSponsoredBrandsKeywordParams[]) {
    return this.client.post<SponsoredBrandsKeywordResponse[]>(this.resource, params)
  }

  /**
   * Gets a keyword specified by identifier.
   *
   * @param keywordId -
   * @returns
   */
  @Decode(SponsoredBrandsKeyword)
  public getKeyword(keywordId: KeywordId) {
    return this.client.get<SponsoredBrandsKeyword>(`${this.resource}/${keywordId}`)
  }

  /**
   * Archives a keyword specified by identifier.
   * This operation is equivalent to an update operation that sets the status field to 'archived'.
   * Note that setting the status field to 'archived' is permanent and can't be undone. See Developer Notes for more information.
   *
   * @param keywordId -
   * @returns
   */
  @Decode(SponsoredBrandsKeyword)
  public archiveKeyword(keywordId: KeywordId) {
    return this.client.delete<SponsoredBrandsKeywordResponse>(`${this.resource}/${keywordId}`)
  }
}
