import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  KeywordId,
  Keyword,
  KeywordExtended,
  CreateKeywordsParam,
  KeywordResponse,
  UpdateKeywordsParam,
  ListBiddableKeywordsParam,
  ListBiddableKeywordsExtendedParam,
} from './types'

export class SponsoredProductsAdGroupKeywordsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/keywords`

  /**
   * Retrieves a keyword by ID.
   * Note that this call returns the minimal set of keyword fields, but is more efficient than getBiddableKeywordEx
   *
   * @param {KeywordId} keywordId
   * @returns
   * @memberof SponsoredProductsAdGroupKeywordsOperation
   */
  @Decode(Keyword)
  public getBiddableKeyword(keywordId: KeywordId) {
    return this.client.get<Keyword>(`${this.resource}/${keywordId}`)
  }

  /**
   * Retrieves a keyword and its extended fields by ID.
   * Note that this call returns the complete set of keyword fields (including serving status and other read-only fields), but is less efficient than getBiddableKeyword.
   * There is no extended keywords interface for Sponsored Brands.
   *
   * @param {KeywordId} keywordId
   * @returns
   * @memberof SponsoredProductsAdGroupKeywordsOperation
   */
  @Decode(KeywordExtended)
  public getBiddableKeywordExtended(keywordId: KeywordId) {
    return this.client.get<KeywordExtended>(`${this.resource}/extended/${keywordId}`)
  }

  /**
   * Creates one or more keywords.
   * Successfully created keywords will be assigned a unique keywordId.
   *
   * @param {CreateKeywordsParam[]} keywords
   * @returns
   * @memberof SponsoredProductsAdGroupKeywordsOperation
   */
  @DecodeArray(KeywordResponse)
  public createKeywords(keywords: CreateKeywordsParam[]) {
    return this.client.post<KeywordResponse[]>(this.resource, keywords)
  }

  /**
   * Updates one or more keywords.
   * While keywords are in a pending state you can only update the bid amount, or archive them. You cannot change the state from pending
   *
   * @param {UpdateKeywordsParam[]} keywords
   * @returns
   * @memberof SponsoredProductsAdGroupKeywordsOperation
   */
  @DecodeArray(KeywordResponse)
  public updateKeywords(keywords: UpdateKeywordsParam[]) {
    return this.client.put<KeywordResponse[]>(this.resource, keywords)
  }

  /**
   * Sets the keyword status to archived.
   * This same operation can be performed via an update, but is included for completeness.
   * Archived entities cannot be made active again. See developer notes for more information.
   *
   * @param {KeywordId} keywordId
   * @returns
   * @memberof SponsoredProductsAdGroupKeywordsOperation
   */
  @Decode(KeywordResponse)
  public archiveBiddableKeyword(keywordId: KeywordId) {
    return this.client.delete<KeywordResponse>(`${this.resource}/${keywordId}`)
  }

  /**
   * Retrieves a list of keywords satisfying optional criteria for Sponsored Products.
   * List keyword operations are not supported for Sponsored Brands.
   *
   * @param {ListBiddableKeywordsParam} [params]
   * @returns
   * @memberof SponsoredProductsAdGroupKeywordsOperation
   */
  @DecodeArray(Keyword)
  public listBiddableKeywords(params?: ListBiddableKeywordsParam) {
    return this.client.get<Keyword[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Retrieves a list of keywords and its extended fields satisfying optional criteria for Sponsored Products.
   * List keyword operations are not supported for Sponsored Brands.
   *
   * @param {ListBiddableKeywordsExtendedParam} [params]
   * @returns
   * @memberof SponsoredProductsAdGroupKeywordsOperation
   */
  @DecodeArray(KeywordExtended)
  public listBiddableKeywordsExtended(params?: ListBiddableKeywordsExtendedParam) {
    return this.client.get<KeywordExtended[]>(this.paramsFilterTransformer('/extended', params))
  }
}
