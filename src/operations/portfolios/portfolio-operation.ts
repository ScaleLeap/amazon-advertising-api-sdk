import { Operation } from '../operation'
import { ListPortfoliosParams, Portfolio, PortfolioExtended } from './types'
import { DecodeArray } from '../../decorators'

export class PortfolioOperation extends Operation {
  protected resource = `${this.version}/portfolios`

  @DecodeArray(Portfolio)
  public listPortfolios(params?: ListPortfoliosParams) {
    return this.client.get<Portfolio[]>(this.query(this.resource, params))
  }

  @DecodeArray(PortfolioExtended)
  public listPortfoliosEx(params?: ListPortfoliosParams) {
    return this.client.get<PortfolioExtended[]>(this.query(`${this.resource}/extended`, params))
  }
}
