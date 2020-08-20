import { Operation } from '../operation'
import { DecodeArray, Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  AdResponse,
  CreateProductAdsParams,
  ProductAd,
  AdId,
  ProductAdExtended,
  UpdateProductAdsParams,
  ListProductAdsParams,
} from './types'

export class SponsoredDisplayProductAdsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredDisplay}/productAds`

  /**
   * Gets a requested product ad.
   * Note that the ProductAd object is designed for performance, and includes a small set of commonly used fields to reduce size.
   * If the extended set of fields is required, use a product ad operations that returns the ProductAdResponseEx object.
   *
   * @param adId -
   * @returns
   */
  @Decode(ProductAd)
  public getProductAd(adId: AdId) {
    return this.client.get<ProductAd>(`${this.resource}/${adId}`)
  }

  /**
   * Gets a list of product ads with extended fields.
   * Gets an array of ProductAdExtended objects for a set of requested ad groups.
   * The ProductAdExtended object includes the extended set of available fields.
   *
   * @param adId -
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
   * @param params -
   * @returns
   */
  @DecodeArray(AdResponse)
  public createProductAds(params: CreateProductAdsParams[]) {
    return this.client.post<AdResponse[]>(this.resource, params)
  }

  /**
   * Updates one or more product ads.
   * Product ads are identified using their adId.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(AdResponse)
  public updateProductAds(params: UpdateProductAdsParams[]) {
    return this.client.put<AdResponse[]>(this.resource, params)
  }

  /**
   * Sets the product ad status to archived.
   * This operation is equivalent to an update operation that sets the status field to 'archived'.
   * Note that setting the status field to 'archived' is permanent and can't be undone.
   * See Developer Notes for more information.
   *
   * @param adId -
   * @returns
   */
  @Decode(AdResponse)
  public archiveProductAd(adId: AdId) {
    return this.client.delete<AdResponse>(`${this.resource}/${adId}`)
  }

  /**
   * Gets a list of product ads.
   * Note that the ProductAd object is designed for performance, and includes a small set of commonly used fields to reduce size.
   * If the extended set of fields is required, use a product ad operation that returns the ProductAdExtended object.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(ProductAd)
  public listProductAds(params?: ListProductAdsParams) {
    return this.client.get<ProductAd[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Gets a list of product ads with extended fields.
   * The ProductAdExtended object includes the extended set of available fields.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(ProductAdExtended)
  public listProductAdsExtended(params?: ListProductAdsParams) {
    return this.client.get<ProductAdExtended[]>(this.paramsFilterTransformer('/extended', params))
  }
}
