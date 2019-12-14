/**
 * Copyright (C) 2019, Scale Leap
 */

import * as t from 'io-ts'
import { createEnumType } from '../commons/types'

export enum CampaignBiddingStrategyEnum {
  /**
   * Lowers your bids in real time when your ad may be less likely to convert to a sale.
   * Campaigns created before the release of the bidding controls feature used this setting by default.
   */
  LEGACY_FOR_SALES = 'legacyForSales',

  /**
   * Increases or decreases your bids in real time by a maximum of 100%.
   * With this setting bids increase when your ad is more likely to convert to a sale,
   * and bids decrease when less likely to convert to a sale.
   */
  AUTO_FOR_SALES = 'autoForSales',

  /**
   * Uses your exact bid and any placement adjustments you set, and is not subject to dynamic
   * bidding.
   */
  MANUAL = 'manual',
}
export const CampaignBiddingStrategyType = createEnumType<CampaignBiddingStrategyEnum>(
  CampaignBiddingStrategyEnum,
)
export type CampaignBiddingStrategyType = t.TypeOf<typeof CampaignBiddingStrategyType>
