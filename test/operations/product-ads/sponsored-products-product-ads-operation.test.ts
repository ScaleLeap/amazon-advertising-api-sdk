import { SponsoredProductsProductAdsOperation } from '../../../src/operations/product-ads/sponsored-products-product-ads-operation'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import {
  CreateProductAdsParams,
  UpdateProductAdsParams,
  ListProductAdsParams,
} from '../../../src/operations/product-ads/types'

describe('SponsoredProductsProductAdsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsProductAdsOperation)
  const CAMPAIGN_ID = 164069484151709
  const AD_GROUP_ID = 149522344269714
  const SKU = 'AB-RED-8675309'
  const AD_ID = 192944752071234

  describe.skip('createProductAds', () => {
    it(`should creates one or more product ads`, async () => {
      const params: CreateProductAdsParams[] = [
        {
          campaignId: CAMPAIGN_ID,
          adGroupId: AD_GROUP_ID,
          state: 'enabled',
          sku: SKU,
        },
      ]
      const res = await operation.createProductAds(params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('getProductAd', () => {
    it(`should retrieve a product ad by ID`, async () => {
      const res = await operation.getProductAd(AD_ID)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.adId).toEqual(AD_ID)
    })
  })

  describe('getProductAdExtended', () => {
    it(`should retrieve a product ad and its extended fields by ID`, async () => {
      const res = await operation.getProductAdExtended(AD_ID)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.adId).toEqual(AD_ID)
    })
  })

  describe('updateProductAds', () => {
    it(`should updates one or more product ads`, async () => {
      const params: UpdateProductAdsParams[] = [
        {
          adId: AD_ID,
          state: 'paused',
        },
      ]
      const res = await operation.updateProductAds(params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('listProductAds', () => {
    it(`should retrieve a list of product ads`, async () => {
      const res = await operation.listProductAds()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should retrieve a list of product ads satisfying optional criteria`, async () => {
      const params: ListProductAdsParams = {
        startIndex: 0,
        count: 1,
        campaignIdFilter: [CAMPAIGN_ID],
        adGroupIdFilter: [AD_GROUP_ID],
        adIdFilter: [AD_ID],
      }
      const [res] = await operation.listProductAds(params)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.adId).toEqual(AD_ID)
    })
  })

  describe('listProductAdsExtended', () => {
    it(`should retrieve a list of product ads `, async () => {
      const res = await operation.listProductAdsExtended()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should retrieve a list of product ads  satisfying optional criteria`, async () => {
      const params: ListProductAdsParams = {
        startIndex: 0,
        count: 1,
        campaignIdFilter: [CAMPAIGN_ID],
        adGroupIdFilter: [AD_GROUP_ID],
        adIdFilter: [AD_ID],
      }
      const [res] = await operation.listProductAdsExtended(params)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.adId).toEqual(AD_ID)
    })
  })

  describe('archiveProductAd', () => {
    it(`should set the product ad status to archived`, async () => {
      const res = await operation.archiveProductAd(AD_ID)

      expect(res).toHaveProperty('adId')
    })
  })
})
