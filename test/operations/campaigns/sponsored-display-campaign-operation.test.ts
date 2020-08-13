import { OperationProvider } from '../../../src/operations/operation-provider'
import { httpClientFactory } from '../../http-client-factory'
import { SponsoredDisplayCampaignOperation } from '../../../src/operations/campaigns/sponsored-display-campaign-operation'

describe('SponsoredDisplayCampaignOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredDisplayCampaignOperation)
  const startDate = '20201210'

  describe('createCampaigns', () => {
    it(`should create a campaign`, async () => {
      const [res] = await operation.createCampaigns([
        {
          name: 'test sd campaign 2020/08/13 21:40',
          tactic: 'remarketing',
          state: 'enabled',
          budget: 1,
          startDate,
        },
      ])

      expect(res.code).toBe('SUCCESS')
    })

    it(`should create a campaign with optional params`, async () => {
      const [res] = await operation.createCampaigns([
        {
          name: 'test sd campaign 2020/08/13 21:41',
          tactic: 'remarketing',
          state: 'enabled',
          budget: 1,
          startDate,
          budgetType: 'daily',
          endDate: '20201211',
        },
      ])

      expect(res.code).toBe('SUCCESS')
    })
  })
})
