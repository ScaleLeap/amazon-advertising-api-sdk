import { amazonAdvertising } from './auth'
import {
  SponsoredBrandsBatchGetNegativeTargetsRequest,
  SponsoredBrandsCreateNegativeTargetsRequest,
  SponsoredBrandsListNegativeTargetsRequest,
  SponsoredBrandsUpdateNegativeTargetsRequest,
} from '../src'

const CAMPAIGN_ID = 123
const AD_GROUP_ID = 456
const NEGATIVE_TARGET_ID = 123

// Gets one or more product negative targets specified by identifiers.
const batchGetNegativeTargetsRequest: SponsoredBrandsBatchGetNegativeTargetsRequest = {
  targetIds: [NEGATIVE_TARGET_ID],
}

const sponsoredBrandsNegativeTargetingOperation = amazonAdvertising.sponsoredBrandsNegativeTargeting

// Archives a negative target specified by identifier.
sponsoredBrandsNegativeTargetingOperation.archiveNegativeTarget(NEGATIVE_TARGET_ID)

sponsoredBrandsNegativeTargetingOperation.batchGetNegativeTargets(batchGetNegativeTargetsRequest)

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
sponsoredBrandsNegativeTargetingOperation.createNegativeTargets(createNegativeTargetsRequest)

// Gets a negative target specified by identifier.
sponsoredBrandsNegativeTargetingOperation.getNegativeTarget(NEGATIVE_TARGET_ID)

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
sponsoredBrandsNegativeTargetingOperation.listNegativeTargets(listNegativeTargetsRequest)

// Updates one or more negative targets.
const updateNegativeTargetsRequest: SponsoredBrandsUpdateNegativeTargetsRequest = {
  negativeTargets: [
    {
      targetId: NEGATIVE_TARGET_ID,
      adGroupId: AD_GROUP_ID,
      state: 'archived',
    },
  ],
}
sponsoredBrandsNegativeTargetingOperation.updateNegativeTargets(updateNegativeTargetsRequest)
