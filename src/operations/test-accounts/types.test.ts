import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('CreateAccountResponse', () => {
  it('should pass', () => {
    const res = t.CreateAccountResponse.decode({
      requestId: 'VMTZD2V14R745AHA5C4S'
    })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.CreateAccountResponse.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('Account', () => {
  it('should pass', () => {
    const res = t.Account.decode(
      {
        countryCode: "IT",
        asins: [],
        accountType: "VENDOR",
        id: "ENTITY2TQYXTN0FH5DK",
        status: "COMPLETED"
      },)

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.Account.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('CreateAccount', () => {
  it('should pass', () => {
    const res = t.CreateAccount.decode({
      countryCode: "IT",
      accountMetaData: {
        vendorCode: "ABCDE"
      },
      accountType: "VENDOR"
    })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.CreateAccount.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})
