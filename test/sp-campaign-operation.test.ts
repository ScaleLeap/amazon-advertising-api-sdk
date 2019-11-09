import { OperationProvider } from '../src/operations/operation-provider'
import { SponsoredProductsCampaignOperation } from '../src/operations/campaigns/sp-campaign-operation'
import { httpClientFactory } from './http-client-factory'
import setupPolly from './polly'

setupPolly()

describe('SponsoredProductsCampaignOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const campaignOperation = operationProvider.create(SponsoredProductsCampaignOperation)

  describe('Sponsored Brands', () => {
    describe('listCampaigns', () => {
      it('should return an array of campaigns', async () => {
        const res = await campaignOperation.listCampaigns()
        expect(Array.isArray(res)).toBeTruthy()
      })
    })
  })
})
