import * as t from 'io-ts'

export const CreateUploadLocaltionParams = t.strict({
  programType: t.literal('SponsoredBrands'),
  creativeType: t.literal('Video'),
})
export type CreateUploadLocaltionParams = t.TypeOf<typeof CreateUploadLocaltionParams>

export const UploadLocation = t.string
export type UploadLocation = t.TypeOf<typeof UploadLocation>

export const CompleteMediaParam = t.intersection([
  t.type({
    /**
     * The url to upload the media. The url expires in 15 minutes.
     * The upload location only supports PUT HTTP Method to upload the media content.
     */
    uploadLocation: UploadLocation,
  }),
  t.partial({
    /**
     * The version id of the uploaded media.
     * The upload location retrieved from /media/upload API supports versioning and returns version id in the upload response through x-amz-version-id header.
     * API user can explicitly specify the version id corresponding to an upload through version property.
     * version is optional and if it is not specified, media corresponding to the most recent version at the time of API call will be used.
     */
    version: t.string,
  }),
])
export type CompleteMediaParam = t.TypeOf<typeof CompleteMediaParam>

/**
 * The Media identifier.
 */
export const MediaId = t.string
export type MediaId = t.TypeOf<typeof MediaId>
