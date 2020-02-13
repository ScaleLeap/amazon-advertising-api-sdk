import * as t from 'io-ts'
import { createEnumType } from '../commons/types'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'

export const SnapshotId = t.string
export type SnapshotId = t.TypeOf<typeof SnapshotId>

export enum RecordTypeEnum {
  CAMPAIGNS = 'campaigns',
  AD_GROUPS = 'adGroups',
  PRODUCT_ADS = 'productAds',
  KEYWORDS = 'keywords',
  NEGATIVE_KEYWORDS = 'negativeKeywords',
  CAMPAIGN_NEGATIVE_KEYWORDS = 'campaignNegativeKeywords',
  TARGETS = 'targets',
  NEGATIVE_TARGETS = 'negativeTargets',
}
export const RecordType = createEnumType<RecordTypeEnum>(RecordTypeEnum)
export type RecordType = t.TypeOf<typeof RecordType>

export enum SnapshotStatusEnum {
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}
export const SnapshotStatusType = createEnumType<SnapshotStatusEnum>(SnapshotStatusEnum)

export enum SnapshotStateEnum {
  ENABLED = 'enabled',
  PAUSED = 'paused',
  ARCHIVED = 'archived',
}
export const SnapshotStateType = createEnumType<SnapshotStateEnum>(SnapshotStateEnum)

export const SnapshotResponse = t.intersection([
  t.strict({
    /**
     * The ID of the snapshot that was requested.
     */
    snapshotId: SnapshotId,

    /**
     * The record type of the report.
     */
    recordType: RecordType,

    /**
     * The status of the generation of the snapshot.
     */
    status: SnapshotStatusType,

    /**
     * Description of the status.
     */
    statusDetails: t.string,
  }),
  t.partial({
    /**
     * The URI for the snapshot. It's only available if status is SUCCESS.
     */
    location: t.string,

    /**
     * The size of the snapshot file in bytes. It's only available if status is SUCCESS.
     */
    fileSize: SnapshotId,

    /**
     * The epoch time for expiration of the snapshot file. It's only available if status is SUCCESS.
     */
    expiration: DateFromNumber,
  }),
])
export type SnapshotResponse = t.TypeOf<typeof SnapshotResponse>

export const RequestSnapshotParams = t.partial({
  /**
   * Restricts results to entities with state within the specified comma-separated list.
   * Must be one of: `enabled`, `paused`, `archived`.
   * Default behavior is to include enabled and paused.
   */
  stateFilter: SnapshotStateType,
})
export type RequestSnapshotParams = t.TypeOf<typeof RequestSnapshotParams>
