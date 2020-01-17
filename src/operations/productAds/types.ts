import * as t from 'io-ts'
import { CampaignId } from '../campaigns/types'
import { AdGroupId, AdGroupIds } from '../adGroups/types'
import { createEnumType, ListPagination } from '../commons/types'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'

export const AdId = t.number
export type AdId = t.TypeOf<typeof AdId>

export enum ProductAdStateEnum {
  ENABLED = 'enabled',
  PAUSED = 'paused',
  ARCHIVED = 'archived',
}
export const ProductAdStateType = createEnumType<ProductAdStateEnum>(ProductAdStateEnum)

export enum ProductAdServingStatusEnum {
  AD_ARCHIVED = 'AD_ARCHIVED',
  AD_PAUSED = 'AD_PAUSED',
  AD_STATUS_LIVE = 'AD_STATUS_LIVE',
  AD_POLICING_SUSPENDED = 'AD_POLICING_SUSPENDED',
  CAMPAIGN_OUT_OF_BUDGET = 'CAMPAIGN_OUT_OF_BUDGET',
  AD_GROUP_PAUSED = 'AD_GROUP_PAUSED',
  AD_GROUP_ARCHIVED = 'AD_GROUP_ARCHIVED',
  CAMPAIGN_PAUSED = 'CAMPAIGN_PAUSED',
  CAMPAIGN_ARCHIVED = 'CAMPAIGN_ARCHIVED',
  ACCOUNT_OUT_OF_BUDGET = 'ACCOUNT_OUT_OF_BUDGET',
  MISSING_DECORATION = 'MISSING_DECORATION',
}
export const ProductAdServingStatusType = createEnumType<ProductAdServingStatusEnum>(
  ProductAdServingStatusEnum,
)

export const ProductAd = t.strict({
  /**
   * The ID of the product ad
   */
  adId: AdId,

  /**
   * The ID of the campaign to which this product ad belongs
   */
  campaignId: CampaignId,

  /**
   * The ID of the ad group to which this product ad belongs
   */
  adGroupId: AdGroupId,

  /**
   * The SKU for the listed product to be advertised.
   * Either this or the asin must be present. Used by sellers.
   */
  sku: t.string,

  /**
   * The ASIN for the listed product to be advertised.
   * Either this or the sku must be present. Used by vendors.
   */
  asin: t.string,

  /**
   * Advertiser-specified state of the product ad.
   * Value of state for asin can only be enabled or paused, archived state not available.
   */
  state: ProductAdStateType,
})
export type ProductAd = t.TypeOf<typeof ProductAd>

export const ProductAdExtended = t.intersection([
  ProductAd,
  t.strict({
    /**
     * The date the ad group was created as epoch time in milliseconds.
     */
    creationDate: DateFromNumber,

    /**
     * The date the ad group was last updated as epoch time in milliseconds.
     */
    lastUpdatedDate: DateFromNumber,

    /**
     * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
     */
    servingStatus: ProductAdServingStatusType,
  }),
])
export type ProductAdExtended = t.TypeOf<typeof ProductAdExtended>

export const AdResponse = t.partial({
  /**
   * The ID of the ad that was created/updated, if successful
   */
  adId: AdId,

  /**
   * An enumerated success or error code for machine use.
   */
  code: t.string,

  /**
   * A human-readable description of the error, if unsuccessful
   */
  details: t.string,
})
export type AdResponse = t.TypeOf<typeof AdResponse>

const CreateProductAdParamsBase = t.strict({
  campaignId: CampaignId,
  adGroupId: AdGroupId,
  state: ProductAdServingStatusType,
})

const CreateProductAdParamsSeller = t.intersection([
  CreateProductAdParamsBase,
  t.strict({
    SKU: t.string,
  }),
])
type CreateProductAdParamsSeller = t.TypeOf<typeof CreateProductAdParamsSeller>

const CreateProductAdParamsVendor = t.intersection([
  CreateProductAdParamsBase,
  t.strict({
    ASIN: t.string,
  }),
])
type CreateProductAdParamsVendor = t.TypeOf<typeof CreateProductAdParamsVendor>

export type CreateProductAdParams = CreateProductAdParamsVendor | CreateProductAdParamsSeller

export const UpdateProductAdParams = t.strict({
  adId: AdId,
  state: ProductAdStateType,
})
export type UpdateProductAdParams = t.TypeOf<typeof UpdateProductAdParams>

export const ListProductAdsParams = t.intersection([
  ListPagination,
  t.partial({
    /**
     * Optional. Restricts results to ads within campaigns specified in comma-separated list.
     */
    campaignIdFilter: t.array(CampaignId),

    /**
     * Optional. Restricts results to ads within ad groups specified in comma-separated list.
     */
    adGroupIdFilter: AdGroupIds,

    /**
     * Optional. Restricts results to ads with state within the specified comma-separated list.
     * Must be one of: enabled, paused, archived. Default behavior is to include all.
     */
    stateFilter: ProductAdStateType,
  }),
])
export type ListProductAdsParams = t.TypeOf<typeof ListProductAdsParams>
