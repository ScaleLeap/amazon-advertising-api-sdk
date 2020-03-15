import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('MediaAsset', () => {
  it('should pass', () => {
    const res = t.MediaAsset.decode({
      assetID: 'string',
      url: 'string',
      mediaType: 'brandLogo',
      name: 'string',
    })

    expect(isRight(res)).toBeTruthy()
  })
})
