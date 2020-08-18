import { Operation } from '../operation'
import { DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import { AdResponse, CreateProductAdsParams } from './types'

export class SponsoredDisplayProductAdsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredDisplay}/productAds`

  /**
   * Creates one or more product ads.
   * Successfully created product ads will be assigned a unique adId.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(AdResponse)
  public createProductAds(params: CreateProductAdsParams[]) {
    return this.client.post<AdResponse[]>(this.resource, params)
  }
}
