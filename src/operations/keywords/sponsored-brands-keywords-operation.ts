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

  @DecodeArray(SponsoredBrandsKeyword)
  public listKeywords(params?: ListSponsoredBrandsKeywordParams) {
    return this.client.get<SponsoredBrandsKeyword[]>(this.paramsFilterTransformer('', params))
  }

  @DecodeArray(SponsoredBrandsKeywordResponse)
  public updateKeywords(params: UpdateSponsoredBrandsKeywordParams[]) {
    return this.client.put<SponsoredBrandsKeywordResponse[]>(this.resource, params)
  }

  @DecodeArray(SponsoredBrandsKeywordResponse)
  public createKeywords(params: CreateSponsoredBrandsKeywordParams[]) {
    return this.client.post<SponsoredBrandsKeywordResponse[]>(this.resource, params)
  }

  @Decode(SponsoredBrandsKeyword)
  public getKeyword(keywordId: KeywordId) {
    return this.client.get<SponsoredBrandsKeyword>(`${this.resource}/${keywordId}`)
  }

  @Decode(SponsoredBrandsKeyword)
  public archiveKeyword(keywordId: KeywordId) {
    return this.client.delete<SponsoredBrandsKeywordResponse>(`${this.resource}/${keywordId}`)
  }
}
