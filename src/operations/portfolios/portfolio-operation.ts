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

  /**
   * Retrieve a list of up to 100 portfolios using the specified filters.
   *
   * @param {ListPortfoliosParams} [params]
   * @returns
   */
  @DecodeArray(Portfolio)
  public listPortfolios(params?: ListPortfoliosParams) {
    return this.client.get<Portfolio[]>(this.query(this.resource, params))
  }

  /**
   * Retrieve a list of up to 100 portfolios with additional properties using the specified filters.
   *
   * @param {ListPortfoliosParams} [params]
   * @returns
   */
  @DecodeArray(PortfolioExtended)
  public listPortfoliosEx(params?: ListPortfoliosParams) {
    return this.client.get<PortfolioExtended[]>(this.query(`${this.resource}/extended`, params))
  }

  /**
   * Retrieve a portfolio by ID.
   *
   * @param {PortfolioId} portfolioId
   * @returns
   */
  @Decode(Portfolio)
  public getPortfolio(portfolioId: PortfolioId) {
    return this.client.get<Portfolio>(`${this.resource}/${portfolioId}`)
  }

  /**
   * Retrieve a portfolio along with additional properties by ID.
   *
   * @param {PortfolioId} portfolioId
   * @returns
   */
  @Decode(PortfolioExtended)
  public getPortfolioEx(portfolioId: PortfolioId) {
    return this.client.get<PortfolioExtended>(`${this.resource}/extended/${portfolioId}`)
  }

  /**
   * Create one or more portfolios. Maximum number of portfolios per account is 100.
   *
   * @param {CreatePortfoliosParams[]} portfolios
   * @returns
   */
  @DecodeArray(PortfolioResponse)
  public createPortfolios(portfolios: CreatePortfoliosParams[]) {
    return this.client.post<PortfolioResponse[]>(this.resource, portfolios)
  }

  /**
   * Update one or more portfolios.
   *
   * @param {UpdatePortfoliosParams[]} portfolios
   * @returns
   */
  @DecodeArray(PortfolioResponse)
  public updatePortfolios(portfolios: UpdatePortfoliosParams[]) {
    return this.client.put<PortfolioResponse[]>(this.resource, portfolios)
  }
}
