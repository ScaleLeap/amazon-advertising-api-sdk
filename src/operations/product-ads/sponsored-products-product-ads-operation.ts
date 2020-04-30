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

  /**
   * Retrieves a product ad by ID.
   * Note that this call returns the minimal set of product ad fields, but is more efficient than getProductAdEx.
   *
   * @param {AdId} adId
   * @returns
   */
  @Decode(ProductAd)
  public getProductAd(adId: AdId) {
    return this.client.get<ProductAd>(`${this.resource}/${adId}`)
  }

  /**
   * Retrieves a product ad and its extended fields by ID.
   * Note that this call returns the complete set of product ad fields (including serving status and other read-only fields), but is less efficient than getProductAd.
   *
   * @param {AdId} adId
   * @returns
   */
  @Decode(ProductAdExtended)
  public getProductAdExtended(adId: AdId) {
    return this.client.get<ProductAdExtended>(`${this.resource}/extended/${adId}`)
  }

  /**
   * Creates one or more product ads.
   * Successfully created product ads will be assigned a unique adId.
   *
   * @param {CreateProductAdParams[]} params
   * @returns
   */
  @DecodeArray(AdResponse)
  public createProductAds(params: CreateProductAdParams[]) {
    return this.client.post<AdResponse[]>(this.resource, params)
  }

  /**
   * Updates one or more product ads.
   * Product ads are identified using their adId.
   *
   * @param {UpdateProductAdParams[]} params
   * @returns
   */
  @DecodeArray(AdResponse)
  public updateProductAds(params: UpdateProductAdParams[]) {
    return this.client.put<AdResponse[]>(this.resource, params)
  }

  /**
   * Sets the product ad status to archived.
   * This same operation can be performed via an update, but is included for completeness.
   * Archived entities cannot be made active again. See developer notes for more information.
   *
   * @param {AdId} adId
   * @returns
   */
  @Decode(AdResponse)
  public archiveProductAd(adId: AdId) {
    return this.client.delete<AdResponse>(`${this.resource}/${adId}`)
  }

  /**
   * Retrieves a list of product ads satisfying optional criteria.
   *
   * @param {ListProductAdsParams} [params]
   * @returns
   */
  @DecodeArray(ProductAd)
  public listProductAds(params?: ListProductAdsParams) {
    return this.client.get<ProductAd[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Retrieves a list of product ads with extended fields satisfying optional criteria.
   *
   * @param {ListProductAdsParams} [params]
   * @returns
   */
  @DecodeArray(ProductAdExtended)
  public listProductAdsExtended(params?: ListProductAdsParams) {
    return this.client.get<ProductAdExtended[]>(this.paramsFilterTransformer('/extended', params))
  }
}
