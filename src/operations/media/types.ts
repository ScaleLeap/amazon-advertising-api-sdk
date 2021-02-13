import * as t from 'io-ts'

export const CreateUploadLocaltionParam = t.strict({
  programType: t.literal('SponsoredBrands'),
  creativeType: t.literal('Video'),
})
export type CreateUploadLocaltionParam = t.TypeOf<typeof CreateUploadLocaltionParam>

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

export const MediaStatus = t.union([
  /**
   * The media is being processed.
   */
  t.literal('Processing'),

  /**
   * The media is pending additional validation carried out during media conversion.
   */
  t.literal('PendingDeepValidation'),

  /**
   * Media has successfully finished validation and conversion and the media is published.
   */
  t.literal('Available'),

  /**
   * Media processing failed.
   */
  t.literal('Failed'),
])
export type MediaStatus = t.TypeOf<typeof MediaStatus>

export const MediaStatusMetadata = t.type({
  code: t.string,
  message: t.string,
})
export type MediaStatusMetadata = t.TypeOf<typeof MediaStatusMetadata>

/**
 * Media Resource.
 */
export const MediaResource = t.intersection([
  t.type({
    /**
     * The Media identifier.
     */
    mediaId: MediaId,

    /**
     * Media status.
     */
    status: MediaStatus,
  }),
  t.partial({
    /**
     * Additional status metadata.
     * It is only available when status is Failed and statusMetadata provides additional detail on why media status is Failed.
     * statusMetadata is comprised of code and message.
     */
    statusMetadata: t.array(MediaStatusMetadata),

    /**
     * The preview URL of the media.
     * It is only available when status is Available.
     */
    publishedMediaUrl: t.string,
  }),
])
export type MediaResource = t.TypeOf<typeof MediaResource>
