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

  @Decode(CampaignNegativeKeyword)
  public getCampaignNegativeKeyword(keywordId: KeywordId) {
    return this.client.get<CampaignNegativeKeyword>(`${this.resource}/${keywordId}`)
  }

  @Decode(CampaignNegativeKeywordExtended)
  public getCampaignNegativeKeywordExtended(keywordId: KeywordId) {
    return this.client.get<CampaignNegativeKeywordExtended>(
      `${this.resource}/extended/${keywordId}`,
    )
  }

  @DecodeArray(CampaignNegativeKeywordResponse)
  public createCampaignNegativeKeywords(keywords: CreateCampaignNegativeKeywordsParam[]) {
    return this.client.post<CampaignNegativeKeywordResponse[]>(this.resource, keywords)
  }

  @DecodeArray(CampaignNegativeKeywordResponse)
  public updateCampaignNegativeKeywords(keywords: UpdateCampaignNegativeKeywordsParam[]) {
    return this.client.put<CampaignNegativeKeywordResponse[]>(this.resource, keywords)
  }

  @Decode(CampaignNegativeKeywordResponse)
  public archiveCampaignNegativeKeyword(keywordId: KeywordId) {
    return this.client.delete<CampaignNegativeKeywordResponse>(`${this.resource}/${keywordId}`)
  }

  @DecodeArray(CampaignNegativeKeyword)
  public listCampaignNegativeKeywords(params?: ListCampaignNegativeKeywordsParam) {
    return this.client.get<CampaignNegativeKeyword[]>(this.paramsFilterTransformer('', params))
  }

  @DecodeArray(CampaignNegativeKeywordExtended)
  public listNegativeKeywordsExtended(params?: ListCampaignNegativeKeywordsParam) {
    return this.client.get<CampaignNegativeKeywordExtended[]>(
      this.paramsFilterTransformer('/extended', params),
    )
  }
}
