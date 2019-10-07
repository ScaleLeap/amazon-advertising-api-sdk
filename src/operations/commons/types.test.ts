import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('ListPagination', () => {
  it('should pass', () => {
    const res = t.ListPagination.decode({
      startIndex: 0,
      count: 1000,
    })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.ListPagination.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('ResponseStatus', () => {
  it('should pass', () => {
    const res = t.ResponseStatus.decode({
      code: 406,
      details: 'Report date is too far in the past. Reports are only available for 60 days.',
    })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.ResponseStatus.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})
