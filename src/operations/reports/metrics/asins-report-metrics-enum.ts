export const enum AsinsReportMetricsEnum {
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
   * Unique numerical ID of the keyword
   */
  KEYWORD_ID = 'keywordId',

  /**
   * Keyword or phrase used in bid
   */
  KEYWORD_TEXT = 'keywordText',

  /**
   * Unique ASIN advertised
   */
  ASIN = 'asin',

  /**
   * A non-dimensional metric for ASINs other than the one advertised
   */
  OTHER_ASIN = 'otherAsin',

  /**
   * Unique SKU advertised. Not available for vendors.
   */
  SKU = 'sku',

  /**
   * A dimensional metric
   */
  CURRENCY = 'currency',

  /**
   * One of: broad, phrase, or exact
   */
  MATCH_TYPE = 'matchType',

  /**
   * Number of ASIN (SKU) units sold. 1 day.
   */
  ATTRIBUTED_UNITS_ORDERED1D = 'attributedUnitsOrdered1d',

  /**
   * Number of ASIN (SKU) units sold. 7 days.
   */
  ATTRIBUTED_UNITS_ORDERED7D = 'attributedUnitsOrdered7d',

  /**
   * Number of ASIN (SKU) units sold. 14 days.
   */
  ATTRIBUTED_UNITS_ORDERED14D = 'attributedUnitsOrdered14d',

  /**
   * Number of ASIN (SKU) units sold. 30 days.
   */
  ATTRIBUTED_UNITS_ORDERED30D = 'attributedUnitsOrdered30d',

  /**
   * Number of other ASIN (SKU) units sold. 1 day.
   */
  ATTRIBUTED_UNITS_ORDERED1D_OTHER_SKU = 'attributedUnitsOrdered1dOtherSKU',

  /**
   * Number of other ASIN (SKU) units sold. 7 days.
   */
  ATTRIBUTED_UNITS_ORDERED7D_OTHER_SKU = 'attributedUnitsOrdered7dOtherSKU',

  /**
   * Number of other ASIN (SKU) units sold. 14 days.
   */
  ATTRIBUTED_UNITS_ORDERED14D_OTHER_SKU = 'attributedUnitsOrdered14dOtherSKU',

  /**
   * Number of other ASIN (SKU) units sold. 30 days.
   */
  ATTRIBUTED_UNITS_ORDERED30D_OTHER_SKU = 'attributedUnitsOrdered30dOtherSKU',

  /**
   * Sales for another ASIN (SKU). 1 day.
   */
  ATTRIBUTED_SALES1D_OTHER_SKU = 'attributedSales1dOtherSKU',

  /**
   * Sales for another ASIN (SKU). 7 days.
   */
  ATTRIBUTED_SALES7D_OTHER_SKU = 'attributedSales7dOtherSKU',

  /**
   * Sales for another ASIN (sku). 14 days.
   */
  ATTRIBUTED_SALES14D_OTHER_SKU = 'attributedSales14dOtherSKU',

  /**
   * Sales for another ASIN (sku). 30 days.
   */
  ATTRIBUTED_SALES30D_OTHER_SKU = 'attributedSales30dOtherSKU',
}
