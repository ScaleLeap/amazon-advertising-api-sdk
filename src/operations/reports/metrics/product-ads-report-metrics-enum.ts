export enum ProductAdsReportMetricsEnum {
  /**
   * Unique name of the campaign
   */
  CAMPAIGN_NAME = 'campaignName',

  /**
   * Unique numerical ID of the campaign
   */
  CAMPAIGN_ID = 'campaignId',

  /**
   * Unique name of the ad group
   */
  AD_GROUP_NAME = 'adGroupName',

  /**
   * Unique numerical ID of the ad group
   */
  AD_GROUP_ID = 'adGroupId',

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
   * A dimensional metric
   */
  CURRENCY = 'currency',

  /**
   * The ASIN that is being advertised.
   */
  ASIN = 'asin',

  /**
   * The SKU that is being advertised. Not available for vendors.
   */
  SKU = 'sku',

  /**
   * Number of attributed conversion events occurring within 1 day of click on ad.
   */
  ATTRIBUTED_CONVERSIONS1D = 'attributedConversions1d',

  /**
   * Number of attributed conversion events occurring within 7 days of click on ad.
   */
  ATTRIBUTED_CONVERSIONS7D = 'attributedConversions7d',

  /**
   * Number of attributed conversion events occurring within 14 days of click on ad.
   */
  ATTRIBUTED_CONVERSIONS14D = 'attributedConversions14d',

  /**
   * Number of attributed conversion events occurring within 30 days of click on ad.
   */
  ATTRIBUTED_CONVERSIONS30D = 'attributedConversions30d',

  /**
   * Number of attributed conversion events occurring within 1 day of click on ad where the purchased SKU was the same as the one advertised.
   */
  ATTRIBUTED_CONVERSIONS1D_SAME_SKU = 'attributedConversions1dSameSKU',

  /**
   * Number of attributed conversion events occurring within 7 days of click on ad where the purchased SKU was the same as the one advertised.
   */
  ATTRIBUTED_CONVERSIONS7D_SAME_SKU = 'attributedConversions7dSameSKU',

  /**
   * Number of attributed conversion events occurring within 14 days of click on ad where the purchased SKU was the same as the one advertised.
   */
  ATTRIBUTED_CONVERSIONS14D_SAME_SKU = 'attributedConversions14dSameSKU',

  /**
   * Number of attributed conversion events occurring within 30 days of click on ad where the purchased SKU was the same as the one advertised.
   */
  ATTRIBUTED_CONVERSIONS30D_SAME_SKU = 'attributedConversions30dSameSKU',

  /**
   * Number of attributed units ordered within 1 day of click on ad.
   */
  ATTRIBUTED_UNITS_ORDERED1D = 'attributedUnitsOrdered1d',

  /**
   * Number of attributed units ordered within 7 days of click on ad.
   */
  ATTRIBUTED_UNITS_ORDERED7D = 'attributedUnitsOrdered7d',

  /**
   * Number of attributed units ordered within 14 days of click on ad.
   */
  ATTRIBUTED_UNITS_ORDERED14D = 'attributedUnitsOrdered14d',

  /**
   * Number of attributed units ordered within 30 days of click on ad.
   */
  ATTRIBUTED_UNITS_ORDERED30D = 'attributedUnitsOrdered30d',

  /**
   * Number of attributed sales occurring within 1 day of click on ad.
   */
  ATTRIBUTED_SALES1D = 'attributedSales1d',

  /**
   * Number of attributed sales occurring within 7 days of click on ad.
   */
  ATTRIBUTED_SALES7D = 'attributedSales7d',

  /**
   * Number of attributed sales occurring within 14 days of click on ad.
   */
  ATTRIBUTED_SALES14D = 'attributedSales14d',

  /**
   * Number of attributed sales occurring within 30 days of click on ad.
   */
  ATTRIBUTED_SALES30D = 'attributedSales30d',

  /**
   * Aggregate value of attributed sales occurring within 1 day of click on ad where the purchased SKU was the same as the one advertised.
   */
  ATTRIBUTED_SALES1D_SAME_SKU = 'attributedSales1dSameSKU',

  /**
   * Aggregate value of attributed sales occurring within 7 days of click on ad where the purchased SKU was the same as the one advertised.
   */
  ATTRIBUTED_SALES7D_SAME_SKU = 'attributedSales7dSameSKU',

  /**
   * Aggregate value of attributed sales occurring within 14 days of click on ad where the purchased SKU was the same as the one advertised.
   */
  ATTRIBUTED_SALES14D_SAME_SKU = 'attributedSales14dSameSKU',

  /**
   * Aggregate value of attributed sales occurring within 30 days of click on ad where the purchased SKU was the same as the one advertised.
   */
  ATTRIBUTED_SALES30D_SAME_SKU = 'attributedSales30dSameSKU',

  /**
   * Number of attributed units ordered within 1 day of click on ad where the purchased SKU was the same as the one advertised.
   */
  ATTRIBUTED_UNITS_ORDERED1D_SAME_SKU = 'attributedUnitsOrdered1dSameSKU',

  /**
   * Number of attributed units ordered within 7 days of click on ad where the purchased SKU was the same as the one advertised.
   */
  ATTRIBUTED_UNITS_ORDERED7D_SAME_SKU = 'attributedUnitsOrdered7dSameSKU',

  /**
   * Number of attributed units ordered within 14 days of click on ad where the purchased SKU was the same as the one advertised.
   */
  ATTRIBUTED_UNITS_ORDERED14D_SAME_SKU = 'attributedUnitsOrdered14dSameSKU',

  /**
   * Number of attributed units ordered within 30 days of click on ad where the purchased SKU was the same as the one advertised.
   */
  ATTRIBUTED_UNITS_ORDERED30D_SAME_SKU = 'attributedUnitsOrdered30dSameSKU',
}
