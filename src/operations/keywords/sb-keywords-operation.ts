import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import {
  ListSBKeywordParams,
  CreateSBKeywordParams,
  KeywordResponse,
  SBKeyword,
  UpdateSBKeywordParams,
  KeywordId,
} from './types'

export class SponsoredBrandsKeywordsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/keywords`

  @DecodeArray(SBKeyword)
  public listKeywords(params: ListSBKeywordParams) {
    return this.client.post<SBKeyword[]>(this.resource, params)
  }

  @DecodeArray(KeywordResponse)
  public updateKeywords(params: UpdateSBKeywordParams[]) {
    return this.client.put<KeywordResponse[]>(this.resource, params)
  }

  @DecodeArray(KeywordResponse)
  public createKeywords(params: CreateSBKeywordParams[]) {
    return this.client.post<KeywordResponse[]>(this.resource, params)
  }

  @Decode(SBKeyword)
  public getKeyword(keywordId: KeywordId) {
    return this.client.get<SBKeyword>(`${this.resource}/${keywordId}`)
  }

  @Decode(SBKeyword)
  public archiveKeyword(keywordId: KeywordId) {
    return this.client.delete<KeywordResponse>(`${this.resource}/${keywordId}`)
  }
}
