import setupPolly from '../../polly'
import { SponsoredProductsProductAdsOperation } from '../../../src/operations/productAds/sp-product-ads-operation'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import { CreateProductAdParams, ProductAdStateEnum } from '../../../src/operations/productAds/types'

setupPolly()

describe('SponsoredProductsProductAdsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsProductAdsOperation)
  const CAMPAIGN_ID = 164069484151709
  const AD_GROUP_ID = 149522344269714
  const SKU = 'AB-RED-8675309'

  describe('createProductAds', () => {
    it(`should creates one or more product ads ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: CreateProductAdParams[] = [
        {
          campaignId: CAMPAIGN_ID,
          adGroupId: AD_GROUP_ID,
          state: ProductAdStateEnum.ENABLED,
          sku: SKU,
        },
      ]
      const res = await operation.createProductAds(params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })
})
