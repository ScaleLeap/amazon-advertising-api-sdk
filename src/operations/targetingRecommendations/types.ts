import * as t from 'io-ts'
import { createEnumType } from '../commons/types'

export enum SBProductRecommendationFilterTypeEnum {
  ASINS = 'ASINS',
}
export const SBProductRecommendationFilterType = createEnumType<
  SBProductRecommendationFilterTypeEnum
>(SBProductRecommendationFilterTypeEnum)

export const SBProductRecommendationsRequest = t.strict({
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
   * Restricts recommendations to the criteria specified in the filters.
   */
  filters: t.array(
    t.strict({
      filterType: SBProductRecommendationFilterType,
      values: t.array(t.string),
    }),
  ),
})
export type SBProductRecommendationsRequest = t.TypeOf<typeof SBProductRecommendationsRequest>

export const SBProductRecommendationsResponse = t.strict({
  /**
   * Operations that return paginated results include a pagination token in this field.
   * To retrieve the next page of results, call the same operation and specify this token in the request.
   * If the NextToken field is empty, there are no further results.
   */
  nextToken: t.string,

  recommendedProducts: t.array(
    t.strict({
      /**
       * The recommended target ASIN.
       */
      recommendedTargetAsin: t.string,
    }),
  ),
})
export type SBProductRecommendationsResponse = t.TypeOf<typeof SBProductRecommendationsResponse>

export const SBCategoryRecommendationsRequest = t.strict({
  /**
   * A list of ASINs.
   */
  asins: t.array(t.string),
})
export type SBCategoryRecommendationsRequest = t.TypeOf<typeof SBCategoryRecommendationsRequest>

export const CategoryId = t.number
export type CategoryId = t.TypeOf<typeof CategoryId>

const SBCategoryResponse = t.strict({
  /**
   * The category identifier.
   */
  id: CategoryId,

  /**
   * The category name.
   */
  name: t.string,

  /**
   * Set to true if the category can be targeted in a targeting expression, and false if not.
   */
  isTargetable: t.boolean,

  /**
   * The path of the category within the category catalogue.
   */
  path: t.string,
})

export const SBCategoryRecommendationsResponse = t.strict({
  categoryRecommendationResults: t.array(SBCategoryResponse),
})
export type SBCategoryRecommendationsResponse = t.TypeOf<typeof SBCategoryRecommendationsResponse>
