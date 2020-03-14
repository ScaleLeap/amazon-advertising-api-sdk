import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src/operations/operation-provider'
import { PortfolioOperation } from '../../../src/operations/portfolios/portfolio-operation'
import {
  PortfolioStateEnum,
  PortfolioResponseStatusEnum,
} from '../../../src/operations/portfolios/types'

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

  describe.skip('createPortfolios', () => {
    it('should create a portfolio without a budget', async () => {
      expect.assertions(3)
      const res = await portfolioOperation.createPortfolios([
        {
          name: `My Portfolio 1574180631864`,
          state: PortfolioStateEnum.ENABLED,
        },
      ])

      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].code).toBe(PortfolioResponseStatusEnum.SUCCESS)

      if (res[0].code === PortfolioResponseStatusEnum.SUCCESS) {
        expect(res[0].portfolioId).toBeDefined()
      }
    })

    it('should create a portfolio with a budget', async () => {
      expect.assertions(3)
      const res = await portfolioOperation.createPortfolios([
        {
          name: `My Portfolio 1574180632035`,
          budget: {
            amount: 100.0,
            policy: 'dateRange',
            startDate: '20191119',
            endDate: '20191119',
          },
          state: PortfolioStateEnum.ENABLED,
        },
      ])

      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].code).toBe(PortfolioResponseStatusEnum.SUCCESS)

      if (res[0].code === PortfolioResponseStatusEnum.SUCCESS) {
        expect(res[0].portfolioId).toBeDefined()
      }
    })
  })

  describe('updatePortfolios', () => {
    it('should fail updating portfolio that does not exist', async () => {
      expect.assertions(4)
      const res = await portfolioOperation.updatePortfolios([
        {
          portfolioId: 1,
          name: 'renamed portfolio',
        },
      ])

      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].code).toBe(PortfolioResponseStatusEnum.NOT_FOUND)

      if (res[0].code === PortfolioResponseStatusEnum.NOT_FOUND) {
        // TODO: figure out why TypeScript is not properly discriminating this type
        // and not suggesting PortfoliosResponseNotFound's property `description`.
        expect(res[0].code).toBeTruthy()
        expect(res[0]).toHaveProperty('description')
      }
    })

    it('should update portfolio and return a status', async () => {
      expect.assertions(3)
      const res = await portfolioOperation.updatePortfolios([
        {
          portfolioId: portfolioId,
          name: `My Portfolio 1581513368211`,
          state: PortfolioStateEnum.ENABLED,
        },
      ])

      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].code).toBe(PortfolioResponseStatusEnum.SUCCESS)

      if (res[0].code === PortfolioResponseStatusEnum.SUCCESS) {
        expect(res[0]).toHaveProperty('portfolioId')
      }
    })
  })
})
