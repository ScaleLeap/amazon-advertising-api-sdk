import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('Portfolio', () => {
  it('should pass getPortfolio response', () => {
    const res = t.Portfolio.decode({
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
    const res = t.Portfolio.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('PortfolioExtended', () => {
  it('should pass getPortfolioEx response', () => {
    const res = t.PortfolioExtended.decode({
      "portfolioId": 1234567890,
      "name": "My Portfolio One",
      "budget": {
          "amount": 100.0,
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
    const res = t.PortfolioExtended.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('PortfolioMutationResponse', () => {
  it('should pass createPortfolios and updatePortfolios response', () => {
    const res = t.PortfolioMutationResponse.decode({
      "code": "SUCCESS",
      "portfolioId": 1234567890
  })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.PortfolioMutationResponse.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('ListPortfoliosParams', () => {
  it('should list portfolios params', () => {
    const res = t.ListPortfoliosParams.decode({
      "portfolioIdFilter": 1234567890,
      "portfolioNameFilter": "",
      "portfolioStateFilter": "enabled"
  })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.ListPortfoliosParams.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('CreatePortfoliosParams', () => {
  it('should create portfolios params', () => {
    const res = t.CreatePortfoliosParams.decode({
      "name": "My Portfolio Two",
      "budget": {
          "amount": 50.0,
          "policy": "dateRange",
          "startDate": "20181001",
          "endDate": null
      },
      "state": "enabled"
  })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.CreatePortfoliosParams.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('UpdatePortfoliosParams', () => {
  it('should update portfolios params', () => {
    const res = t.UpdatePortfoliosParams.decode({
      "portfolioId": 1234567890,
      "name": "My Portfolio New Name",
      "budget": {
          "amount": 200.0,
      }
  })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.UpdatePortfoliosParams.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})
