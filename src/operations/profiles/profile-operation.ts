import { Operation } from '../operation'
import {
  Profile,
  ProfileId,
  RegisterBrand,
  ProfileResponse,
  RegisterProfileResponse,
  ProfileRegistrationResponse,
  Brand,
} from './types'
import { Decode, DecodeArray } from '../../decorators'
import { AmazonMarketplaceAdvertisingCountryCodeType } from '../commons/types'
import { AmazonMarketplaceAdvertisingCountryCode } from '@scaleleap/amazon-marketplaces'

export class ProfileOperation extends Operation {
  protected resource = 'profiles'

  /**
   * Retrieves one or more profiles associated with the authorization passed in the request header.
   *
   * @returns
   */
  @DecodeArray(Profile)
  public listProfiles() {
    return this.client.get<Profile[]>(`${this.version}/${this.resource}`)
  }

  /**
   * Retrieves a single profile specified by identifier.
   *
   * @param profileId -
   * @returns
   */
  @Decode(Profile)
  public getProfile(profileId: ProfileId) {
    return this.client.get<Profile>(`${this.version}/${this.resource}/${profileId}`)
  }

  /**
   * Updates one or more profiles.
   *
   * @param {Partial<Profile>[]} profiles
   * @returns
   */
  @DecodeArray(ProfileResponse)
  public updateProfiles(profiles: Partial<Profile>[]) {
    return this.client.put<ProfileResponse[]>(`${this.version}/${this.resource}`, profiles)
  }

  /**
   * Registers a profile in the sandbox environment.
   * If this call is made to a production endpoint an error is returned.
   *
   * @param [countryCode=CountryCodeEnum.US]
   * @returns
   */
  @Decode(RegisterProfileResponse)
  public registerProfile(
    countryCode: AmazonMarketplaceAdvertisingCountryCodeType = AmazonMarketplaceAdvertisingCountryCode.US,
  ) {
    return this.client.put<RegisterProfileResponse>(`${this.version}/${this.resource}/register`, {
      countryCode,
    })
  }

  /**
   * Registers a brand in the sandbox environment. If this call is made to a production endpoint an error is returned.
   *
   * @param registerBrand -
   * @returns
   */
  @Decode(ProfileRegistrationResponse)
  public registerBrand(registerBrand: RegisterBrand) {
    return this.client.put<ProfileRegistrationResponse>(
      `${this.version}/${this.resource}/registerBrand`,
      registerBrand,
    )
  }

  /**
   * Gets an array of Brand data objects for the Brand associated with the profile ID passed in the header.
   * For more information about Brands, see Brand Services.
   *
   * @returns
   */
  @DecodeArray(Brand)
  public getBrands() {
    return this.client.get<Brand[]>(`${this.version}/brands`)
  }
}
