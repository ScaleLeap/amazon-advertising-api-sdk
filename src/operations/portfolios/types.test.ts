import { isRight } from 'fp-ts/lib/Either'
import { Portfolio, PortfolioExtended, PortfolioMutationResponse } from './types'

describe('Portfolio', () => {
  it('should pass getPortfolio response', () => {
    const res = Portfolio.decode({
      "portfolioId": 1234567890,
      "name": "My Portfolio One",
      "budget": {
          "amount": 100.0,
          "currencyCode": "USD",
          "policy": "dateRange",
          "startDate": "20181231",
          "endDate": "null"
      },
      "inBudget": true,
      "state": "enabled"
  })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = Portfolio.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('PortfolioExtended', () => {
  it('should pass getPortfolioEx response', () => {
    const res = PortfolioExtended.decode({
      "portfolioId": 1234567890,
      "name": "My Portfolio One",
      "budget": {
          "amount": 100.0,
          "currencyCode": "USD",
          "policy": "dateRange",
          "startDate": "20190131",
          "endDate": "20190331"
      },
      "inBudget": true,
      "state": "enabled",
      "creationDate": 1526510030,
      "lastUpdatedDate": 1526510030,
      "servingStatus": "PENDING_START_DATE"
  })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = PortfolioExtended.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('PortfolioMutationResponse', () => {
  it('should pass createPortfolios and updatePortfolios  response', () => {
    const res = PortfolioMutationResponse.decode({
      "code": "SUCCESS",
      "portfolioId": 1234567890
  })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = PortfolioMutationResponse.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})
