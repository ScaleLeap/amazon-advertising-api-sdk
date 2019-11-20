export enum CampaignReportMetricsEnum {
  /**
   * A dimensional metric.
   * See [Premium bid adjustment](https://advertising.amazon.com/API/docs/v2/guides/developer_notes#Premium-bid-adjustment)
   * in the developer notes.
   */
  BID_PLUS = 'bidPlus',

  /**
   * Unique name of the campaign
   */
  CAMPAIGN_NAME = 'campaignName',

  /**
   * Unique numerical ID of the campaign
   */
  CAMPAIGN_ID = 'campaignId',

  /**
   * Status of the campaign
   */
  CAMPAIGN_STATUS = 'campaignStatus',

  /**
   * Total budget allotted to the campaign
   */
  CAMPAIGN_BUDGET = 'campaignBudget',

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
   * The optional dimension on which to segment a campaigns report by limiting results to
   * campaigns within the specified portfolio.
   */
  PORTFOLIO_ID = 'portfolioId',

  /**
   * The optional dimension on which to segment a campaigns report by limiting results to
   * campaigns within the named portfolio.
   */
  PORTFOLIO_NAME = 'portfolioName',

  /**
   * Number of attributed conversion events occurring within 1 day of click on ad.
   */
  ATTRIBUTED_CONVERSIONS_1D = 'attributedConversions1d',

  /**
   * Number of attributed conversion events occurring within 7 days of click on ad.
   */
  ATTRIBUTED_CONVERSIONS_7D = 'attributedConversions7d',

  /**
   * Number of attributed conversion events occurring within 14 days of click on ad.
   */
  ATTRIBUTED_CONVERSIONS_14D = 'attributedConversions14d',

  /**
   * Number of attributed conversion events occurring within 30 days of click on ad.
   */
  ATTRIBUTED_CONVERSIONS_30D = 'attributedConversions30d',

  /**
   * Number of attributed conversion events occurring within 1 day of click on ad where the purchased
   * SKU was the same as the one advertised.
   */
  ATTRIBUTED_CONVERSIONS_1D_SAME_SKU = 'attributedConversions1dSameSKU',

  /**
   * Number of attributed conversion events occurring within 7 days of click on ad where the purchased
   * SKU was the same as the one advertised.
   */
  ATTRIBUTED_CONVERSIONS_7D_SAME_SKU = 'attributedConversions7dSameSKU',

  /**
   * Number of attributed conversion events occurring within 14 days of click on ad where the purchased
   * SKU was the same as the one advertised.
   */
  ATTRIBUTED_CONVERSIONS_14D_SAME_SKU = 'attributedConversions14dSameSKU',

  /**
   * Number of attributed conversion events occurring within 30 days of click on ad where the purchased
   * SKU was the same as the one advertised.
   */
  ATTRIBUTED_CONVERSIONS_30D_SAME_SKU = 'attributedConversions30dSameSKU',

  /**
   * Number of attributed units ordered within 1 day of click on ad.
   */
  ATTRIBUTED_UNITS_ORDERED_1D = 'attributedUnitsOrdered1d',

  /**
   * Number of attributed units ordered within 7 days of click on ad.
   */
  ATTRIBUTED_UNITS_ORDERED_7D = 'attributedUnitsOrdered7d',

  /**
   * Number of attributed units ordered within 14 days of click on ad.
   */
  ATTRIBUTED_UNITS_ORDERED_14D = 'attributedUnitsOrdered14d',

  /**
   * Number of attributed units ordered within 30 days of click on ad.
   */
  ATTRIBUTED_UNITS_ORDERED_30D = 'attributedUnitsOrdered30d',

  /**
   * Number of attributed sales occurring within 1 day of click on ad.
   */
  ATTRIBUTED_SALES_1D = 'attributedSales1d',

  /**
   * Number of attributed sales occurring within 7 days of click on ad.
   */
  ATTRIBUTED_SALES_7D = 'attributedSales7d',

  /**
   * Number of attributed sales occurring within 14 days of click on ad.
   */
  ATTRIBUTED_SALES_14D = 'attributedSales14d',

  /**
   * Number of attributed sales occurring within 30 days of click on ad.
   */
  ATTRIBUTED_SALES_30D = 'attributedSales30d',

  /**
   * Aggregate value of attributed sales occurring within 1 day of click on ad where the purchased
   * SKU was the same as the one advertised.
   */
  ATTRIBUTED_SALES_1D_SAME_SKU = 'attributedSales1dSameSKU',

  /**
   * Aggregate value of attributed sales occurring within 7 days of click on ad where the purchased
   * SKU was the same as the one advertised.
   */
  ATTRIBUTED_SALES_7D_SAME_SKU = 'attributedSales7dSameSKU',

  /**
   * Aggregate value of attributed sales occurring within 14 days of click on ad where the purchased
   * SKU was the same as the one advertised.
   */
  ATTRIBUTED_SALES_14D_SAME_SKU = 'attributedSales14dSameSKU',

  /**
   * Aggregate value of attributed sales occurring within 30 days of click on ad where the purchased
   * SKU was the same as the one advertised.
   */
  ATTRIBUTED_SALES_30D_SAME_SKU = 'attributedSales30dSameSKU',

  /**
   * Number of attributed units ordered within 1 day of click on ad where the purchased
   * SKU was the same as the one advertised.
   */
  ATTRIBUTED_UNITS_ORDERED_1D_SAME_SKU = 'attributedUnitsOrdered1dSameSKU',

  /**
   * Number of attributed units ordered within 7 days of click on ad where the purchased
   * SKU was the same as the one advertised.
   */
  ATTRIBUTED_UNITS_ORDERED_7D_SAME_SKU = 'attributedUnitsOrdered7dSameSKU',

  /**
   * Number of attributed units ordered within 14 days of click on ad where the purchased
   * SKU was the same as the one advertised.
   */
  ATTRIBUTED_UNITS_ORDERED_14D_SAME_SKU = 'attributedUnitsOrdered14dSameSKU',

  /**
   * Number of attributed units ordered within 30 days of click on ad where the purchased
   * SKU was the same as the one advertised.
   */
  ATTRIBUTED_UNITS_ORDERED_30D_SAME_SKU = 'attributedUnitsOrdered30dSameSKU',
}
