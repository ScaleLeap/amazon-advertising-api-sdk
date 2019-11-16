import * as t from 'io-ts'
import { CurrencyCodeType, createEnumType } from '../commons/types'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'

export const PortfolioId = t.number
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
  currencyCode: CurrencyCodeType,

  /**
   * The policy of the portfolio.
   */
  policy: t.literal('dateRange'),

  /**
   * The start date of the portfolio.
   */
  startDate: t.string,

  /**
   * The end date of the portfolio.
   */
  endDate: t.union([t.string, t.null]),
})

/**
 * The state of the portfolio
 */
export enum PortfolioStateEnum {
  ENABLED = 'enabled',
}
export const PortfolioStateType = createEnumType<PortfolioStateEnum>(PortfolioStateEnum)
export type PortfolioStateType = t.TypeOf<typeof PortfolioStateType>

export const Portfolio = t.strict({
  /**
   * The ID of the portfolio.
   */
  portfolioId: PortfolioId,

  /**
   * The name of the portfolio.
   */
  name: PortfolioName,

  /**
   * The budget of the portfolio.
   */
  budget: PortfolioBudget,

  /**
   * States if the portfolio is still within budget.
   */
  inBudget: t.boolean,

  /**
   * The status of the portfolio.
   */
  state: PortfolioStateType,
})
export type Portfolio = t.TypeOf<typeof Portfolio>

export const PortfolioExtended = t.intersection([
  Portfolio,
  t.strict({
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

export enum PortfolioMutationResponseCodeEnum {
  SUCCESS = 'SUCCESS',
  INVALID_ARGUMENT = 'INVALID_ARGUMENT',
  NOT_FOUND = 'NOT_FOUND',
}

export const PortfolioMutationResponseCodeType = createEnumType<PortfolioMutationResponseCodeEnum>(
  PortfolioMutationResponseCodeEnum,
)
export type PortfolioMutationResponseCodeType = t.TypeOf<typeof PortfolioMutationResponseCodeType>

export const PortfolioMutationResponse = t.strict({
  /**
   * The mutation status of the portfolio.
   */
  code: PortfolioMutationResponseCodeType,

  /**
   * The mutation status of the portfolio.
   */
  portfolioId: PortfolioId,
})
export type PortfolioMutationResponse = t.TypeOf<typeof PortfolioMutationResponse>

export const ListPortfoliosParams = t.strict({
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
  portfolioStateFilter: PortfolioStateType,
})
export type ListPortfoliosParams = t.TypeOf<typeof ListPortfoliosParams>

export const CreatePortfoliosParams = t.strict({
  /**
   * The name of the requested portfolio.
   */
  name: PortfolioName,

  /**
   * The portfolio budget. If budget is specified, then policy and startDate are required fields. Mutable fields are: amount, policy, startDate, and endDate.
   */
  budget: PortfolioBudget,

  /**
   * The state of the requested portfolio.
   */
  state: PortfolioStateType,
})
export type CreatePortfoliosParams = t.TypeOf<typeof CreatePortfoliosParams>

export const UpdatePortfoliosParams = t.intersection([
  t.strict({
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
    state: PortfolioStateType,
  }),
])
export type UpdatePortfoliosParams = t.TypeOf<typeof UpdatePortfoliosParams>
