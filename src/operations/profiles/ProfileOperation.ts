import { Operation } from '../operation'
import { HttpClient } from '../../http-client'
import { Profile } from './types'

export class ProfileOperation extends Operation {
  protected resource = 'profiles'
  protected version = 'v2'
  constructor(protected client: HttpClient) {
    super()
  }

  public listProfiles(): Promise<Profile[]> {
    return this.client.get<Profile[]>(`${this.version}/${this.resource}`)
  }
}
