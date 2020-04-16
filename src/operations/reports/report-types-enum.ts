/**
 * The type of entity for which the Sponsored Products report should be generated.
 */
export enum SponsoredProductsReportTypeEnum {
  CAMPAIGNS = 'campaigns',
  AD_GROUPS = 'adGroups',
  KEYWORDS = 'keywords',
  ASINS = 'asins',
  PRODUCT_ADS = 'productAds',
  PRODUCT_ATTRIBUTE_TARGETING = 'targets',
}

/**
 * The type of entity for which the Sponsored Brands report should be generated.
 */
export enum SponsoredBrandsReportTypeEnum {
  CAMPAIGNS = 'campaigns',
  AD_GROUPS = 'adGroups',
  KEYWORDS = 'keywords',
  HEADLINE_SEARCH = 'headlineSearch',
  SEARCH_TERM = 'searchTerms',
  TARGETS = 'targets',
}
