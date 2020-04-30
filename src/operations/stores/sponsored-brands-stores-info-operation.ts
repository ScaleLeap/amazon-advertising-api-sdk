import { Operation } from '../operation'
import { StoreInfoResponse, BrandEntityId } from './types'
import { Decode, DecodeArray } from '../../decorators'

export class SponsoredBrandsStoresInfoOperation extends Operation {
  protected resource = 'stores'

  /**
   * List store information for all registered stores under an advertiser.
   *
   * @returns
   */
  @DecodeArray(StoreInfoResponse)
  public listStores() {
    return this.client.get<StoreInfoResponse[]>(`${this.version}/${this.resource}`)
  }

  /**
   * Request store information for a given brandEntityId.
   *
   * @param {BrandEntityId} id
   * @returns
   */
  @Decode(StoreInfoResponse)
  public getStore(id: BrandEntityId) {
    return this.client.get<StoreInfoResponse>(`${this.version}/${this.resource}/${id}`)
  }
}
