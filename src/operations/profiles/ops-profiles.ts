import { Operation } from '../operation'
import { Profile, ProfileId, ProfileResponse } from './types'
import { Decode, DecodeArray } from '../../decorators'
export class ProfileOperation extends Operation {
  protected resource = 'profiles'

  @DecodeArray(Profile)
  public listProfiles(): Promise<Profile[]> {
    return this.client.get<Profile[]>(`${this.version}/${this.resource}`)
  }

  @Decode(Profile)
  public getProfile(profileId: ProfileId): Promise<Profile> {
    return this.client.get<Profile>(`${this.version}/${this.resource}/${profileId}`)
  }

  @DecodeArray(ProfileResponse)
  public updateProfiles(profiles: Partial<Profile>[]): Promise<ProfileResponse[]> {
    return this.client.put<ProfileResponse[]>(`${this.version}/${this.resource}`, profiles)
  }
}
