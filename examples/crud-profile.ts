import { amazonAdvertising } from './auth'
import { AmazonMarketplaceAdvertisingCountryCode } from '@scaleleap/amazon-marketplaces'

const profileOperation = amazonAdvertising.profile
const PROFILE_ID = 123

// Gets an array of Brand data objects for the Brand associated with the profile ID passed in the header.
profileOperation.getBrands()

// Retrieves a single profile specified by identifier.
profileOperation.getProfile(PROFILE_ID)

// Retrieves one or more profiles associated with the authorization passed in the request header.
profileOperation.listProfiles()

// Registers a brand in the sandbox environment.
const registerBrandParam = {
  countryCode: AmazonMarketplaceAdvertisingCountryCode.US,
  brand: 'yay',
}
profileOperation.registerBrand(registerBrandParam)

// Registers a profile in the sandbox environment.
profileOperation.registerProfile()

// Updates one or more profiles.
const updateProfilesParams = [
  {
    profileId: PROFILE_ID,
    dailyBudget: 123,
  },
]
profileOperation.updateProfiles(updateProfilesParams)
