import { AmazonMarketplace } from '@scaleleap/amazon-marketplaces'
import { LazyGetter } from 'lazy-get-decorator'
import { HttpClientAuth } from './http-client'
import { HttpClient } from './http-client'
import { OperationProvider } from './operations/operation-provider'
import { SponsoredProductsCampaignOperation } from './operations/campaigns/sponsored-products-campaign-operation'

export class AmazonAdvertising {
  private operationProvider: OperationProvider

  constructor(private amazonMarketplace: AmazonMarketplace, private auth: HttpClientAuth) {
    const { advertising } = amazonMarketplace

    if (!advertising) {
      throw new Error(`${amazonMarketplace.name} marketplace does not have Amazon Advertising.`)
    }

    const httpClient: HttpClient = new HttpClient(advertising.region.endpoint, auth)
    this.operationProvider = new OperationProvider(httpClient)
  }

  @LazyGetter()
  get sponsoredProductsCampaign() {
    return this.operationProvider.create(SponsoredProductsCampaignOperation)
  }
}
