import { Operation } from '../operation'
import { Profile } from './types'

export class ProfileOperation extends Operation {
  protected resource = 'profiles'

  public listProfiles(): Promise<Profile[]> {
    return this.client.get<Profile[]>(`${this.version}/${this.resource}`)
  }
}
