import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import {
  AmazonAdvertising,
  SponsoredBrandsCampaignCreateParams,
  SponsoredBrandsCampaignUpdateParams,
} from '@scaleleap/amazon-advertising-api-sdk'

const auth = {
  accessToken: 'Atza|IQEBLjAsAhRmHjNgHpi0U...',
  clientId: 'amzn1.application-oa2-client.a8358a60...',
  scope: 1234567890,
}
const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.US, auth)
const sponsoredBrandsCampaignOperation = amazonAdvertising.sponsoredBrandsCampaign

// Archives a campaign specified by identifier.
sponsoredBrandsCampaignOperation.archiveCampaign(123)

// Creates one or more new sponsored brands campaigns
const createSBCampaignParams: SponsoredBrandsCampaignCreateParams[] = [{
  name: 'test campaign 7',
  dailyBudget: 1,
  state: 'paused',
  targetingType: 'manual',
  startDate: '20190401',
}]
sponsoredBrandsCampaignOperation.createCampaigns(createSBCampaignParams)

// Gets a campaign specified by identifier
sponsoredBrandsCampaignOperation.getCampaign(123)

// Gets an array of all campaigns associated with the client identifier passed in the authorization header, filtered by specified criteria.
sponsoredBrandsCampaignOperation.listCampaigns()

// Updates one or more Sponsored Brands campaigns.
const updateSBCampaignParams: SponsoredBrandsCampaignUpdateParams[] = [{
  portfolioId: 123,
  campaignId: 123,
  state: 'paused',
}]
sponsoredBrandsCampaignOperation.updateCampaigns(updateSBCampaignParams)
