import * as t from 'io-ts'

export const CreateUploadLocaltionParams = t.strict({
  programType: t.literal('SponsoredBrands'),
  creativeType: t.literal('Video'),
})
export type CreateUploadLocaltionParams = t.TypeOf<typeof CreateUploadLocaltionParams>

export const UploadLocation = t.string
export type UploadLocation = t.TypeOf<typeof UploadLocation>
