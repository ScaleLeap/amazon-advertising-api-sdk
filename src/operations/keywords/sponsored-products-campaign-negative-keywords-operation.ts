import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import {
  KeywordId,
  CampaignNegativeKeyword,
  CampaignNegativeKeywordExtended,
  CampaignNegativeKeywordResponse,
  CreateCampaignNegativeKeywordsParam,
  UpdateCampaignNegativeKeywordsParam,
  ListCampaignNegativeKeywordsParam,
} from './types'

export class SponsoredProductsCampaignNegativeKeywordsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/campaignNegativeKeywords`

  /**
   * Retrieves a campaign negative keyword by ID.
   * Note that this call returns the minimal set of keyword fields, but is more efficient than getCampaignNegativeKeywordEx.
   * Not available for vendors.
   *
   * @param {KeywordId} keywordId
   * @returns
   * @memberof SponsoredProductsCampaignNegativeKeywordsOperation
   */
  @Decode(CampaignNegativeKeyword)
  public getCampaignNegativeKeyword(keywordId: KeywordId) {
    return this.client.get<CampaignNegativeKeyword>(`${this.resource}/${keywordId}`)
  }

  /**
   * Retrieves a campaign negative keyword and its extended fields by ID.
   * Note that this call returns the complete set of keyword fields (including serving status and other read-only fields), but is less efficient than getCampaignNegativeKeyword.
   * Not available for vendors.
   *
   * @param {KeywordId} keywordId
   * @returns
   * @memberof SponsoredProductsCampaignNegativeKeywordsOperation
   */
  @Decode(CampaignNegativeKeywordExtended)
  public getCampaignNegativeKeywordExtended(keywordId: KeywordId) {
    return this.client.get<CampaignNegativeKeywordExtended>(
      `${this.resource}/extended/${keywordId}`,
    )
  }

  /**
   * Creates one or more campaign negative keywords.
   * Successfully created keywords will be assigned a unique keywordId.
   * Not available for vendors.
   *
   * @param {CreateCampaignNegativeKeywordsParam[]} keywords
   * @returns
   * @memberof SponsoredProductsCampaignNegativeKeywordsOperation
   */
  @DecodeArray(CampaignNegativeKeywordResponse)
  public createCampaignNegativeKeywords(keywords: CreateCampaignNegativeKeywordsParam[]) {
    return this.client.post<CampaignNegativeKeywordResponse[]>(this.resource, keywords)
  }

  /**
   * Updates one or more campaign negative keywords.
   * Keywords are identified using their keywordId.
   * Not available for vendors.
   *
   * @param {UpdateCampaignNegativeKeywordsParam[]} keywords
   * @returns
   * @memberof SponsoredProductsCampaignNegativeKeywordsOperation
   */
  @DecodeArray(CampaignNegativeKeywordResponse)
  public updateCampaignNegativeKeywords(keywords: UpdateCampaignNegativeKeywordsParam[]) {
    return this.client.put<CampaignNegativeKeywordResponse[]>(this.resource, keywords)
  }

  /**
   * Sets the campaign negative keyword status to deleted.
   * This same operation can be performed via an update to the status, but is included for completeness.
   * Not available for vendors.
   *
   * Note: While ad group-level keywords (both biddable and negative) support paused and archived status, campaign negative keywords only support enabled or deleted status.
   * Deleted status indicates permanent removal of the campaign negative keyword.
   * Retrieving a deleted entity by ID will result in a 404 error.
   *
   * @param {KeywordId} keywordId
   * @returns
   * @memberof SponsoredProductsCampaignNegativeKeywordsOperation
   */
  @Decode(CampaignNegativeKeywordResponse)
  public archiveCampaignNegativeKeyword(keywordId: KeywordId) {
    return this.client.delete<CampaignNegativeKeywordResponse>(`${this.resource}/${keywordId}`)
  }

  /**
   * Retrieves a list of negative keywords satisfying optional criteria.
   * Not available for vendors.
   *
   * @param {ListCampaignNegativeKeywordsParam} [params]
   * @returns
   * @memberof SponsoredProductsCampaignNegativeKeywordsOperation
   */
  @DecodeArray(CampaignNegativeKeyword)
  public listCampaignNegativeKeywords(params?: ListCampaignNegativeKeywordsParam) {
    return this.client.get<CampaignNegativeKeyword[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Retrieves a list of campaign negative keywords with extended fields satisfying optional criteria.
   * Not available for vendors.
   *
   * @param {ListCampaignNegativeKeywordsParam} [params]
   * @returns
   * @memberof SponsoredProductsCampaignNegativeKeywordsOperation
   */
  @DecodeArray(CampaignNegativeKeywordExtended)
  public listCampaignNegativeKeywordsExtended(params?: ListCampaignNegativeKeywordsParam) {
    return this.client.get<CampaignNegativeKeywordExtended[]>(
      this.paramsFilterTransformer('/extended', params),
    )
  }
}
