import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  KeywordId,
  NegativeKeyword,
  NegativeKeywordExtended,
  NegativeKeywordResponse,
  ListNegativeKeywordsParam,
  UpdateNegativeKeywordsParam,
  CreateNegativeKeywordsParam,
} from './types'

export class SponsoredProductsAdGroupNegativeKeywordsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/negativeKeywords`

  /**
   * Retrieves a negative keyword by ID.
   * Note that this call returns the minimal set of keyword fields, but is more efficient than getNegativeKeywordEx.
   *
   * @param keywordId -
   * @returns
   */
  @Decode(NegativeKeyword)
  public getNegativeKeyword(keywordId: KeywordId) {
    return this.client.get<NegativeKeyword>(`${this.resource}/${keywordId}`)
  }

  /**
   * Retrieves a negative keyword and its extended fields by ID.
   * Note that this call returns the complete set of keyword fields (including serving status and other read-only fields), but is less efficient than getNegativeKeyword.
   *
   * @param keywordId -
   * @returns
   */
  @Decode(NegativeKeywordExtended)
  public getNegativeKeywordExtended(keywordId: KeywordId) {
    return this.client.get<NegativeKeywordExtended>(`${this.resource}/extended/${keywordId}`)
  }

  /**
   * Creates one or more negative keywords.
   * Successfully created keywords will be assigned a unique keywordId.
   *
   * @param keywords -
   * @returns
   */
  @DecodeArray(NegativeKeywordResponse)
  public createNegativeKeywords(keywords: CreateNegativeKeywordsParam[]) {
    return this.client.post<NegativeKeywordResponse[]>(this.resource, keywords)
  }

  /**
   * Updates one or more negative keywords.
   * Keywords are identified using their keywordId.
   *
   * @param keywords -
   * @returns
   */
  @DecodeArray(NegativeKeywordResponse)
  public updateNegativeKeywords(keywords: UpdateNegativeKeywordsParam[]) {
    return this.client.put<NegativeKeywordResponse[]>(this.resource, keywords)
  }

  /**
   * Archive a single negative ad group-level keyword.
   * Archived entities cannot be made active again. See developer notes for more information.
   *
   * @param keywordId -
   * @returns
   */
  @Decode(NegativeKeywordResponse)
  public archiveNegativeKeyword(keywordId: KeywordId) {
    return this.client.delete<NegativeKeywordResponse>(`${this.resource}/${keywordId}`)
  }

  /**
   * Retrieves a list of negative keywords satisfying optional criteria.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(NegativeKeyword)
  public listNegativeKeywords(params?: ListNegativeKeywordsParam) {
    return this.client.get<NegativeKeyword[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Retrieves a list of negative keywords with extended fields satisfying optional criteria.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(NegativeKeywordExtended)
  public listNegativeKeywordsExtended(params?: ListNegativeKeywordsParam) {
    return this.client.get<NegativeKeywordExtended[]>(
      this.paramsFilterTransformer('/extended', params),
    )
  }
}
