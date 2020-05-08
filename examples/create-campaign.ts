import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import {
  AmazonAdvertising,
  SponsoredBrandsCampaignCreateParams,
  SponsoredBrandsCampaignUpdateParams,
  SponsoredProductsCampaignCreateParams,
  SponsoredProductsCampaignUpdateParams,
} from '../src'

const auth = {
  accessToken: 'Atza|IQEBLjAsAhRmHjNgHpi0U...',
  clientId: 'amzn1.application-oa2-client.a8358a60...',
  scope: 1234567890,
}
const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.US, auth)
const sponsoredBrandsCampaignOperation = amazonAdvertising.sponsoredBrandsCampaign
const sponsoredProductsCampaignOperation = amazonAdvertising.sponsoredProductsCampaign

// Archives a sponsored brands campaign specified by identifier
sponsoredBrandsCampaignOperation.archiveCampaign(123)

// Creates one or more new sponsored brands campaigns
const createSBCampaignParams: SponsoredBrandsCampaignCreateParams[] = [
  {
    name: 'test campaign 7',
    dailyBudget: 1,
    state: 'paused',
    targetingType: 'manual',
    startDate: '20190401',
  },
]
sponsoredBrandsCampaignOperation.createCampaigns(createSBCampaignParams)

// Gets a sponsored brands campaign specified by identifier
sponsoredBrandsCampaignOperation.getCampaign(123)

// Gets an array of all sponsored brands campaigns associated with the client identifier passed in the authorization header, filtered by specified criteria
sponsoredBrandsCampaignOperation.listCampaigns()

// Updates one or more sponsored brands campaigns
const updateSBCampaignParams: SponsoredBrandsCampaignUpdateParams[] = [
  {
    portfolioId: 123,
    campaignId: 123,
    state: 'paused',
  },
]
sponsoredBrandsCampaignOperation.updateCampaigns(updateSBCampaignParams)

// Sets the sponsored products campaign status to archived
sponsoredProductsCampaignOperation.archiveCampaign(123)

// Creates one or more sponsored products campaigns
const createSPCampaignParams: SponsoredProductsCampaignCreateParams[] = [
  {
    name: 'test campaign',
    campaignType: 'sponsoredProducts',
    dailyBudget: 1,
    state: 'enabled',
    targetingType: 'manual',
    startDate: '20200310',
  },
]
sponsoredProductsCampaignOperation.createCampaigns(createSPCampaignParams)

// Retrieves a sponsored products campaign by campaignId
sponsoredProductsCampaignOperation.getCampaign(123)

// Retrieves a sponsored products campaign and its extended fields by campaignId
sponsoredProductsCampaignOperation.getCampaignEx(123)

// Retrieves a list of sponsored products campaigns satisfying optional filtering criteria
sponsoredProductsCampaignOperation.listCampaigns()

// Retrieves a list of sponsored products campaigns with extended fields satisfying optional filtering criteria
sponsoredProductsCampaignOperation.listCampaignsEx()

// Updates one or more ponsored products campaigns
const updateSPCampaignParams: SponsoredProductsCampaignUpdateParams[] = [
  {
    campaignId: 123,
    name: 'test campaign',
    dailyBudget: 1,
    state: 'enabled',
    startDate: '20200310',
  },
]
sponsoredProductsCampaignOperation.updateCampaigns(updateSPCampaignParams)
