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
} from '../src'

const sponsoredBrandsProductTargetingOperation = amazonAdvertising.sponsoredBrandsProductTargeting
const ID = 123
const BID = 1

// Archives a negative target specified by identifier.
sponsoredBrandsProductTargetingOperation.archiveNegativeTarget(ID)

// Archives a target specified by identifier.
sponsoredBrandsProductTargetingOperation.archiveTarget(ID)

// Gets one or more product negative targets specified by identifiers.
const batchGetNegativeTargetsRequest: SponsoredBrandsBatchGetNegativeTargetsRequest = {
  targetIds: [ID],
}
sponsoredBrandsProductTargetingOperation.batchGetNegativeTargets(batchGetNegativeTargetsRequest)

// Gets one or more product targets specified by identifiers.
const batchGetTargetsRequest: SponsoredBrandsBatchGetTargetsRequest = {
  targetIds: [ID],
}
sponsoredBrandsProductTargetingOperation.batchGetTargets(batchGetTargetsRequest)

// Create one or more new negative targets.
const createNegativeTargetsRequest: SponsoredBrandsCreateNegativeTargetsRequest = {
  negativeTargets: [
    {
      adGroupId: ID,
      campaignId: ID,
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
      adGroupId: ID,
      campaignId: ID,
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
sponsoredBrandsProductTargetingOperation.getNegativeTarget(ID)

// Gets a target specified by identifier.
sponsoredBrandsProductTargetingOperation.getTarget(ID)

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
      values: [ID],
    },
    {
      filterType: 'AD_GROUP_ID',
      values: [ID],
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
      values: [ID],
    },
    {
      filterType: 'AD_GROUP_ID',
      values: [ID],
    },
  ],
}
sponsoredBrandsProductTargetingOperation.listTargets(listTargetsRequest)

// Updates one or more negative targets.
const updateNegativeTargetsRequest: SponsoredBrandsUpdateNegativeTargetsRequest = {
  negativeTargets: [
    {
      targetId: ID,
      adGroupId: ID,
      state: 'archived',
    },
  ],
}
sponsoredBrandsProductTargetingOperation.updateNegativeTargets(updateNegativeTargetsRequest)

// Updates one or more targets.
const updateTargetsRequest: SponsoredBrandsUpdateTargetsRequest[] = [
  {
    targetId: ID,
    adGroupId: ID,
    campaignId: ID,
    state: 'archived',
    bid: BID,
  },
]
sponsoredBrandsProductTargetingOperation.updateTargets(updateTargetsRequest)
