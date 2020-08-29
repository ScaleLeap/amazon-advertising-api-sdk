import * as t from 'io-ts'
import { ListPagination } from '../commons/types'
import { CampaignId, CampaignIds } from '../campaigns/types'
import { AdGroupId, AdGroupIds } from '../ad-groups/types'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'

export const TargetId = t.number
export type TargetId = t.TypeOf<typeof TargetId>

export const TargetIds = t.array(TargetId)
export type TargetIds = t.TypeOf<typeof TargetIds>

export const TargetingClauseState = t.union([
  t.literal('enabled'),
  t.literal('paused'),
  t.literal('archived'),
])
export type TargetingClauseState = t.TypeOf<typeof TargetingClauseState>

export const TargetingExpressionType = t.union([
  t.literal('asinCategorySameAs'),
  t.literal('asinBrandSameAs'),
  t.literal('asinPriceLessThan'),
  t.literal('asinPriceBetween'),
  t.literal('asinPriceGreaterThan'),
  t.literal('asinReviewRatingLessThan'),
  t.literal('asinReviewRatingBetween'),
  t.literal('asinReviewRatingGreaterThan'),
  t.literal('asinSameAs'),
  t.literal('asinIsPrimeShippingEligible'),
  t.literal('asinAgeRangeSameAs'),
  t.literal('asinGenreSameAs'),
  t.literal('queryHighRelMatches'),
  t.literal('queryBroadRelMatches'),
  t.literal('asinSubstituteRelated'),
  t.literal('asinAccessoryRelated'),
])
export type TargetingExpressionType = t.TypeOf<typeof TargetingExpressionType>

export const TargetingExpression = t.intersection([
  t.strict({
    /**
     * The type of intent
     */
    type: TargetingExpressionType,
  }),
  t.partial({
    /**
     * The value which should be targeted
     */
    value: t.string,
  }),
])
export type TargetingExpression = t.TypeOf<typeof TargetingExpression>

export const TargetingExpressions = t.array(TargetingExpression)
export type TargetingExpressions = t.TypeOf<typeof TargetingExpressions>

/**
 * The type of expression
 */
export const ExpressionType = t.union([t.literal('auto'), t.literal('manual')])
export type ExpressionType = t.TypeOf<typeof ExpressionType>

/**
 * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
 */
export const TargetingClauseServingStatus = t.union([
  t.literal('TARGETING_CLAUSE_ARCHIVED'),
  t.literal('TARGETING_CLAUSE_PAUSED'),
  t.literal('TARGETING_CLAUSE_STATUS_LIVE'),
  t.literal('TARGETING_CLAUSE_POLICING_SUSPENDED'),
  t.literal('CAMPAIGN_OUT_OF_BUDGET'),
  t.literal('AD_GROUP_PAUSED'),
  t.literal('AD_GROUP_ARCHIVED'),
  t.literal('CAMPAIGN_PAUSED'),
  t.literal('CAMPAIGN_ARCHIVED'),
  t.literal('ACCOUNT_OUT_OF_BUDGET'),
  t.literal('PORTFOLIO_ENDED'), // the docs don't mention to this type
])
export type TargetingClauseServingStatus = t.TypeOf<typeof TargetingClauseServingStatus>

export const TargetingClause = t.intersection([
  t.strict({
    /**
     * The ID of the target
     */
    targetId: TargetId,

    /**
     * The ID of the campaign to which this target belongs
     */
    campaignId: CampaignId,

    /**
     * The ID of the ad group to which this target belongs.
     */
    adGroupId: AdGroupId,

    /**
     * Advertiser-specified state of the target
     */
    state: TargetingClauseState,

    /**
     * The expression to match against search queries
     */
    expression: TargetingExpressions,

    /**
     * The type of expression
     */
    expressionType: ExpressionType,
  }),
  t.partial({
    /**
     * Bid used when ads are sourced using this target.
     */
    bid: t.number,
  }),
])
export type TargetingClause = t.TypeOf<typeof TargetingClause>

export const TargetingClauses = t.array(TargetingClause)
export type TargetingClauses = t.TypeOf<typeof TargetingClause>

export const TargetingClauseExtended = t.intersection([
  TargetingClause,
  t.strict({
    /**
     * The date the targeting was created as epoch time in milliseconds.
     */
    creationDate: DateFromNumber,

    /**
     * The date the targeting was last updated as epoch time in milliseconds.
     */
    lastUpdatedDate: DateFromNumber,

    /**
     * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
     */
    servingStatus: TargetingClauseServingStatus,
  }),
])
export type TargetingClauseExtended = t.TypeOf<typeof TargetingClauseExtended>

export const ProductRecommendationRequest = t.strict({
  /**
   * The number of recommendations to return in one page.
   */
  pageSize: t.number,

  /**
   * The number of pages to index into the result set
   */
  pageNumber: t.number,

  /**
   * A list of asins for which to get recommendations for
   */
  asins: t.array(t.string),
})
export type ProductRecommendationRequest = t.TypeOf<typeof ProductRecommendationRequest>

export const RecommendedTargetAsin = t.strict({
  /**
   * The recommended asin to target
   */
  recommendedTargetAsin: t.string,
})

export type RecommendedTargetAsin = t.TypeOf<typeof RecommendedTargetAsin>
export const RecommendedTargetAsins = t.array(RecommendedTargetAsin)

export const ProductRecommendationResponse = t.strict({
  /**
   * The number of recommendations from which there are to page through.
   */
  totalResultCount: t.number,

  /**
   * The number of pages to index into the result set
   */
  recommendedProducts: RecommendedTargetAsins,
})
export type ProductRecommendationResponse = t.TypeOf<typeof ProductRecommendationResponse>

export const CategoryId = t.number
export type CategoryId = t.TypeOf<typeof CategoryId>

export const CategoryResponse = t.strict({
  /**
   * The ID of the category
   */
  id: CategoryId,

  /**
   * The name of the category
   */
  name: t.string,

  /**
   * A boolean describing whether this category can be targeted or not in a targeting expression
   */
  isTargetable: t.boolean,

  /**
   * The path of the category within the category catalogue
   */
  path: t.string,
})
export type CategoryResponse = t.TypeOf<typeof CategoryResponse>

export const AgeRange = t.strict({
  /**
   * The id of the age range.
   */
  id: t.number,

  /**
   * The name of the age range
   */
  name: t.string,
})
export type AgeRange = t.TypeOf<typeof AgeRange>
export const AgeRanges = t.array(AgeRange)

export const BrandId = t.number
export type BrandId = t.TypeOf<typeof BrandId>

export const BrandResponse = t.strict({
  /**
   * The ID of the brand. This is for use in targeting expressions.
   */
  id: BrandId,

  /**
   * The name of the brand
   */
  name: t.string,
})
export type BrandResponse = t.TypeOf<typeof BrandResponse>
export const BrandResponses = t.array(BrandResponse)

export const RefinementsResponse = t.strict({
  /**
   * The ID of the category
   */
  categoryId: CategoryId,

  /**
   * An array of age ranges this category supports.  Not all categories have age ranges.
   */
  ageRanges: AgeRanges,

  /**
   * Brands that can be found within this category.
   */
  brands: BrandResponses,
})
export type RefinementsResponse = t.TypeOf<typeof RefinementsResponse>

export const TargetingClauseResponse = t.partial({
  /**
   * The ID of the target that was created/updated, if successful
   */
  targetId: TargetId,

  /**
   * An enumerated success or error code for machine use.
   */
  code: t.string,

  /**
   * A human-readable description of the error, if unsuccessful
   */
  details: t.string,
})
export type TargetingClauseResponse = t.TypeOf<typeof TargetingClauseResponse>

export const CreateTargetingClausesParams = t.partial({
  /**
   * The ID of the campaign to which this target belongs
   */
  campaignId: CampaignId,

  /**
   * The ID of the ad group to which this target belongs.
   */
  adGroupId: AdGroupId,

  /**
   * Advertiser-specified state of the target
   */
  state: TargetingClauseState,

  /**
   * The expression to match against search queries
   */
  expression: TargetingExpressions,

  /**
   * The type of expression
   */
  expressionType: ExpressionType,

  /**
   * Bid used when ads are sourced using this target.
   */
  bid: t.number,
})
export type CreateTargetingClausesParams = t.TypeOf<typeof CreateTargetingClausesParams>

export const ListTargetingClausesParams = t.intersection([
  ListPagination,
  t.partial({
    /**
     * Restricts results to targets with state within the specified comma-separated list.
     * Possible filter types are: enabled, paused, or archived
     */
    stateFilter: TargetingClauseState,

    /**
     * Restricts results to targets within campaigns specified in comma-separated list
     */
    campaignIdFilter: CampaignIds,

    /**
     * Restricts results to targets within ad groups specified in comma-separated list
     */
    adGroupIdFilter: AdGroupIds,

    /**
     * Restricts results to targets with the specified target Ids specified in comma-separated list
     */
    targetIdFilter: TargetIds,
  }),
])
export type ListTargetingClausesParams = t.TypeOf<typeof ListTargetingClausesParams>

export const UpdateTargetingClausesParams = t.partial({
  /**
   * The ID of the target
   */
  targetId: TargetId,

  /**
   * The ID of the campaign to which this target belongs
   */
  campaignId: CampaignId,

  /**
   * The ID of the ad group to which this target belongs.
   */
  adGroupId: AdGroupId,

  /**
   * Advertiser-specified state of the target
   */
  state: TargetingClauseState,

  /**
   * The expression to match against search queries
   */
  expression: TargetingExpressions,

  /**
   * The type of expression
   */
  expressionType: ExpressionType,

  /**
   * Bid used when ads are sourced using this target.
   */
  bid: t.number,
})
export type UpdateTargetingClausesParams = t.TypeOf<typeof UpdateTargetingClausesParams>

export const GetBrandRecommendationsParams = t.partial({
  keyword: t.string,
  categoryId: CategoryId,
})

export type GetBrandRecommendationsParams = t.TypeOf<typeof GetBrandRecommendationsParams>

// Sponsored brands product targeting types

/**
 * A list of target states.
 */
export const SponsoredBrandsTargetState = t.union([
  t.literal('ENABLED'),
  t.literal('PAUSED'),
  t.literal('PENDING'),
  t.literal('ARCHIVED'),
  t.literal('DRAFT'),
])
export type SponsoredBrandsTargetState = t.TypeOf<typeof SponsoredBrandsTargetState>

export const SponsoredBrandsFilterType = t.union([
  t.literal('STATE'),
  t.literal('CAMPAIGN_ID'),
  t.literal('AD_GROUP_ID'),
])
export type SponsoredBrandsFilterType = t.TypeOf<typeof SponsoredBrandsFilterType>

const SponsoredBrandsFilterValue = t.union([SponsoredBrandsTargetState, CampaignId, AdGroupId])

const SponsoredBrandsTargetFilter = t.strict({
  filterType: SponsoredBrandsFilterType,
  values: t.array(SponsoredBrandsFilterValue),
})
type SponsoredBrandsTargetFilter = t.TypeOf<typeof SponsoredBrandsTargetFilter>

const SponsoredBrandsTargetFilters = t.array(SponsoredBrandsTargetFilter)
type SponsoredBrandsTargetFilters = t.TypeOf<typeof SponsoredBrandsTargetFilters>

export const SponsoredBrandsListTargetsRequest = t.strict({
  /**
   * Operations that return paginated results include a pagination token in this field.
   * To retrieve the next page of results, call the same operation and specify this token in the request.
   * If the NextToken field is empty, there are no further results.
   */
  nextToken: t.string,

  /**
   * Sets a limit on the number of results returned by an operation.
   */
  maxResults: t.number,

  /**
   * Restricts results to targets with the specified filters.
   * Filters are inclusive. Filters are joined using 'and' logic.
   * Specify one type of each filter.
   * Specifying multiples of the same type of filter results in an error.
   */
  filters: SponsoredBrandsTargetFilters,
})
export type SponsoredBrandsListTargetsRequest = t.TypeOf<typeof SponsoredBrandsListTargetsRequest>

export const SponsoredBrandsProductPredicateType = t.union([
  t.literal('asinCategorySameAs'),
  t.literal('asinBrandSameAs'),
  t.literal('asinPriceLessThan'),
  t.literal('asinPriceBetween'),
  t.literal('asinPriceGreaterThan'),
  t.literal('asinReviewRatingLessThan'),
  t.literal('asinReviewRatingBetween'),
  t.literal('asinReviewRatingGreaterThan'),
  t.literal('asinSameAs'),
])
export type SponsoredBrandsProductPredicateType = t.TypeOf<
  typeof SponsoredBrandsProductPredicateType
>

export const SponsoredBrandsExpression = t.strict({
  type: SponsoredBrandsProductPredicateType,
  value: t.string,
})
export type SponsoredBrandsExpression = t.TypeOf<typeof SponsoredBrandsExpression>

export const SponsoredBrandsExpressions = t.array(SponsoredBrandsExpression)
export type SponsoredBrandsExpressions = t.TypeOf<typeof SponsoredBrandsExpressions>

export const SponsoredBrandsResolvedExpression = t.strict({
  type: SponsoredBrandsProductPredicateType,
  value: t.string,
})
export type SponsoredBrandsResolvedExpression = t.TypeOf<typeof SponsoredBrandsResolvedExpression>

export const SponsoredBrandsResolvedExpressions = t.array(SponsoredBrandsResolvedExpression)
export type SponsoredBrandsResolvedExpressions = t.TypeOf<typeof SponsoredBrandsResolvedExpressions>

export const SponsoredBrandsExpressionState = t.union([
  t.literal('enabled'),
  t.literal('paused'),
  t.literal('pending'),
  t.literal('archived'),
  t.literal('draft'),
])
export type SponsoredBrandsExpressionState = t.TypeOf<typeof SponsoredBrandsExpressionState>

export const SponsoredBrandsTargetingClause = t.strict({
  /**
   * The target identifier.
   */
  targetId: TargetId,

  /**
   * The identifier of the ad group to which the target is associated.
   */
  adGroupId: AdGroupId,

  /**
   * The identifier of the campaign to which the target is associated.
   */
  campaignId: CampaignId,

  expressions: SponsoredBrandsExpression,

  resolvedExpressions: SponsoredBrandsResolvedExpression,

  state: SponsoredBrandsExpressionState,

  /**
   * The associated bid.
   * Note that this value must be less than the budget associated with the Advertiser account.
   * For more information, see supported features.
   */
  bid: t.number,
})
export type SponsoredBrandsTargetingClause = t.TypeOf<typeof SponsoredBrandsTargetingClause>

export const SponsoredBrandsTargetingClauses = t.array(SponsoredBrandsTargetingClause)
export type SponsoredBrandsTargetingClauses = t.TypeOf<typeof SponsoredBrandsTargetingClauses>

export const SponsoredBrandsListTargetsResponse = t.strict({
  /**
   * Operations that return paginated results include a pagination token in this field.
   * To retrieve the next page of results, call the same operation and specify this token in the request.
   * If the NextToken field is empty, there are no further results.
   */
  nextToken: t.string,

  targets: SponsoredBrandsTargetingClauses,
})
export type SponsoredBrandsListTargetsResponse = t.TypeOf<typeof SponsoredBrandsListTargetsResponse>

export const SponsoredBrandsUpdateTargetsRequest = t.partial({
  /**
   * The identifier of the target.
   */
  targetId: TargetId,

  /**
   * The identifier of the ad group to which the target is associated.
   */
  adGroupId: AdGroupId,

  /**
   * The identifier of the campaign to which the target is associated.
   */
  campaignId: CampaignId,

  /**
   * The state of the target.
   */
  state: SponsoredBrandsExpressionState,

  /**
   * The associated bid.
   * Note that this value must be less than the budget associated with the Advertiser account.
   * For more information, see supported features.
   */
  bid: t.number,
})
export type SponsoredBrandsUpdateTargetsRequest = t.TypeOf<
  typeof SponsoredBrandsUpdateTargetsRequest
>

export const SponsoredBrandsUpdateTargetsResponse = t.strict({
  /**
   * Lists the successfully updated targets.
   * Note that targets in the response are correlated to targets in the request using the targetRequestIndex field.
   * For example, if targetRequestIndex is set to 2, the values correlate to the third target object in the request.
   */
  updateTargetSuccessResults: t.array(
    t.strict({
      /**
       * The identifier of a target.
       */
      targetId: TargetId,

      /**
       * Correlates the target to the target array index specified in the request. Zero-based.
       */
      targetRequestIndex: t.number,
    }),
  ),

  /**
   * Lists errors that occured during target update.
   * Note that errors are correlated to target update requests by the targetRequestIndex field.
   * This field corresponds to the order of the target in the request.
   * For example, if targetRequestIndex is set to 2, the values correlate to the third target object in the request array.
   */
  updateTargetErrorResults: t.array(
    t.strict({
      code: t.string,

      details: t.string,

      targetId: TargetId,

      targetRequestIndex: t.number,
    }),
  ),
})
export type SponsoredBrandsUpdateTargetsResponse = t.TypeOf<
  typeof SponsoredBrandsUpdateTargetsResponse
>

const SponsoredBrandsCreateTargetingClauseRequest = t.strict({
  /**
   * The identifier of an existing ad group.
   * The newly created target is associated to this ad group.
   */
  adGroupId: AdGroupId,

  /**
   * The identifier of an existing campaign.
   * The newly created target is associated to this campaign.
   */
  campaignId: CampaignId,

  expressions: SponsoredBrandsExpression,

  /**
   * The associated bid.
   * Note that this value must be less than the budget associated with the Advertiser account.
   * For more information, see supported features.
   */
  bid: t.number,
})
type SponsoredBrandsCreateTargetingClauseRequest = t.TypeOf<
  typeof SponsoredBrandsCreateTargetingClauseRequest
>

export const SponsoredBrandsCreateTargetsRequest = t.strict({
  targets: t.array(SponsoredBrandsCreateTargetingClauseRequest),
})
export type SponsoredBrandsCreateTargetsRequest = t.TypeOf<
  typeof SponsoredBrandsCreateTargetsRequest
>

export const SponsoredBrandsCreateTargetsResponse = t.strict({
  /**
   * Lists the successfully created targets.
   * Note that targets in the response are correlated to targets in the request using the targetRequestIndex field.
   * For example, if targetRequestIndex is set to 2, the values correlate to the third target object in the request.
   */
  createTargetSuccessResults: t.array(
    t.strict({
      /**
       * Correlates the target to the target array index specified in the request. Zero-based.
       */
      targetRequestIndex: t.number,

      /**
       * The identifier of a target.
       */
      targetId: TargetId,
    }),
  ),

  /**
   * Lists errors that occured during target creation.
   * Note that errors are correlated to target create requests by the targetRequestIndex field.
   * This field corresponds to the order of the target object in the request.
   * For example, if targetRequestIndex is set to 3, an error occured during creation of the fourth target in the request.
   */
  createTargetErrorResults: t.array(
    t.strict({
      code: t.string,

      details: t.string,

      targetId: TargetId,

      targetRequestIndex: t.number,
    }),
  ),
})
export type SponsoredBrandsCreateTargetsResponse = t.TypeOf<
  typeof SponsoredBrandsCreateTargetsResponse
>

export const SponsoredBrandsTargetingClauseResponse = t.partial({
  /**
   * The target identifier.
   */
  targetId: TargetId,

  code: t.string,

  details: t.string,
})
export type SponsoredBrandsTargetingClauseResponse = t.TypeOf<
  typeof SponsoredBrandsTargetingClauseResponse
>

export const SponsoredBrandsBatchGetTargetsRequest = t.strict({
  targetIds: TargetIds,
})
export type SponsoredBrandsBatchGetTargetsRequest = t.TypeOf<
  typeof SponsoredBrandsBatchGetTargetsRequest
>

export const SponsoredBrandsBatchGetTargetsResponse = t.strict({
  /**
   * A list of targeting clause objects.
   * Note that each targeting clause object is correlated to the list request by the targetRequestIndex field.
   * This field corresponds to the order of the targeting identifier in the request.
   */
  batchGetTargetSuccessResults: t.array(
    t.strict({
      targetingClause: SponsoredBrandsTargetingClause,

      targetRequestIndex: t.number,
    }),
  ),

  /**
   * A list of target identifiers that were not found.
   * Note that each target identifier is correlated to the list request by the targetRequestIndex field.
   * This field corresponds to the order of the target identifier in the request.
   */
  batchGetTargetErrorResults: t.array(
    t.strict({
      code: t.string,

      details: t.string,

      targetId: TargetId,

      targetRequestIndex: t.number,
    }),
  ),
})
export type SponsoredBrandsBatchGetTargetsResponse = t.TypeOf<
  typeof SponsoredBrandsBatchGetTargetsResponse
>
