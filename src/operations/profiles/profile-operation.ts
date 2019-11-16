import { Operation } from '../operation'
import {
  Profile,
  ProfileId,
  RegisterBrand,
  ProfileResponse,
  RegisterProfileResponse,
  ProfileRegistrationResponse,
} from './types'
import { Decode, DecodeArray } from '../../decorators'
import { CountryCode, CountryCodeType } from '../commons/types'

export class ProfileOperation extends Operation {
  protected resource = 'profiles'

  @DecodeArray(Profile)
  public listProfiles() {
    return this.client.get<Profile[]>(`${this.version}/${this.resource}`)
  }

  @Decode(Profile)
  public getProfile(profileId: ProfileId) {
    return this.client.get<Profile>(`${this.version}/${this.resource}/${profileId}`)
  }

  @DecodeArray(ProfileResponse)
  public updateProfiles(profiles: Partial<Profile>[]) {
    return this.client.put<ProfileResponse[]>(`${this.version}/${this.resource}`, profiles)
  }

  @Decode(RegisterProfileResponse)
  public registerProfile(countryCode: CountryCodeType = CountryCode.US) {
    return this.client.put<RegisterProfileResponse>(`${this.version}/${this.resource}/register`, {
      countryCode,
    })
  }

  @Decode(ProfileRegistrationResponse)
  public registerBrand(registerBrand: RegisterBrand) {
    return this.client.put<ProfileRegistrationResponse>(
      `${this.version}/${this.resource}/registerBrand`,
      registerBrand,
    )
  }
}
