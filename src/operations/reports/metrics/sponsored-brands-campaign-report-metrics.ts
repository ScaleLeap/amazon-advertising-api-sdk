import * as t from 'io-ts'

export const SponsoredBrandsCampaignReportMetrics = t.union([
  /**
   * Advertiser created campaign name
   */
  t.literal('campaignName'),

  /**
   * Unique campaign ID
   */
  t.literal('campaignId'),

  /**
   * Current status of the campaign
   */
  t.literal('campaignStatus'),

  /**
   * The campaign budget
   */
  t.literal('campaignBudget'),

  /**
   * One of: daily or lifetime
   */
  t.literal('campaignBudgetType'),

  /**
   * Unique AdGroup name
   */
  t.literal('adGroupName'),

  /**
   * Unique AdGroup ID
   */
  t.literal('adGroupId'),

  /**
   * Keyword or phrase used in bid
   */
  t.literal('keywordText'),

  /**
   * User-set bid value for keyword.
   */
  t.literal('keywordBid'),

  /**
   * Keyword state.
   */
  t.literal('keywordStatus'),

  /**
   * The product target identifier
   */
  t.literal('targetId'),

  /**
   * The product targeting expression. Not available for search term report.
   */
  t.literal('targetingExpression'),

  /**
   * The product targeting text. Not available for search term report.
   */
  t.literal('targetingText'),

  /**
   * The product targeting type. One of: asinCategorySameAs, asinBrandSameAs, asinPriceLessThan, asinPriceBetween, asinPriceGreaterThan, asinReviewRatingLessThan, asinReviewRatingBetween, asinReviewRatingGreaterThan, asinSameAs. Not available for search term report.
   */
  t.literal('targetingType'),

  /**
   * One of: broad, phrase, or exact
   */
  t.literal('matchType'),

  /**
   * Total ad impressions.
   */
  t.literal('impressions'),

  /**
   * Total ad clicks.
   */
  t.literal('clicks'),

  /**
   * Total cost of all clicks. Can be divided by clicks to obtain average CPC.
   */
  t.literal('cost'),

  /**
   * The number of detail page view conversions attributed to ad click-throughs within 14 days. Not available for search term report.
   */
  t.literal('attributedDetailPageViewsClicks14d'),

  /**
   * Number of attributed sales occurring within 14 days of click on an ad.
   */
  t.literal('attributedSales14d'),

  /**
   * Aggregate value of attributed sales occurring within 14 days of click on ad where the purchased SKU was the same as the one advertised. Not available for search term report.
   */
  t.literal('attributedSales14dSameSKU'),

  /**
   * Number of attributed conversion events occurring within 14 days of click on ad.
   */
  t.literal('attributedConversions14d'),

  /**
   * Number of attributed conversion events occurring within 14 days of click on ad where the purchased SKU was the same as the one advertised. Not available for search term report.
   */
  t.literal('attributedConversions14dSameSKU'),

  /**
   * The number of first-time orders for products within the brand over a one-year lookback window. Not available for search term report.
   */
  t.literal('attributedOrdersNewToBrand14d'),

  /**
   * The percentage of total orders that are new-to-brand orders. Not available for search term report.
   */
  t.literal('attributedOrdersNewToBrandPercentage14d'),

  /**
   * The number of new-to-brand orders relative to the number of clicks. New-to-brand order rate = new-to-brand orders / clicks. Not available for search term report.
   */
  t.literal('attributedOrderRateNewToBrand14d'),

  /**
   * The total sales of new-to-brand orders. Not available for search term report.
   */
  t.literal('attributedSalesNewToBrand14d'),

  /**
   * The percentage of total sales of new-to-brand purchases. Not available for search term report.
   */
  t.literal('attributedSalesNewToBrandPercentage14d'),

  /**
   * The number of units from first-time orders for products within the brand over a one-year lookback window. Not available for search term report.
   */
  t.literal('attributedUnitsOrderedNewToBrand14d'),

  /**
   * The percentage of total units that are units from new-to-brand orders. Not available for search term report.
   */
  t.literal('attributedUnitsOrderedNewToBrandPercentage14d'),

  /**
   * Number of attributed units sold occurring within 14 days of click on an ad. Not available for search term report.
   */
  t.literal('unitsSold14d'),

  /**
   * Number of attributed detail page views occurring within 14 days of click on an ad. Not available for search term report.
   */
  t.literal('dpv14d'),

  /**
   * A user’s search term on Amazon. Only available for keyword reports with query segment defined. 
   * Note that you do not need to define this in your metric list. This will be added automatically if you have the query segment defined.
   * TODO: Need check on Production API again. Sandbox API return an error:
   * UnprocessableEntityError: Unrecognized metric: query
   */
  t.literal('query'),
])
export type SponsoredBrandsCampaignReportMetrics = t.TypeOf<
  typeof SponsoredBrandsCampaignReportMetrics
>
