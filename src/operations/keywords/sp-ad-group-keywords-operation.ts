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

  @Decode(Keyword)
  public getBiddableKeyword(keywordId: KeywordId) {
    return this.client.get<Keyword>(`${this.resource}/${keywordId}`)
  }

  @Decode(KeywordExtended)
  public getBiddableKeywordExtended(keywordId: KeywordId) {
    return this.client.get<KeywordExtended>(`${this.resource}/extended/${keywordId}`)
  }

  @DecodeArray(KeywordResponse)
  public createKeywords(keywords: CreateKeywordsParam[]) {
    return this.client.post<KeywordResponse[]>(this.resource, keywords)
  }

  @DecodeArray(KeywordResponse)
  public updateKeywords(keywords: UpdateKeywordsParam[]) {
    return this.client.put<KeywordResponse[]>(this.resource, keywords)
  }

  @Decode(KeywordResponse)
  public archiveBiddableKeyword(keywordId: KeywordId) {
    return this.client.delete<KeywordResponse>(`${this.resource}/${keywordId}`)
  }

  @DecodeArray(Keyword)
  public listBiddableKeywords(params?: ListBiddableKeywordsParam) {
    return this.client.get<Keyword[]>(this.paramsFilterTransformer('', params))
  }

  @DecodeArray(KeywordExtended)
  public listBiddableKeywordsExtended(params?: ListBiddableKeywordsExtendedParam) {
    return this.client.get<KeywordExtended[]>(this.paramsFilterTransformer('/extended', params))
  }
}
