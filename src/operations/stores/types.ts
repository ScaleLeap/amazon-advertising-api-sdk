import * as t from 'io-ts'
import { createEnumType } from '../commons/types'

export const BrandEntityId = t.number
export type BrandEntityId = t.TypeOf<typeof BrandEntityId>

export enum MediaTypeEnum {
  BRAND_LOGO = 'brandLogo',
  IMAGE = 'image',
  VIDEO = 'video',
  BACKGROUND_VIDEO = 'backgroundVideo',
}
export const MediaType = createEnumType<MediaTypeEnum>(MediaTypeEnum)

export const AssetId = t.string
export type AssetId = t.TypeOf<typeof AssetId>

export const ListStoresAssetsParams = t.intersection([
  t.strict({
    /**
     * Specifies the media types used to filter the returned array.
     * Currently, only the brandLogo type is supported.
     * If not specified, all media types are returned.
     */
    mediaType: MediaType,
  }),

  t.partial({
    /**
     * For sellers, the Brand entity identifier of the Brand for which assets are returned.
     * This identifier is retrieved using the getBrands operation.
     * For vendors, this field is optional.
     * If a vendor does not specify this field, all assets associated with the vendor are returned.
     * For more information about the difference between a seller and a vendor, see the Amazon Advertising FAQ.
     */
    brandEntityId: BrandEntityId,
  }),
])
export type ListStoresAssetsParams = t.TypeOf<typeof ListStoresAssetsParams>

export const MediaAsset = t.strict({
  /**
   * The identifier of an asset associated with a store.
   */
  assetID: AssetId,

  /**
   * The address where the asset is stored.
   */
  url: t.string,

  /**
   * The supported media types.
   */
  mediaType: MediaType,

  /**
   * The name of the asset.
   */
  name: t.string,
})
