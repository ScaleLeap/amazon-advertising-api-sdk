import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { AmazonAdvertising } from '@scaleleap/amazon-advertising-api-sdk'

const auth = {
  accessToken: 'Atza|IQEBLjAsAhRmHjNgHpi0U...',
  clientId: 'amzn1.application-oa2-client.a8358a60...',
  scope: 1234567890,
}
const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.US, auth)
const sponsoredBrandsAdGroupOperation = amazonAdvertising.sponsoredBrandsAdGroup
const sponsoredProductsAdGroupOperation = amazonAdvertising.sponsoredProductsAdGroup

const sponsoredBrandsAdGroup = await sponsoredBrandsAdGroupOperation.getAdGroup(123)
const sponsoredBrandsAdGroups = await sponsoredBrandsAdGroupOperation.listAdGroups()

const sponsoredProductsAdGroup = await sponsoredProductsAdGroupOperation.getAdGroup(123)
const sponsoredProductsAdGroupExtended = await sponsoredProductsAdGroupOperation.getAdGroupEx(123)
