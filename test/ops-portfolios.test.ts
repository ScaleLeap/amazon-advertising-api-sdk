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
      expect.assertions(11)
      const res = await portfolioOperation.listPortfolios()
      expect(Array.isArray(res)).toBeTruthy()

      // without a budget
      expect(res[0].budget).toBeFalsy()
      expect(res[0].inBudget).toBe(true)
      expect(res[0].name).toBe('boo')
      expect(res[0].state).toBe(PortfolioState.types[0].value)

      // with a budget
      expect(res[3].budget).toBeTruthy()
      if (res[3].budget) {
        expect(res[3].budget.amount).toBe(100)
        expect(res[3].budget.currencyCode).toBe(CurrencyCode.types['5'].value)
        expect(res[3].budget.policy).toBe('dateRange')
        expect(res[3].budget.startDate).toBe('20190301')
        expect(res[3].budget.endDate).toBe('20190331')
      }
    })
  })
})
