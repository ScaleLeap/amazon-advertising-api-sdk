import * as t from 'io-ts'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'
import { Campaign } from '../campaigns/types'
import { AdGroup } from '../ad-groups/types'
import { Keyword, NegativeKeyword, CampaignNegativeKeyword } from '../keywords/types'
import { ProductAd } from '../product-ads/types'
import { TargetingClause } from '../product-targeting/types'
import { NegativeTargetingClause } from '../negative-targeting/types'

export const SnapshotId = t.string
export type SnapshotId = t.TypeOf<typeof SnapshotId>

export const SponsoredProductsRecordType = t.union([
  t.literal('campaigns'),
  t.literal('adGroups'),
  t.literal('productAds'),
  t.literal('keywords'),
  t.literal('negativeKeywords'),
  t.literal('campaignNegativeKeywords'),
  t.literal('targets'),
  t.literal('negativeTargets'),
])
export type SponsoredProductsRecordType = t.TypeOf<typeof SponsoredProductsRecordType>

export const SponsoredBrandsRecordType = t.union([t.literal('campaigns'), t.literal('keywords')])
export type SponsoredBrandsRecordType = t.TypeOf<typeof SponsoredBrandsRecordType>

export const SponsoredDisplayRecordType = t.union([
  t.literal('campaigns'),
  t.literal('adGroups'),
  t.literal('productAds'),
  t.literal('keywords'),
  t.literal('negativeKeywords'),
  t.literal('campaignNegativeKeywords'),
  t.literal('targets'),
  t.literal('negativeTargets'),
])
export type SponsoredDisplayRecordType = t.TypeOf<typeof SponsoredDisplayRecordType>

export const RecordTypeResponse = t.union([
  t.literal('campaign'),
  t.literal('adGroup'),
  t.literal('productAd'),
  t.literal('keyword'),
  t.literal('negativeKeyword'),
  t.literal('campaignNegativeKeyword'),
  t.literal('target'),
  t.literal('negativeTarget'),
])
export type RecordTypeResponse = t.TypeOf<typeof RecordTypeResponse>

export const SnapshotState = t.union([
  t.literal('enabled'),
  t.literal('paused'),
  t.literal('archived'),
])
export type SnapshotState = t.TypeOf<typeof SnapshotState>

const BaseSnapshotResponse = t.strict({
  /**
   * The ID of the snapshot that was requested.
   */
  snapshotId: SnapshotId,
})

export const SuccessSnapshotResponse = t.intersection([
  BaseSnapshotResponse,
  t.strict({
    /**
     * The status of the generation of the snapshot.
     */
    status: t.literal('SUCCESS'),
  }),
  t.partial({
    /**
     * The record type of the report.
     */
    statusDetails: t.string,

    /**
     * The URI for the snapshot. It's only available if status is SUCCESS.
     */
    location: t.string,

    /**
     * The size of the snapshot file in bytes. It's only available if status is SUCCESS.
     */
    fileSize: t.number,

    /**
     * The epoch time for expiration of the snapshot file. It's only available if status is SUCCESS.
     */
    expiration: DateFromNumber,
  }),
])
export type SuccessSnapshotResponse = t.TypeOf<typeof SuccessSnapshotResponse>

export const InProgressSnapshotResponse = t.intersection([
  BaseSnapshotResponse,
  t.strict({
    /**
     * The status of the generation of the snapshot.
     */
    status: t.literal('IN_PROGRESS'),
  }),
  t.partial({
    /**
     * Description of the status.
     */
    statusDetails: t.string,

    /**
     * The record type of the report.
     * TODO: Need check again on Production API. Sandbox API returns singular. Not same in the docs.
     */
    recordType: RecordTypeResponse,
  }),
])
export type InProgressSnapshotResponse = t.TypeOf<typeof InProgressSnapshotResponse>

export const FailureSnapshotResponse = t.intersection([
  BaseSnapshotResponse,
  t.strict({
    /**
     * The status of the generation of the snapshot.
     */
    status: t.literal('FAILURE'),

    /**
     * Description of the status.
     */
    statusDetails: t.string,
  }),
])
export type FailureSnapshotResponse = t.TypeOf<typeof FailureSnapshotResponse>

export const SnapshotResponse = t.union([
  SuccessSnapshotResponse,
  InProgressSnapshotResponse,
  FailureSnapshotResponse,
])
export type SnapshotResponse =
  | SuccessSnapshotResponse
  | InProgressSnapshotResponse
  | FailureSnapshotResponse

export const RequestSnapshotParams = t.partial({
  /**
   * Restricts results to entities with state within the specified comma-separated list.
   * Must be one of: `enabled`, `paused`, `archived`.
   * Default behavior is to include enabled and paused.
   */
  stateFilter: SnapshotState,
})
export type RequestSnapshotParams = t.TypeOf<typeof RequestSnapshotParams>

export const SnapshotResultType = t.union([
  Campaign,
  AdGroup,
  Keyword,
  NegativeKeyword,
  CampaignNegativeKeyword,
  ProductAd,
  TargetingClause,
  NegativeTargetingClause,
])
export type SnapshotResultType = t.TypeOf<typeof SnapshotResultType>
