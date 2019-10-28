import { Operation } from '../operation'
import { Profile } from './types'
import { DecodeArray } from '../../decorators'

export class ProfileOperation extends Operation {
  protected resource = 'profiles'

  @DecodeArray(Profile)
  public listProfiles(): Promise<Profile[]> {
    return this.client.get<Profile[]>(`${this.version}/${this.resource}`)
  }
}
