import { Operation } from '../operation'
import { CreateUploadLocaltionParams, UploadLocation } from './types'
import { Decode } from '../../decorators'

export class SponsoredBrandsMediaOperation extends Operation {
  protected resource = `${this.version}/media`

  /**
   * Creates an ephemeral resource (upload location) to upload Media for an Ad Program.
   * The upload location is short lived and expires in 15 minutes.
   *
   * @param param -
   * @returns
   */
  @Decode(UploadLocation)
  public createUploadLocation(param: CreateUploadLocaltionParams) {
    return this.client.post<UploadLocation>(`${this.resource}/upload`, param)
  }
}
