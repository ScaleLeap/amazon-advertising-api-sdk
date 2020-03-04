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

  @Decode(NegativeKeyword)
  public getNegativeKeyword(keywordId: KeywordId) {
    return this.client.get<NegativeKeyword>(`${this.resource}/${keywordId}`)
  }

  @Decode(NegativeKeywordExtended)
  public getNegativeKeywordExtended(keywordId: KeywordId) {
    return this.client.get<NegativeKeywordExtended>(`${this.resource}/extended/${keywordId}`)
  }

  @DecodeArray(NegativeKeywordResponse)
  public createNegativeKeywords(keywords: CreateNegativeKeywordsParam[]) {
    return this.client.post<NegativeKeywordResponse[]>(this.resource, keywords)
  }

  @DecodeArray(NegativeKeywordResponse)
  public updateNegativeKeywords(keywords: UpdateNegativeKeywordsParam[]) {
    return this.client.put<NegativeKeywordResponse[]>(this.resource, keywords)
  }

  @Decode(NegativeKeywordResponse)
  public archiveNegativeKeyword(keywordId: KeywordId) {
    return this.client.delete<NegativeKeywordResponse>(`${this.resource}/${keywordId}`)
  }

  @DecodeArray(NegativeKeyword)
  public listNegativeKeywords(params?: ListNegativeKeywordsParam) {
    return this.client.get<NegativeKeyword[]>(this.paramsFilterTransformer('', params))
  }

  @DecodeArray(NegativeKeywordExtended)
  public listNegativeKeywordsExtended(params?: ListNegativeKeywordsParam) {
    return this.client.get<NegativeKeywordExtended[]>(
      this.paramsFilterTransformer('/extended', params),
    )
  }
}
