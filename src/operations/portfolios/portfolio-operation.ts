import { Operation } from '../operation'
import {
  ListPortfoliosParams,
  Portfolio,
  PortfolioExtended,
  PortfolioId,
  CreatePortfoliosParams,
  PortfolioResponse,
  UpdatePortfoliosParams,
} from './types'
import { Decode, DecodeArray } from '../../decorators'

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

  @Decode(Portfolio)
  public getPortfolio(portfolioId: PortfolioId) {
    return this.client.get<Portfolio>(`${this.resource}/${portfolioId}`)
  }

  @Decode(PortfolioExtended)
  public getPortfolioEx(portfolioId: PortfolioId) {
    return this.client.get<PortfolioExtended>(`${this.resource}/extended/${portfolioId}`)
  }

  @DecodeArray(PortfolioResponse)
  public createPortfolios(portfolios: CreatePortfoliosParams[]) {
    return this.client.post<PortfolioResponse[]>(this.resource, portfolios)
  }

  @DecodeArray(PortfolioResponse)
  public updatePortfolios(portfolios: UpdatePortfoliosParams[]) {
    return this.client.put<PortfolioResponse[]>(this.resource, portfolios)
  }
}
