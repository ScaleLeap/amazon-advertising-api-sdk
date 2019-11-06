import { OperationProvider } from '../src/operations/operation-provider'
import { PortfolioOperation } from '../src/operations/portfolios/portfolio-operation'
import { httpClientFactory } from './http-client-factory'
import setupPolly from './polly'

setupPolly()
describe('PortfolioOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const portfolioOperation = operationProvider.create(PortfolioOperation)

  describe('listPortfolios', () => {
    it('should return an array of portfolios', async () => {
      const res = await portfolioOperation.listPortfolios()
      expect(Array.isArray(res)).toBeTruthy()
    })
  })
})
