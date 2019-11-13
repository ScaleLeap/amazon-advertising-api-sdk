import { httpClientFactory } from './http-client-factory'
import setupPolly from './polly'
import { OperationProvider } from '../src/operations/operation-provider'
import { PortfolioOperation } from '../src/operations/portfolios/portfolio-operation'
import { PortfolioState, PortfolioResponseStatus } from '../src/operations/portfolios/types'

setupPolly()
describe('PortfolioOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const portfolioOperation = operationProvider.create(PortfolioOperation)
  const portfolioId = 235596356388147

  describe('listPortfolios', () => {
    it('should return an array of portfolios', async () => {
      const res = await portfolioOperation.listPortfolios()
      expect(Array.isArray(res)).toBeTruthy()
    })

    it('should accept params', async () => {
      const res = await portfolioOperation.listPortfolios({
        portfolioIdFilter: portfolioId,
      })
      expect(Array.isArray(res)).toBeTruthy()
      expect(res).toHaveLength(1)
      expect(res[0].portfolioId).toBe(portfolioId)
    })
  })

  describe('listPortfoliosEx', () => {
    it('should return an array of extended portfolios', async () => {
      const res = await portfolioOperation.listPortfoliosEx()
      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].creationDate).toBeInstanceOf(Date)
      expect(res[0].lastUpdatedDate).toBeInstanceOf(Date)
      expect(res[0].servingStatus).toBeDefined()
    })
  })

  describe('getPortfolio', () => {
    it('should return a single portfolio', async () => {
      const res = await portfolioOperation.getPortfolio(portfolioId)
      expect(res.portfolioId).toBe(portfolioId)
    })
  })

  describe('getPortfolioEx', () => {
    it('should return a single expanded portfolio', async () => {
      const res = await portfolioOperation.getPortfolioEx(portfolioId)
      expect(res.portfolioId).toBe(portfolioId)
      expect(res.creationDate).toBeInstanceOf(Date)
      expect(res.lastUpdatedDate).toBeInstanceOf(Date)
      expect(res.servingStatus).toBeDefined()
    })
  })

  describe('createPortfolios', () => {
    it('should create a portfolio without a budget', async () => {
      expect.assertions(3)
      const res = await portfolioOperation.createPortfolios([
        {
          name: 'My Portfolio Four',
          state: PortfolioState.types[0].value,
        },
      ])

      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].code).toBe(PortfolioResponseStatus.types[0].value)

      if (res[0].code === PortfolioResponseStatus.types[0].value) {
        expect(res[0].portfolioId).toBeDefined()
      }
    })

    it('should create a portfolio with a budget', async () => {
      expect.assertions(3)
      const res = await portfolioOperation.createPortfolios([
        {
          name: 'My Portfolio Three',
          budget: {
            amount: 100.0,
            policy: 'dateRange',
            startDate: '20190301',
            endDate: '20190331',
          },
          state: PortfolioState.types[0].value,
        },
      ])

      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].code).toBe(PortfolioResponseStatus.types[0].value)

      if (res[0].code === PortfolioResponseStatus.types[0].value) {
        expect(res[0].portfolioId).toBeDefined()
      }
    })
  })
})
