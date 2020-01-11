import { Operation } from '../operation'
import { DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import { ListSBKeywordParams, CreateSBKeywordParams, KeywordResponse, SBKeyword } from './types'

export class SponsoredBrandsKeywordsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/keywords`

  @DecodeArray(SBKeyword)
  public listKeywords(params: ListSBKeywordParams) {
    return this.client.post<SBKeyword[]>(this.resource, params)
  }

  @DecodeArray(KeywordResponse)
  public createKeywords(params: CreateSBKeywordParams[]) {
    return this.client.post<KeywordResponse[]>(this.resource, params)
  }
}
