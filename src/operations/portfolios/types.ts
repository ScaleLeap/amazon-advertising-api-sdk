import * as t from 'io-ts'

export const PortfolioId = t.number
export type PortfolioId = t.TypeOf<typeof PortfolioId>

const PortfolioName = t.string
type PortfolioName = t.TypeOf<typeof PortfolioName>

const CurrencyCode = t.union([
  t.literal('AUD'),
  t.literal('CAD'),
  t.literal('EUR'),
  t.literal('GBP'),
  t.literal('JPY'),
  t.literal('USD'),
])
export type CurrencyCode = t.TypeOf<typeof CurrencyCode>

export const PortfolioBudget = t.strict({
  amount: t.number,
  currencyCode: CurrencyCode,
  policy: t.literal('dateRange'),
  startDate: t.string,
  endDate: t.union([
    t.string,
    t.null
  ])
})

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
  state: t.union([
    t.literal('enabled'),
    t.null
  ]),
})
export type Portfolio = t.TypeOf<typeof Portfolio>

export const PortfolioExtended = t.intersection([
  Portfolio,
  t.strict({
    /**
     * The date the portfolio was created.
     */
    creationDate: t.number,

    /**
     * The date the portfolio was last updated.
     */
    lastUpdatedDate: t.number,

    /**
     * The serving status of the portfolio.
     */
    servingStatus: t.string,
  })
])
export type PortfolioExtended = t.TypeOf<typeof PortfolioExtended>

export const PortfolioMutationResponse = t.strict({
  /**
   * The mutation status of the portfolio.
   */
  code: t.union([
    t.literal('SUCCESS'),
    t.literal('INVALID_ARGUMENT'),
    t.literal('NOT_FOUND'),
  ]),

  /**
   * The mutation status of the portfolio.
   */
  portfolioId: PortfolioId
})
export type PortfolioMutationResponse = t.TypeOf<typeof PortfolioMutationResponse>
