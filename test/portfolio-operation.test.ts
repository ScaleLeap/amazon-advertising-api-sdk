import { OperationProvider } from '../src/operations/operation-provider'
import { PortfolioOperation } from '../src/operations/portfolios/portfolio-operation'
import { httpClientFactory } from './http-client-factory'
import setupPolly from './polly'

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
      expect(res[0].creationDate).toBeGreaterThan(0)
      expect(res[0].lastUpdatedDate).toBeGreaterThan(0)
      expect(res[0].servingStatus).toBeDefined()
    })
  })
})
