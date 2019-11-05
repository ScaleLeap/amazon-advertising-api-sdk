import { Operation } from '../operation'
import { ListPortfoliosParams, Portfolio } from './types'
import { DecodeArray } from '../../decorators'

export class PortfolioOperation extends Operation {
  protected resource = 'portfolios'

  @DecodeArray(Portfolio)
  public listPortfolios(params?: Partial<ListPortfoliosParams>): Promise<Portfolio[]> {
    return this.client.get<Portfolio[]>(this.query(`${this.version}/${this.resource}`, params))
  }
}
