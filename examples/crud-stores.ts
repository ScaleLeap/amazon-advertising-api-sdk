import { amazonAdvertising } from './auth'

const sponsoredBrandsStoresInfoOperation = amazonAdvertising.sponsoredBrandsStoresInfo
const BRAND_ENTITY_ID = 'ENTITY6SICSOL71XVX'

// Request store information for a given brandEntityId.
sponsoredBrandsStoresInfoOperation.getStore(BRAND_ENTITY_ID)

// List store information for all registered stores under an advertiser.
sponsoredBrandsStoresInfoOperation.listStores()
