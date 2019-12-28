import setupPolly from '../../polly'
import { SponsoredProductsAdGroupKeywordsOperation } from '../../../src/operations/keywords/sp-ad-group-keywords-operation'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import { Keyword } from '../../../src/operations/keywords/types'

setupPolly()

describe('SponsoredProductsAdGroupKeywordsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsAdGroupKeywordsOperation)

  describe('listBiddableKeywords', () => {
    it(`should return an array of Keywords  ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res: Keyword[] = await operation.listBiddableKeywords()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })
})
