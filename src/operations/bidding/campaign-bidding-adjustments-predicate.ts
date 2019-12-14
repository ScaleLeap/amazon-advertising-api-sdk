/**
 * Copyright (C) 2019, Scale Leap
 */

import * as t from 'io-ts'
import { createEnumType } from '../commons/types'

/**
 * You can enable controls to adjust your bid based on the placement location.
 * Specify a location where you want to use bid controls.
 * The percentage value set is the percentage of the original bid for which you want to have your
 * bid adjustment increased. For example, a 50% adjustment on a $1.00 bid would increase the bid
 * to $1.50 for the opportunity to win a specified placement.
 */
export enum CampaignBiddingAdjustmentsPredicateEnum {
  /**
   * Top of search (first page)
   */
  PLACEMENT_TOP = 'placementTop',

  /**
   * Product pages
   */
  PLACEMENT_PRODUCT_PAGE = 'placementProductPage',
}

export const CampaignBiddingAdjustmentsPredicateType = createEnumType<
  CampaignBiddingAdjustmentsPredicateEnum
>(CampaignBiddingAdjustmentsPredicateEnum)
export type CampaignBiddingAdjustmentsPredicateType = t.TypeOf<
  typeof CampaignBiddingAdjustmentsPredicateType
>

export const CampaignBiddingAdjustments = t.array(
  t.intersection([
    t.type({
      predicate: CampaignBiddingAdjustmentsPredicateType,
    }),
    t.partial({
      percentage: t.number,
    }),
  ]),
)
export type CampaignBiddingAdjustments = t.TypeOf<typeof CampaignBiddingAdjustments>
