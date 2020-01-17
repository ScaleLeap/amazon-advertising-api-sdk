import { Operation } from '../operation'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  AdId,
  ProductAd,
  ProductAdExtended,
  AdResponse,
  CreateProductAdParams,
  UpdateProductAdParams,
  ListProductAdsParams,
} from './types'

export class SponsoredProductsProductAdsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/productAds`

  @Decode(ProductAd)
  public getProductAd(adId: AdId) {
    return this.client.get<ProductAd>(`${this.resource}/${adId}`)
  }

  @Decode(ProductAdExtended)
  public getProductAdExtended(adId: AdId) {
    return this.client.get<ProductAdExtended>(`${this.resource}/extended/${adId}`)
  }

  @DecodeArray(AdResponse)
  public createProductAds(params: CreateProductAdParams[]) {
    return this.client.post<AdResponse[]>(this.resource, params)
  }

  @DecodeArray(AdResponse)
  public updateProductAds(params: UpdateProductAdParams[]) {
    return this.client.put<AdResponse[]>(this.resource, params)
  }

  @Decode(AdResponse)
  public archiveProductAd(adId: AdId) {
    return this.client.delete<AdResponse>(`${this.resource}/${adId}`)
  }

  @DecodeArray(ProductAd)
  public listProductAds(params?: ListProductAdsParams) {
    return this.client.get<ProductAd[]>(this.paramsFilterTransformer('', params))
  }

  @DecodeArray(ProductAdExtended)
  public listProductAdsExtended(params?: ListProductAdsParams) {
    return this.client.get<ProductAdExtended[]>(this.paramsFilterTransformer('/extended', params))
  }
}
