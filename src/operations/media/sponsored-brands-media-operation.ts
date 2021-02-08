import { Operation } from '../operation'
import { CompleteMediaParam, CreateUploadLocaltionParams, MediaId, UploadLocation } from './types'
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

  /**
   * The API should be called once the media is uploaded to the location provided by the /media/upload API endpoint.
   * The API creates a Media resource for the uploaded media.
   * Media resource is comprised of Media Identifier. The Media Identifier can be used to attach media to Ad Program (Sponsored Brands).
   *
   * The API internally kicks off the asynchronous validation and processing workflow of the uploaded media.
   * As a result, Media may not be immediately available for usage (to create Sponsored Brands Video Campaign) as soon as the response is received.
   * See /media/describe API doc for instructions on when media is ready for campaign creation.
   */
  @Decode(MediaId)
  public completeMedia(param: CompleteMediaParam) {
    return this.client.put<MediaId>(`${this.resource}/complete`, param)
  }
}
