import listCampaigns from './list-campaigns.json'
import { SponsoredBrandsCampaign } from '../types'
import reporter from 'io-ts-reporters'

describe('Sponsored Brands', () => {
  describe('SponsoredBrandsCampaign', () => {
    it('should parse the incoming data', () => {
      expect.assertions(1)

      const reports = listCampaigns
        .map((campaign) => reporter.report(SponsoredBrandsCampaign.decode(campaign)))
        .flat()

      expect(reports).toEqual([])
    })
  })
})
