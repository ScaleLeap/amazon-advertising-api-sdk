import * as t from 'io-ts'
import { AmazonMarketplaceAdvertisingCurrencyType } from '../commons/types'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'

export const PortfolioId = t.string
export type PortfolioId = t.TypeOf<typeof PortfolioId>

const PortfolioName = t.string
type PortfolioName = t.TypeOf<typeof PortfolioName>

export const PortfolioBudget = t.partial({
  /**
   * The budget amount.
   */
  amount: t.number,

  /**
   * The currency code of the budget.
   */
  currencyCode: AmazonMarketplaceAdvertisingCurrencyType,

  /**
   * The policy of the portfolio.
   */
  policy: t.union([t.literal('dateRange'), t.literal('MonthlyRecurring')]),

  /**
   * The start date of the portfolio.
   */
  startDate: t.union([t.string, t.null]),

  /**
   * The end date of the portfolio.
   */
  endDate: t.union([t.string, t.null]),
})

/**
 * The state of the portfolio
 */
export const PortfolioState = t.literal('enabled')
export type PortfolioState = t.TypeOf<typeof PortfolioState>

/**
 * The mutation status of the portfolio.
 */
export const PortfolioResponseStatus = t.union([
  t.literal('SUCCESS'),
  t.literal('INVALID_ARGUMENT'),
  t.literal('NOT_FOUND'),
])
export type PortfolioResponseStatus = t.TypeOf<typeof PortfolioResponseStatus>

export const Portfolio = t.intersection([
  t.type({
    /**
     * The ID of the portfolio.
     */
    portfolioId: PortfolioId,

    /**
     * The name of the portfolio.
     */
    name: PortfolioName,

    /**
     * States if the portfolio is still within budget.
     */
    inBudget: t.boolean,

    /**
     * The status of the portfolio.
     */
    state: PortfolioState,
  }),
  t.partial({
    /**
     * The budget of the portfolio.
     */
    budget: PortfolioBudget,
  }),
])

export type Portfolio = t.TypeOf<typeof Portfolio>

export const PortfolioExtended = t.intersection([
  Portfolio,
  t.type({
    /**
     * The date the portfolio was created.
     */
    creationDate: DateFromNumber,

    /**
     * The date the portfolio was last updated.
     */
    lastUpdatedDate: DateFromNumber,

    /**
     * The serving status of the portfolio.
     */
    servingStatus: t.string,
  }),
])
export type PortfolioExtended = t.TypeOf<typeof PortfolioExtended>

export const PortfolioResponse = t.intersection([
  t.type({
    /**
     * The mutation status of the portfolio.
     */
    code: PortfolioResponseStatus,
  }),
  t.partial({
    portfolioId: PortfolioId,
    description: t.string,
  }),
])
export type PortfolioResponse = t.TypeOf<typeof PortfolioResponse>

export const ListPortfoliosParams = t.partial({
  /**
   * Retrieve the portfolios with the specified IDs.
   */
  portfolioIdFilter: PortfolioId,

  /**
   * Retrieve the portfolios with the specified names.
   */
  portfolioNameFilter: PortfolioName,

  /**
   * Retrieve the portfolios with the specified state.
   */
  portfolioStateFilter: PortfolioState,
})
export type ListPortfoliosParams = t.TypeOf<typeof ListPortfoliosParams>

export const CreatePortfoliosParams = t.intersection([
  t.type({
    /**
     * The name of the requested portfolio.
     */
    name: PortfolioName,
    /**
     * The state of the requested portfolio.
     */
    state: PortfolioState,
  }),
  t.partial({
    /**
     * The portfolio budget. If budget is specified, then policy and startDate are required fields. Mutable fields are: amount, policy, startDate, and endDate.
     */
    budget: PortfolioBudget,
  }),
])

export type CreatePortfoliosParams = t.TypeOf<typeof CreatePortfoliosParams>

export const UpdatePortfoliosParams = t.intersection([
  t.type({
    /**
     * The ID of the portfolio.
     */
    portfolioId: PortfolioId,
  }),
  t.partial({
    /**
     * The name of the requested portfolio.
     */
    name: PortfolioName,

    /**
     * The portfolio budget. Mutable fields are: amount, policy, startDate, and endDate.
     */
    budget: PortfolioBudget,

    /**
     * The state of the requested portfolio.
     */
    state: PortfolioState,
  }),
])
export type UpdatePortfoliosParams = t.TypeOf<typeof UpdatePortfoliosParams>
