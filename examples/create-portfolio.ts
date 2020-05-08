import { amazonAdvertising } from './auth'

import { CreatePortfoliosParams, UpdatePortfoliosParams } from '../src'

const portfolioOperation = amazonAdvertising.portfolio
const PORTFOLIO_ID = 123

// Create one or more portfolios.
const createPortfoliosParams: CreatePortfoliosParams[] = [
  {
    name: `My Portfolio`,
    budget: {
      amount: 100.0,
      policy: 'dateRange',
      startDate: '20191119',
      endDate: '20191119',
    },
    state: 'enabled',
  },
]
portfolioOperation.createPortfolios(createPortfoliosParams)

// Retrieve a portfolio by ID.
portfolioOperation.getPortfolio(PORTFOLIO_ID)

// Retrieve a portfolio along with additional properties by ID.
portfolioOperation.getPortfolioEx(PORTFOLIO_ID)

// Retrieve a list of up to 100 portfolios using the specified filters.
portfolioOperation.listPortfolios()

// Retrieve a list of up to 100 portfolios with additional properties using the specified filters.
portfolioOperation.listPortfoliosEx()

// Update one or more portfolios.
const updatePortfoliosParams: UpdatePortfoliosParams[] = [
  {
    portfolioId: 1,
    name: 'portfolio',
  },
]
portfolioOperation.updatePortfolios(updatePortfoliosParams)
