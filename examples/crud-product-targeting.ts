import { amazonAdvertising } from './auth'

import {
  SponsoredBrandsBatchGetTargetsRequest,
  SponsoredBrandsCreateTargetsRequest,
  SponsoredBrandsListTargetsRequest,
  SponsoredBrandsUpdateTargetsRequest,
  ProductRecommendationRequest,
  CreateTargetingClausesParams,
  UpdateTargetingClausesParams,
} from '../src'

const sponsoredBrandsProductTargetingOperation = amazonAdvertising.sponsoredBrandsProductTargeting
const sponsoredProductsProductTargetingOperation =
  amazonAdvertising.sponsoredProductsProductTargeting
const BID = 1
const CAMPAIGN_ID = 123
const AD_GROUP_ID = 456
const TARGET_ID = 789
const CATEGORY_ID = 123
const ASIN = 'B07663Z46Z'
const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']
const PAGE_SIZE = 10
const KEYWORD = 'Apple'

// Archives a target specified by identifier.
sponsoredBrandsProductTargetingOperation.archiveTarget(TARGET_ID)

// Gets one or more product targets specified by identifiers.
const batchGetTargetsRequest: SponsoredBrandsBatchGetTargetsRequest = {
  targetIds: [TARGET_ID],
}
sponsoredBrandsProductTargetingOperation.batchGetTargets(batchGetTargetsRequest)

// Create one or more new targets.
const createTargetsRequest: SponsoredBrandsCreateTargetsRequest = {
  targets: [
    {
      adGroupId: AD_GROUP_ID,
      campaignId: CAMPAIGN_ID,
      expressions: {
        type: 'asinBrandSameAs',
        value: 'Apple',
      },
      bid: BID,
    },
  ],
}
sponsoredBrandsProductTargetingOperation.createTargets(createTargetsRequest)

// Gets a target specified by identifier.
sponsoredBrandsProductTargetingOperation.getTarget(TARGET_ID)

// Gets a list of product targets associated with the client identifier passed in the authorization header, filtered by specified criteria.
const listTargetsRequest: SponsoredBrandsListTargetsRequest = {
  nextToken: 'string',
  maxResults: 1,
  filters: [
    {
      filterType: 'STATE',
      values: ['PAUSED'],
    },
    {
      filterType: 'CAMPAIGN_ID',
      values: [CAMPAIGN_ID],
    },
    {
      filterType: 'AD_GROUP_ID',
      values: [AD_GROUP_ID],
    },
  ],
}
sponsoredBrandsProductTargetingOperation.listTargets(listTargetsRequest)

// Updates one or more targets.
const updateTargetsRequest: SponsoredBrandsUpdateTargetsRequest[] = [
  {
    targetId: TARGET_ID,
    adGroupId: AD_GROUP_ID,
    campaignId: CAMPAIGN_ID,
    state: 'archived',
    bid: BID,
  },
]
sponsoredBrandsProductTargetingOperation.updateTargets(updateTargetsRequest)

// Set the status of targeting clauses to archived.
sponsoredProductsProductTargetingOperation.archiveTargetingClause(TARGET_ID)

// Generate list of recommended products to target, based on the ASIN that is input.
const productRecommendationRequest: ProductRecommendationRequest = {
  pageSize: PAGE_SIZE,
  pageNumber: 1,
  asins: ASINS,
}
sponsoredProductsProductTargetingOperation.createTargetRecommendations(productRecommendationRequest)

// Creates one or more targeting expressions.
const createTargetingClausesParams: CreateTargetingClausesParams[] = [
  {
    campaignId: CAMPAIGN_ID,
    adGroupId: AD_GROUP_ID,
    state: 'paused',
    expression: [
      {
        type: 'asinSameAs',
        value: ASIN,
      },
    ],
    expressionType: 'manual',
    bid: 10,
  },
]
sponsoredProductsProductTargetingOperation.createTargetingClauses(createTargetingClausesParams)

// Get recommended brands for Sponsored Products.
sponsoredProductsProductTargetingOperation.getBrandRecommendations({ keyword: KEYWORD })

// Get refinements for a single category.
sponsoredProductsProductTargetingOperation.getRefinementsForCategory(CATEGORY_ID)

// Gets the list of targeting categories.
sponsoredProductsProductTargetingOperation.getTargetingCategories(ASINS)

// Retrieve a targeting clause with a specific target ID.
sponsoredProductsProductTargetingOperation.getTargetingClause(TARGET_ID)

// Retrieve a targeting clause with additional attributes using a specific target ID.
sponsoredProductsProductTargetingOperation.getTargetingClauseExtended(TARGET_ID)

// Retrieves a list of targeting clauses.
sponsoredProductsProductTargetingOperation.listTargetingClauses()

// Retrieve a list of targeting clauses with extended properties.
sponsoredProductsProductTargetingOperation.listTargetingClausesExtended()

// Update one or more targeting clauses.
const updateTargetingClausesParams: UpdateTargetingClausesParams[] = [
  {
    campaignId: CAMPAIGN_ID,
    adGroupId: AD_GROUP_ID,
    targetId: TARGET_ID,
    state: 'archived',
    expression: [
      {
        type: 'asinSameAs',
        value: ASIN,
      },
    ],
    expressionType: 'manual',
    bid: 10,
  },
]
sponsoredProductsProductTargetingOperation.updateTargetingClauses(updateTargetingClausesParams)
