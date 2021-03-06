import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('CreateUploadLocaltionParams', () => {
  it('should pass', () => {
    const res = t.CreateUploadLocaltionParam.decode({
      programType: 'SponsoredBrands',
      creativeType: 'Video',
    })

    expect(isRight(res)).toBeTruthy()
  })
  it('should fail if programType is missing', () => {
    const res = t.CreateUploadLocaltionParam.decode({
      creativeType: 'Video',
    })

    expect(isRight(res)).toBeFalsy()
  })

  it('should fail if creativeType is missing', () => {
    const res = t.CreateUploadLocaltionParam.decode({
      programType: 'SponsoredBrands',
    })

    expect(isRight(res)).toBeFalsy()
  })
})

describe('CompleteMediaParam', () => {
  it('should pass', () => {
    const res = t.CompleteMediaParam.decode({
      uploadLocation: 'string',
      version: 'string',
    })

    expect(isRight(res)).toBeTruthy()
  })
  it('should require upload location', () => {
    const res = t.CompleteMediaParam.decode({
      version: 'string',
    })

    expect(isRight(res)).toBeFalsy()
  })

  it('should allow version optional', () => {
    const res = t.CompleteMediaParam.decode({
      uploadLocation: 'string',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('MediaResource', () => {
  it('should pass', () => {
    const res = t.MediaResource.decode({
      mediaId: 'string',
      status: 'Processing',
      statusMetadata: [
        {
          code: 'string',
          message: 'string',
        },
      ],
      publishedMediaUrl: 'string',
    })

    expect(isRight(res)).toBeTruthy()
  })

  it('should pass without optional paramaters', () => {
    const res = t.MediaResource.decode({
      mediaId: 'string',
      status: 'Processing',
    })

    expect(isRight(res)).toBeTruthy()
  })
})
