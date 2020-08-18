import { SponsoredDisplayProductAdsOperation } from '../../../src/operations/product-ads/sponsored-display-product-ads-operation'
import { OperationProvider, HttpClient, CreateSponsoredDisplayProductAdsParams } from '../../../src'
import { SANDBOX_URI, auth } from '../../http-client-factory'

describe('SponsoredDisplayProductAdsOperation', () => {
  const client = new HttpClient(SANDBOX_URI, { ...auth, scope: 2973802954634317 }, true)
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredDisplayProductAdsOperation)
  const AD_GROUP_ID = 83691965128172
  const SKU = 'AB-RED-8675309'

  describe('createProductAds', () => {
    it(`should creates one or more product ads`, async () => {
      const params: CreateSponsoredDisplayProductAdsParams[] = [
        {
          adGroupId: AD_GROUP_ID,
          state: 'enabled',
          sku: SKU,
        },
      ]
      const [res] = await operation.createProductAds(params)

      expect(res.code).toBe('SUCCESS')
    })
  })
})
