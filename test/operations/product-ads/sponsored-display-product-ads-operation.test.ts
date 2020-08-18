import { SponsoredDisplayProductAdsOperation } from '../../../src/operations/product-ads/sponsored-display-product-ads-operation'
import { OperationProvider, HttpClient, CreateProductAdsParams } from '../../../src'
import { SANDBOX_URI, auth } from '../../http-client-factory'

describe('SponsoredDisplayProductAdsOperation', () => {
  const client = new HttpClient(SANDBOX_URI, { ...auth, scope: 2973802954634317 }, true)
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredDisplayProductAdsOperation)
  const CAMPAIGN_ID = 169989740510339
  const AD_GROUP_ID = 164444192239500
  const ASIN = 'B07663Z46Z'

  describe('createProductAds', () => {
    it(`should creates one or more product ads`, async () => {
      const params: CreateProductAdsParams[] = [
        {
          campaignId: CAMPAIGN_ID,
          adGroupId: AD_GROUP_ID,
          state: 'enabled',
          asin: ASIN,
        },
      ]
      const [res] = await operation.createProductAds(params)

      expect(res.code).toBe('SUCCESS')
    })
  })
})
