import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  KeywordId,
  SponsoredBrandsNegativeKeywordResponse,
  UpdateSponsoredBrandsNegativeKeywordParams,
  CreateSponsoredBrandsNegativeKeywordParams,
  SponsoredBrandsNegativeKeyword,
} from './types'

export class SponsoredBrandsNegativeKeywordsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/negativeKeywords`

  @DecodeArray(SponsoredBrandsNegativeKeywordResponse)
  public updateNegativeKeywords(params: UpdateSponsoredBrandsNegativeKeywordParams[]) {
    return this.client.put<SponsoredBrandsNegativeKeywordResponse[]>(this.resource, params)
  }

  @DecodeArray(SponsoredBrandsNegativeKeywordResponse)
  public createNegativeKeywords(params: CreateSponsoredBrandsNegativeKeywordParams[]) {
    return this.client.post<SponsoredBrandsNegativeKeywordResponse[]>(this.resource, params)
  }

  @Decode(SponsoredBrandsNegativeKeyword)
  public getNegativeKeyword(keywordId: KeywordId) {
    return this.client.get<SponsoredBrandsNegativeKeyword>(`${this.resource}/${keywordId}`)
  }

  @Decode(SponsoredBrandsNegativeKeywordResponse)
  public archiveNegativeKeyword(keywordId: KeywordId) {
    return this.client.delete<SponsoredBrandsNegativeKeywordResponse>(
      `${this.resource}/${keywordId}`,
    )
  }
}
