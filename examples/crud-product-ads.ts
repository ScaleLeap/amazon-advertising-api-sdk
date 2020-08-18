import { amazonAdvertising } from './auth'

import { CreateProductAdsParams, UpdateProductAdParams } from '../src'

const sponsoredProductsProductAdsOperation = amazonAdvertising.sponsoredProductsProductAds
const ID = 123
const SKU = 'AB-RED-8675309'

// Sets the product ad status to archived.
sponsoredProductsProductAdsOperation.archiveProductAd(ID)

// Creates one or more product ads.
const createProductAdParams: CreateProductAdsParams[] = [
  {
    campaignId: ID,
    adGroupId: ID,
    state: 'enabled',
    sku: SKU,
  },
]
sponsoredProductsProductAdsOperation.createProductAds(createProductAdParams)

// Retrieves a product ad by ID.
sponsoredProductsProductAdsOperation.getProductAd(ID)

// Retrieves a product ad and its extended fields by ID.
sponsoredProductsProductAdsOperation.getProductAdExtended(ID)

// Retrieves a list of product ads satisfying optional criteria.
sponsoredProductsProductAdsOperation.listProductAds()

// Retrieves a list of product ads with extended fields satisfying optional criteria.
sponsoredProductsProductAdsOperation.listProductAdsExtended()

// Updates one or more product ads.
const updateProductAdParams: UpdateProductAdParams[] = [
  {
    adId: ID,
    state: 'paused',
  },
]
sponsoredProductsProductAdsOperation.updateProductAds(updateProductAdParams)
