import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import {
  ListSBKeywordParams,
  CreateSBKeywordParams,
  SBKeywordResponse,
  SBKeyword,
  UpdateSBKeywordParams,
  KeywordId,
} from './types'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

export class SponsoredBrandsKeywordsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/keywords`

  @DecodeArray(SBKeyword)
  public listKeywords(params?: ListSBKeywordParams) {
    return this.client.get<SBKeyword[]>(this.paramsFilterTransformer('', params))
  }

  @DecodeArray(SBKeywordResponse)
  public updateKeywords(params: UpdateSBKeywordParams[]) {
    return this.client.put<SBKeywordResponse[]>(this.resource, params)
  }

  @DecodeArray(SBKeywordResponse)
  public createKeywords(params: CreateSBKeywordParams[]) {
    return this.client.post<SBKeywordResponse[]>(this.resource, params)
  }

  @Decode(SBKeyword)
  public getKeyword(keywordId: KeywordId) {
    return this.client.get<SBKeyword>(`${this.resource}/${keywordId}`)
  }

  @Decode(SBKeyword)
  public archiveKeyword(keywordId: KeywordId) {
    return this.client.delete<SBKeywordResponse>(`${this.resource}/${keywordId}`)
  }
}
