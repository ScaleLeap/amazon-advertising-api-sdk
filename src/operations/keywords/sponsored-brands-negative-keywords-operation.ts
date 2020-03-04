import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  KeywordId,
  SBNegativeKeywordResponse,
  UpdateSBNegativeKeywordParams,
  CreateSBNegativeKeywordParams,
  SBNegativeKeyword,
} from './types'

export class SponsoredBrandsNegativeKeywordsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/negativeKeywords`

  @DecodeArray(SBNegativeKeywordResponse)
  public updateNegativeKeywords(params: UpdateSBNegativeKeywordParams[]) {
    return this.client.put<SBNegativeKeywordResponse[]>(this.resource, params)
  }

  @DecodeArray(SBNegativeKeywordResponse)
  public createNegativeKeywords(params: CreateSBNegativeKeywordParams[]) {
    return this.client.post<SBNegativeKeywordResponse[]>(this.resource, params)
  }

  @Decode(SBNegativeKeyword)
  public getNegativeKeyword(keywordId: KeywordId) {
    return this.client.get<SBNegativeKeyword>(`${this.resource}/${keywordId}`)
  }

  @Decode(SBNegativeKeywordResponse)
  public archiveNegativeKeyword(keywordId: KeywordId) {
    return this.client.delete<SBNegativeKeywordResponse>(`${this.resource}/${keywordId}`)
  }
}
