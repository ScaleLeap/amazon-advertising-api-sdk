import { Operation } from '../operation'
import {
  ListSuggestedProductsParams,
  SuggestedProduct,
  ProductReadinessRequest,
  ProductReadinessResponse,
} from './types'
import { DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

export class SponsoredDisplaySuggestedProductsOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredDisplay}/suggestedProducts`

  /**
   * Gets a list of all products eligible for advertising using the specified tactic type. Each product in the list includes an associated readiness status.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(SuggestedProduct)
  public listSuggestedProducts(params: ListSuggestedProductsParams) {
    return this.client.get<SuggestedProduct[]>(this.paramsFilterTransformer('', params))
  }

  /**
   * Gets the readiness status for a specified list of up to 100 products.
   *
   * @param params -
   * @returns
   */
  @DecodeArray(ProductReadinessResponse)
  public getProductReadiness(params: ProductReadinessRequest) {
    return this.client.post<ProductReadinessResponse[]>(
      `${this.resource}/productReadinessStatus`,
      params,
    )
  }
}
