import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { 
  AmazonAdvertising,
  AdGroup,
} from '@scaleleap/amazon-advertising-api-sdk'

const auth = {
  accessToken: 'Atza|IQEBLjAsAhRmHjNgHpi0U...',
  clientId: 'amzn1.application-oa2-client.a8358a60...',
  scope: 1234567890,
}
const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.US, auth)
const sponsoredBrandsAdGroupOperation = amazonAdvertising.sponsoredBrandsAdGroup
const sponsoredProductsAdGroupOperation = amazonAdvertising.sponsoredProductsAdGroup

// Gets an array of ad groups associated with the client identifier passed in the authorization header, filtered by specified criteria.
sponsoredBrandsAdGroupOperation.getAdGroup(123)

// Gets an ad group specified by identifier.
sponsoredBrandsAdGroupOperation.listAdGroups()

// Sets the ad group status to archived.
sponsoredProductsAdGroupOperation.archiveAdGroup(123)

// Creates one or more ad groups.
const sponsoredProductsAdGroup: AdGroup[] = [{
  adGroupId: 138818764235694,
  name: 'New Name',
  campaignId: 31299234922913,
  defaultBid: 1,
  state: 'archived',
}]
sponsoredProductsAdGroupOperation.createAdGroups(sponsoredProductsAdGroup)

// Retrieves an ad group by ID.
sponsoredProductsAdGroupOperation.getAdGroup(123)

// Retrieves an ad group and its extended fields by ID.
sponsoredProductsAdGroupOperation.getAdGroupEx(123)

// Retrieves a list of ad groups satisfying optional criteria.
sponsoredProductsAdGroupOperation.listAdGroups()

// Retrieves a list of ad groups satisfying optional criteria.
sponsoredProductsAdGroupOperation.listAdGroupsEx()

// Updates one or more ad groups. Ad groups are identified using their adGroupId
sponsoredProductsAdGroupOperation.updateAdGroups(sponsoredProductsAdGroup)
