export enum HeadlineSearchReportMetricsEnum {
  /**
   * Advertiser created campaign name
   */
  CAMPAIGN_NAME = 'campaignName',

  /**
   * Unique campaign ID
   */
  CAMPAIGN_ID = 'campaignId',

  /**
   * Current status of the campaign
   */
  CAMPAIGN_STATUS = 'campaignStatus',

  /**
   * The campaign budget
   */
  CAMPAIGN_BUDGET = 'campaignBudget',

  /**
   * One of: daily or lifetime
   */
  CAMPAIGN_BUDGET_TYPE = 'campaignBudgetType',

  /**
   * Unique AdGroup name
   */
  AD_GROUP_NAME = 'adGroupName',

  /**
   * Unique AdGroup ID
   */
  AD_GROUP_ID = 'adGroupId',

  /**
   * Keyword or phrase used in bid
   */
  KEYWORD_TEXT = 'keywordText',

  /**
   * User-set bid value for keyword.
   */
  KEYWORD_BID = 'keywordBid',

  /**
   * Keyword state.
   */
  KEYWORD_STATUS = 'keywordStatus',

  /**
   * The product target identifier
   */
  TARGET_ID = 'targetId',

  /**
   * The product targeting expression. Not available for search term report.
   */
  TARGETING_EXPRESSION = 'targetingExpression',

  /**
   * The product targeting text. Not available for search term report.
   */
  TARGETING_TEXT = 'targetingText',

  /**
   * The product targeting type. One of: asinCategorySameAs, asinBrandSameAs, asinPriceLessThan, asinPriceBetween, asinPriceGreaterThan, asinReviewRatingLessThan, asinReviewRatingBetween, asinReviewRatingGreaterThan, asinSameAs. Not available for search term report.
   */
  TARGETING_TYPE = 'targetingType',

  /**
   * One of: broad, phrase, or exact
   */
  MATCH_TYPE = 'matchType',

  /**
   * Total ad impressions.
   */
  IMPRESSIONS = 'impressions',

  /**
   * Total ad clicks.
   */
  CLICKS = 'clicks',

  /**
   * Total cost of all clicks. Can be divided by clicks to obtain average CPC.
   */
  COST = 'cost',

  /**
   * The number of detail page view conversions attributed to ad click-throughs within 14 days. Not available for search term report.
   */
  ATTRIBUTED_DETAIL_PAGE_VIEWS_CLICKS14D = 'attributedDetailPageViewsClicks14d',

  /**
   * Number of attributed sales occurring within 14 days of click on an ad.
   */
  ATTRIBUTED_SALES14D = 'attributedSales14d',

  /**
   * Aggregate value of attributed sales occurring within 14 days of click on ad where the purchased SKU was the same as the one advertised. Not available for search term report.
   */
  ATTRIBUTED_SALES14D_SAME_SKU = 'attributedSales14dSameSKU',

  /**
   * Number of attributed conversion events occurring within 14 days of click on ad.
   */
  ATTRIBUTED_CONVERSIONS14D = 'attributedConversions14d',

  /**
   * Number of attributed conversion events occurring within 14 days of click on ad where the purchased SKU was the same as the one advertised. Not available for search term report.
   */
  ATTRIBUTED_CONVERSIONS14D_SAME_SKU = 'attributedConversions14dSameSKU',

  /**
   * The number of first-time orders for products within the brand over a one-year lookback window. Not available for search term report.
   */
  ATTRIBUTED_ORDERS_NEW_TO_BRAND14D = 'attributedOrdersNewToBrand14d',

  /**
   * The percentage of total orders that are new-to-brand orders. Not available for search term report.
   */
  ATTRIBUTED_ORDERS_NEW_TO_BRAND_PERCENTAGE14D = 'attributedOrdersNewToBrandPercentage14d',

  /**
   * The number of new-to-brand orders relative to the number of clicks. New-to-brand order rate = new-to-brand orders / clicks. Not available for search term report.
   */
  ATTRIBUTED_ORDER_RATE_NEW_TO_BRAND14D = 'attributedOrderRateNewToBrand14d',

  /**
   * The total sales of new-to-brand orders. Not available for search term report.
   */
  ATTRIBUTED_SALES_NEW_TO_BRAND14D = 'attributedSalesNewToBrand14d',

  /**
   * The percentage of total sales of new-to-brand purchases. Not available for search term report.
   */
  ATTRIBUTED_SALES_NEW_TO_BRAND_PERCENTAGE14D = 'attributedSalesNewToBrandPercentage14d',

  /**
   * The number of units from first-time orders for products within the brand over a one-year lookback window. Not available for search term report.
   */
  ATTRIBUTED_UNITS_ORDERED_NEW_TO_BRAND14D = 'attributedUnitsOrderedNewToBrand14d',

  /**
   * The percentage of total units that are units from new-to-brand orders. Not available for search term report.
   */
  ATTRIBUTED_UNITS_ORDERED_NEW_TO_BRAND_PERCENTAGE14D = 'attributedUnitsOrderedNewToBrandPercentage14d',

  /**
   * Number of attributed units sold occurring within 14 days of click on an ad. Not available for search term report.
   */
  UNITS_SOLD14D = 'unitsSold14d',

  /**
   * Number of attributed detail page views occurring within 14 days of click on an ad. Not available for search term report.
   */
  DPV14D = 'dpv14d',

  /**
   * A user’s search term on Amazon. Only available for keyword reports with query segment defined. Note that you do not need to define this in your metric list. This will be added automatically if you have the query segment defined.
   */
  QUERY = 'query',
}
