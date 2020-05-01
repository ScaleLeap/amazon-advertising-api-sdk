import * as t from 'io-ts'
import { CampaignId } from '../campaigns/types'
import { AdGroupId, AdGroupIds } from '../ad-groups/types'
import { ListPagination } from '../commons/types'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'

export const AdId = t.number
export type AdId = t.TypeOf<typeof AdId>

export const AdIds = t.array(AdId)
export type AdIds = t.TypeOf<typeof AdIds>

export const ProductAdState = t.union([
  t.literal('enabled'),
  t.literal('paused'),
  t.literal('archived'),
])
export type ProductAdState = t.TypeOf<typeof ProductAdState>

export const ProductAdServingStatus = t.union([
  t.literal('AD_ARCHIVED'),
  t.literal('AD_PAUSED'),
  t.literal('AD_STATUS_LIVE'),
  t.literal('AD_POLICING_SUSPENDED'),
  t.literal('CAMPAIGN_OUT_OF_BUDGET'),
  t.literal('AD_GROUP_PAUSED'),
  t.literal('AD_GROUP_ARCHIVED'),
  t.literal('CAMPAIGN_PAUSED'),
  t.literal('CAMPAIGN_ARCHIVED'),
  t.literal('ACCOUNT_OUT_OF_BUDGET'),
  t.literal('MISSING_DECORATION'),
  t.literal('PORTFOLIO_ENDED'),
])
export type ProductAdServingStatus = t.TypeOf<typeof ProductAdServingStatus>

const ProductAdBase = t.strict({
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
   * Advertiser-specified state of the product ad.
   * Value of state for asin can only be enabled or paused, archived state not available.
   */
  state: ProductAdState,
})

const ProductAdSeller = t.intersection([
  ProductAdBase,
  t.strict({
    /**
     * The SKU for the listed product to be advertised.
     * Either this or the asin must be present. Used by sellers.
     */
    sku: t.string,
  }),
])

const ProductAdVendor = t.intersection([
  ProductAdBase,
  t.strict({
    /**
     * The ASIN for the listed product to be advertised.
     * Either this or the sku must be present. Used by vendors.
     */
    asin: t.string,
  }),
])

export const ProductAd = t.union([ProductAdSeller, ProductAdVendor])
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
    servingStatus: ProductAdServingStatus,
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
  state: ProductAdState,
})

export const CreateProductAdParamsSeller = t.intersection([
  CreateProductAdParamsBase,
  t.strict({
    sku: t.string,
  }),
])
export type CreateProductAdParamsSeller = t.TypeOf<typeof CreateProductAdParamsSeller>

export const CreateProductAdParamsVendor = t.intersection([
  CreateProductAdParamsBase,
  t.strict({
    asin: t.string,
  }),
])
export type CreateProductAdParamsVendor = t.TypeOf<typeof CreateProductAdParamsVendor>

export type CreateProductAdParams = CreateProductAdParamsVendor | CreateProductAdParamsSeller

export const UpdateProductAdParams = t.strict({
  adId: AdId,
  state: ProductAdState,
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
     * Optional. Restricts results to ads with the specified product ad Id specified in comma-separated list.
     */
    adIdFilter: AdIds,

    /**
     * Optional. Restricts results to ads with state within the specified comma-separated list.
     * Must be one of: enabled, paused, archived. Default behavior is to include all.
     */
    stateFilter: ProductAdState,
  }),
])
export type ListProductAdsParams = t.TypeOf<typeof ListProductAdsParams>
