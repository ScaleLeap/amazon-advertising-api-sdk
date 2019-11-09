/**
 * Copyright (C) 2019, Scale Leap
 */

/**
 * Amazon API URI prefix, depending on the ad type. E.g. "sp" or "hsa"
 *
 * @export
 * @enum { string }
 * @example "sp"
 */
export enum AmazonAdTypeURIPrefix {
  SponsoredProducts = 'sp',
  SponsoredBrands = 'hsa',
}
