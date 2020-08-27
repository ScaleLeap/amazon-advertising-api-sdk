import * as t from 'io-ts'
import { ListPagination } from '../commons/types'

export const ReadinessStatus = t.union([
  /**
   * Indicates a product with a high number of detail page views in the past 28 days.
   * A product with this readiness status is likely to get the largest audience reach at a lower advertising cost of sales (ACOS).
   */
  t.literal('HIGH'),

  /**
   * Indicates a product with a medium number of detail page views in the past 28 days.
   * A product with this readiness status is likely to get a lower audience reach than the high readiness status using comparable bids.
   */
  t.literal('MEDIUM'),

  /**
   * Indicates a product with a low number of detail page views in the past 28 days.
   * A product with this readiness status is likely to get the lowest audience reach.
   * These products may require a higher maximum bid to have a significant audience reach.
   */
  t.literal('LOW'),

  /**
   * ASIN is not valid or is ineligible for advertising.
   */
  t.literal('NOT_APPLICABLE'),
])
export type ReadinessStatus = t.TypeOf<typeof ReadinessStatus>

export const ListSuggestedProductsParams = t.intersection([
  ListPagination,
  t.strict({
    /**
     * The list in the response is filtered to include only products that are eligible for advertising using the requested tactic.
     */
    tacticFilter: t.union([
      /**
       * Views Shoppers who viewed the detail pages of your advertised products or similar products.
       * This was formerly called remarketing, which is an alternative enum name.
       */
      t.literal('T00010'),

      /**
       * Views Shoppers who viewed the detail pages of your advertised products or similar products.
       */
      t.literal('remarketing'),
    ]),
  }),
  t.partial({
    /**
     * The returned response is filtered to include only eligible products with a readiness status value that matches those specified in the comma-delimited string.
     */
    readinessFilter: ReadinessStatus,
  }),
])
export type ListSuggestedProductsParams = t.TypeOf<typeof ListSuggestedProductsParams>

export const SuggestedProduct = t.strict({
  /**
   * The readinesss status indicates the likelihood of a product to meet advertiser objectives if advertised in a campaign of the specified tactic type.
   */
  readinessStatus: ReadinessStatus,

  /**
   * A list of ASINs.
   */
  asins: t.array(t.string),
})
export type SuggestedProduct = t.TypeOf<typeof SuggestedProduct>

export const ProductReadinessRequest = t.strict({
  /**
   * A comma separated list of product ASINs.
   */
  asins: t.array(t.string),

  /**
   * Filters the products to specified advertising tactic.
   * This is currently available for T00010 and remarketing tactics only.
   */
  tactic: t.union([
    /**
     * Views Shoppers who viewed the detail pages of your advertised products or similar products.
     * This was formerly called remarketing, which is an alternative enum name.
     */
    t.literal('T00010'),

    /**
     * Views Shoppers who viewed the detail pages of your advertised products or similar products.
     */
    t.literal('remarketing'),
  ]),
})
export type ProductReadinessRequest = t.TypeOf<typeof ProductReadinessRequest>

export const ProductReadinessResponse = t.strict({
  /**
   * The product ASIN.
   */
  asin: t.string,

  /**
   * The readinesss status indicates the likelihood of a product to meet advertiser objectives if advertised in a campaign of the specified tactic type.
   */
  readinessStatus: ReadinessStatus,
})
export type ProductReadinessResponse = t.TypeOf<typeof ProductReadinessResponse>
