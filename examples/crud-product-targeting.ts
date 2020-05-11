import { amazonAdvertising } from './auth'

import {
  SponsoredBrandsBatchGetNegativeTargetsRequest,
  SponsoredBrandsBatchGetTargetsRequest,
  SponsoredBrandsCreateNegativeTargetsRequest,
  SponsoredBrandsCreateTargetsRequest,
  SponsoredBrandsListNegativeTargetsRequest,
  SponsoredBrandsListTargetsRequest,
  SponsoredBrandsUpdateNegativeTargetsRequest,
  SponsoredBrandsUpdateTargetsRequest,
  CreateNegativeTargetingClausesParams,
  ProductRecommendationRequest,
  CreateTargetingClausesParams,
  UpdateNegativeTargetingClausesParams,
  UpdateTargetingClausesParams,
} from '../src'

const sponsoredBrandsProductTargetingOperation = amazonAdvertising.sponsoredBrandsProductTargeting
const sponsoredProductsProductTargetingOperation =
  amazonAdvertising.sponsoredProductsProductTargeting
const BID = 1
const CAMPAIGN_ID = 123
const AD_GROUP_ID = 456
const TARGET_ID = 789
const NEGATIVE_TARGET_ID = 123
const CATEGORY_ID = 123
const ASIN = 'B07663Z46Z'
const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']
const PAGE_SIZE = 10
const KEYWORD = 'Apple'

// Archives a negative target specified by identifier.
sponsoredBrandsProductTargetingOperation.archiveNegativeTarget(NEGATIVE_TARGET_ID)

// Archives a target specified by identifier.
sponsoredBrandsProductTargetingOperation.archiveTarget(TARGET_ID)

// Gets one or more product negative targets specified by identifiers.
const batchGetNegativeTargetsRequest: SponsoredBrandsBatchGetNegativeTargetsRequest = {
  targetIds: [NEGATIVE_TARGET_ID],
}
sponsoredBrandsProductTargetingOperation.batchGetNegativeTargets(batchGetNegativeTargetsRequest)

// Gets one or more product targets specified by identifiers.
const batchGetTargetsRequest: SponsoredBrandsBatchGetTargetsRequest = {
  targetIds: [TARGET_ID],
}
sponsoredBrandsProductTargetingOperation.batchGetTargets(batchGetTargetsRequest)

// Create one or more new negative targets.
const createNegativeTargetsRequest: SponsoredBrandsCreateNegativeTargetsRequest = {
  negativeTargets: [
    {
      adGroupId: AD_GROUP_ID,
      campaignId: CAMPAIGN_ID,
      expressions: {
        type: 'asinBrandSameAs',
        value: 'Apple',
      },
    },
  ],
}
sponsoredBrandsProductTargetingOperation.createNegativeTargets(createNegativeTargetsRequest)

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

// Gets a negative target specified by identifier.
sponsoredBrandsProductTargetingOperation.getNegativeTarget(NEGATIVE_TARGET_ID)

// Gets a target specified by identifier.
sponsoredBrandsProductTargetingOperation.getTarget(TARGET_ID)

// Gets a list of product negative targets associated with the client identifier passed in the authorization header, filtered by specified criteria.
const listNegativeTargetsRequest: SponsoredBrandsListNegativeTargetsRequest = {
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
sponsoredBrandsProductTargetingOperation.listNegativeTargets(listNegativeTargetsRequest)

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

// Updates one or more negative targets.
const updateNegativeTargetsRequest: SponsoredBrandsUpdateNegativeTargetsRequest = {
  negativeTargets: [
    {
      targetId: TARGET_ID,
      adGroupId: AD_GROUP_ID,
      state: 'archived',
    },
  ],
}
sponsoredBrandsProductTargetingOperation.updateNegativeTargets(updateNegativeTargetsRequest)

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

// Archive negative targeting clauses.
sponsoredProductsProductTargetingOperation.archiveNegativeTargetingClause(NEGATIVE_TARGET_ID)

// Set the status of targeting clauses to archived.
sponsoredProductsProductTargetingOperation.archiveTargetingClause(TARGET_ID)

// Create negative targeting clauses at the campaign level.
const createNegativeTargetingClausesParams: CreateNegativeTargetingClausesParams[] = [
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
  },
]
sponsoredProductsProductTargetingOperation.createNegativeTargetingClauses(
  createNegativeTargetingClausesParams,
)

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

// Get a specific negative targeting clause by targetId.
sponsoredProductsProductTargetingOperation.getNegativeTargetingClause(NEGATIVE_TARGET_ID)

// Retrieve a negative targeting clause with additional attributes using a specific target ID.
sponsoredProductsProductTargetingOperation.getNegativeTargetingClauseExtended(NEGATIVE_TARGET_ID)

// Get refinements for a single category.
sponsoredProductsProductTargetingOperation.getRefinementsForCategory(CATEGORY_ID)

// Gets the list of targeting categories.
sponsoredProductsProductTargetingOperation.getTargetingCategories(ASINS)

// Retrieve a targeting clause with a specific target ID.
sponsoredProductsProductTargetingOperation.getTargetingClause(TARGET_ID)

// Retrieve a targeting clause with additional attributes using a specific target ID.
sponsoredProductsProductTargetingOperation.getTargetingClauseExtended(TARGET_ID)

// Retrieves a list of negative targeting clauses.
sponsoredProductsProductTargetingOperation.listNegativeTargetingClauses()

// Retrieve a list of targeting clauses with extended properties.
sponsoredProductsProductTargetingOperation.listNegativeTargetingClausesExtended()

// Retrieves a list of targeting clauses.
sponsoredProductsProductTargetingOperation.listTargetingClauses()

// Retrieve a list of targeting clauses with extended properties.
sponsoredProductsProductTargetingOperation.listTargetingClausesExtended()

// Update negative targeting clauses.
const updateNegativeTargetingClausesParams: UpdateNegativeTargetingClausesParams[] = [
  {
    campaignId: CAMPAIGN_ID,
    adGroupId: AD_GROUP_ID,
    targetId: NEGATIVE_TARGET_ID,
    state: 'archived',
    expression: [
      {
        type: 'asinSameAs',
        value: ASIN,
      },
    ],
    expressionType: 'manual',
  },
]
sponsoredProductsProductTargetingOperation.updateNegativeTargetingClauses(
  updateNegativeTargetingClausesParams,
)

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
