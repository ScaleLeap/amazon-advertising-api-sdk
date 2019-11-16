import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'
import * as t2 from 'io-ts'

describe('ListPagination', () => {
  it('should pass', () => {
    const res = t.ListPagination.decode({
      startIndex: 0,
      count: 1000,
    })

    expect(isRight(res)).toBeTruthy()
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

describe('EnumType', () => {
  let FruitItem: any
  beforeEach(() => {
    enum FRUIT {
      APPLE = 'APPLE',
      BANANA = 'BANANA',
    }

    FruitItem = t2.type({
      fruit: t.createEnumType<FRUIT>(FRUIT),
      quatity: t2.number,
    })
  })

  it('should pass', () => {
    const result = FruitItem.is({
      fruit: 'BANANA',
      quatity: 10,
    })
    expect(result).toBe(true)
  })

  it('should fail', () => {
    const result = FruitItem.is({
      fruit: 'apple',
      quatity: 8,
    })
    expect(result).toBe(false)
  })
})
