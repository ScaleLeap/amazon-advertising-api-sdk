import { isRight } from 'fp-ts/lib/Either'
import { ProfileResponse } from './types'

describe('ProfileResponse', () => {
  it('should pass', () => {
    const res = ProfileResponse.decode({
      profileId: 1,
      code: '1',
      details: 'details',
    })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = ProfileResponse.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})
