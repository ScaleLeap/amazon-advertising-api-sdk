import { amazonAdvertising } from './auth'

import {
  SponsoredBrandsKeywordRecommendationParams,
  CreateSponsoredBrandsKeywordParams,
  UpdateSponsoredBrandsKeywordParams,
  CreateSponsoredBrandsNegativeKeywordParams,
  UpdateSponsoredBrandsNegativeKeywordParams,
  CreateKeywordsParam,
  UpdateKeywordsParam,
  CreateNegativeKeywordsParam,
  UpdateNegativeKeywordsParam,
  CreateCampaignNegativeKeywordsParam,
  UpdateCampaignNegativeKeywordsParam,
} from '../src'

const sponsoredBrandsKeywordRecommendationsOperation =
  amazonAdvertising.sponsoredBrandsKeywordRecommendations
const sponsoredBrandsKeywordsOperation = amazonAdvertising.sponsoredBrandsKeywords
const sponsoredBrandsNegativeKeywordsOperation = amazonAdvertising.sponsoredBrandsNegativeKeywords
const sponsoredProductsAdGroupKeywordsOperation = amazonAdvertising.sponsoredProductsAdGroupKeywords
const sponsoredProductsAdGroupNegativeKeywordsOperation =
  amazonAdvertising.sponsoredProductsAdGroupNegativeKeywords
const sponsoredProductsCampaignNegativeKeywordsOperation =
  amazonAdvertising.sponsoredProductsCampaignNegativeKeywords

// Gets an array of keyword recommendation objects for a set of ASINs included either on a landing page or a Store page.
const sponsoredBrandsKeywordRecommendationParams: SponsoredBrandsKeywordRecommendationParams = {
  asins: ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'],
}
sponsoredBrandsKeywordRecommendationsOperation.getKeywordRecommendations(
  sponsoredBrandsKeywordRecommendationParams,
)

// Archives a sponsored brands keyword specified by identifier.
sponsoredBrandsKeywordsOperation.archiveKeyword(123)

// Creates one or more sponsored brands keywords.
const createSBKeywordParams: CreateSponsoredBrandsKeywordParams[] = [
  {
    adGroupId: 123,
    campaignId: 456,
    keywordText: 'Apple',
    matchType: 'broad',
    bid: 1,
  },
]
sponsoredBrandsKeywordsOperation.createKeywords(createSBKeywordParams)

// Gets a sponsored brands keyword specified by identifier.
sponsoredBrandsKeywordsOperation.getKeyword(123)

// Gets an array of sponsored brands keywords, filtered by optional criteria.
sponsoredBrandsKeywordsOperation.listKeywords()

// Updates one or more sponsored brands keywords.
const updateSBKeywordParams: UpdateSponsoredBrandsKeywordParams[] = [
  {
    keywordId: 123,
    adGroupId: 123,
    campaignId: 456,
    state: 'paused',
    bid: 1,
  },
]
sponsoredBrandsKeywordsOperation.updateKeywords(updateSBKeywordParams)

// Archives a sponsored brands negative keyword specified by identifier.
sponsoredBrandsNegativeKeywordsOperation.archiveNegativeKeyword(123)

// Creates one or more sponsored brands negative keywords.
const createSBNegativeKeywordsParams: CreateSponsoredBrandsNegativeKeywordParams[] = [
  {
    campaignId: 123,
    adGroupId: 123,
    keywordText: 'Apple',
    matchType: 'negativeExact',
  },
]
sponsoredBrandsNegativeKeywordsOperation.createNegativeKeywords(createSBNegativeKeywordsParams)

// Gets a sponsored brands negative keyword specified by identifier.
sponsoredBrandsNegativeKeywordsOperation.getNegativeKeyword(123)

// Updates one or more sponsored brands negative keywords.
const updateSBNegativeKeywordsParams: UpdateSponsoredBrandsNegativeKeywordParams[] = [
  {
    campaignId: 123,
    adGroupId: 123,
    keywordId: 123,
    state: 'archived',
  },
]
sponsoredBrandsNegativeKeywordsOperation.updateNegativeKeywords(updateSBNegativeKeywordsParams)

// Sets the keyword status to archived.
sponsoredProductsAdGroupKeywordsOperation.archiveBiddableKeyword(123)

// Creates one or more keywords.
const createSPKeywordParams: CreateKeywordsParam[] = [
  {
    campaignId: 123,
    adGroupId: 123,
    keywordText: 'Apple',
    matchType: 'broad',
    state: 'paused',
  },
]
sponsoredProductsAdGroupKeywordsOperation.createKeywords(createSPKeywordParams)

// Retrieves a sponsored products keyword by ID.
sponsoredProductsAdGroupKeywordsOperation.getBiddableKeyword(123)

// Retrieves a sponsored products keyword and its extended fields by ID.
sponsoredProductsAdGroupKeywordsOperation.getBiddableKeywordExtended(123)

// Retrieves a list of sponsored products keywords satisfying optional criteria for Sponsored Products.
sponsoredProductsAdGroupKeywordsOperation.listBiddableKeywords()

// Retrieves a list of sponsored products keywords and its extended fields satisfying optional criteria for Sponsored Products.
sponsoredProductsAdGroupKeywordsOperation.listBiddableKeywordsExtended()

// Updates one or more sponsored products keywords.
const updateSPKeywordsParams: UpdateKeywordsParam[] = [
  {
    keywordId: 123,
    state: 'paused',
    bid: 1,
  },
]
sponsoredProductsAdGroupKeywordsOperation.updateKeywords(updateSPKeywordsParams)

// Archive a single sponsored products negative ad group-level keyword.
sponsoredProductsAdGroupNegativeKeywordsOperation.archiveNegativeKeyword(123)

// Creates one or more sponsored products negative keywords.
const createSPNegativeKeywordParams: CreateNegativeKeywordsParam[] = [
  {
    campaignId: 123,
    adGroupId: 123,
    keywordText: 'Apple',
    matchType: 'negativeExact',
    state: 'paused',
  },
]
sponsoredProductsAdGroupNegativeKeywordsOperation.createNegativeKeywords(
  createSPNegativeKeywordParams,
)

// Retrieves a sponsored products negative keyword by ID.
sponsoredProductsAdGroupNegativeKeywordsOperation.getNegativeKeyword(123)

// Retrieves a sponsored products negative keyword and its extended fields by ID.
sponsoredProductsAdGroupNegativeKeywordsOperation.getNegativeKeywordExtended(123)

// Retrieves a list of sponsored products negative keywords satisfying optional criteria.
sponsoredProductsAdGroupNegativeKeywordsOperation.listNegativeKeywords()

// Retrieves a list of sponsored products negative keywords with extended fields satisfying optional criteria.
sponsoredProductsAdGroupNegativeKeywordsOperation.listNegativeKeywordsExtended()

// Updates one or more sponsored products negative keywords.
const updateSPNegativeKeywordsParams: UpdateNegativeKeywordsParam[] = [
  {
    keywordId: 123,
    state: 'archived',
  },
]
sponsoredProductsAdGroupNegativeKeywordsOperation.updateNegativeKeywords(
  updateSPNegativeKeywordsParams,
)

// Sets the sponsored products campaign negative keyword status to deleted.
sponsoredProductsCampaignNegativeKeywordsOperation.archiveCampaignNegativeKeyword(123)

// Creates one or more sponsored products campaign negative keywords.
const createCampaignNegativeKeywordsParams: CreateCampaignNegativeKeywordsParam[] = [
  {
    campaignId: 123,
    keywordText: 'Apple',
    matchType: 'negativeExact',
    state: 'enabled',
  },
]
sponsoredProductsCampaignNegativeKeywordsOperation.createCampaignNegativeKeywords(
  createCampaignNegativeKeywordsParams,
)

// Retrieves a sponsored products campaign negative keyword by ID.
sponsoredProductsCampaignNegativeKeywordsOperation.getCampaignNegativeKeyword(123)

// Retrieves a sponsored products campaign negative keyword and its extended fields by ID.
sponsoredProductsCampaignNegativeKeywordsOperation.getCampaignNegativeKeywordExtended(123)

// Retrieves a list of sponsored products campaign negative keywords satisfying optional criteria.
sponsoredProductsCampaignNegativeKeywordsOperation.listCampaignNegativeKeywords()

// Retrieves a list of sponsored products campaign negative keywords with extended fields satisfying optional criteria.
sponsoredProductsCampaignNegativeKeywordsOperation.listCampaignNegativeKeywordsExtended()

// Updates one or more sponsored products campaign negative keywords.
const updateCampaignNegativeKeywordsParams: UpdateCampaignNegativeKeywordsParam[] = [
  {
    keywordId: 123,
    state: 'enabled',
  },
]
sponsoredProductsCampaignNegativeKeywordsOperation.updateCampaignNegativeKeywords(
  updateCampaignNegativeKeywordsParams,
)
