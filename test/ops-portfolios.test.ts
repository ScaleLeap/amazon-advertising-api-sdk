import { OperationProvider } from '../src/operations/operation-provider'
import { CurrencyCode } from '../src/operations/commons/types'
import { PortfolioOperation } from '../src/operations/portfolios/ops-portfolios'
import { PortfolioState } from '../src/operations/portfolios/types'
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
