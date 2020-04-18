/**
 * Copyright (C) 2019, Scale Leap
 */

import * as t from 'io-ts'

export const CampaignBiddingStrategy = t.union([
  /**
   * Lowers your bids in real time when your ad may be less likely to convert to a sale.
   * Campaigns created before the release of the bidding controls feature used this setting by default.
   */
  t.literal('legacyForSales'),

  /**
   * Increases or decreases your bids in real time by a maximum of 100%.
   * With this setting bids increase when your ad is more likely to convert to a sale,
   * and bids decrease when less likely to convert to a sale.
   */
  t.literal('autoForSales'),

  /**
   * Uses your exact bid and any placement adjustments you set, and is not subject to dynamic
   * bidding.
   */
  t.literal('manual'),
])
export type CampaignBiddingStrategy = t.TypeOf<typeof CampaignBiddingStrategy>
