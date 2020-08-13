import { Operation } from '../operation'
import { DecodeArray } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import { CampaignResponse, SponsoredDisplayCampaignCreateParams } from './types'

export class SponsoredDisplayCampaignOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredDisplay}/campaigns`

  /**
   * Creates one or more campaigns.
   * Successfully created campaigns will be assigned a unique campaignId.
   *
   * @param campaigns -
   * @returns
   */
  @DecodeArray(CampaignResponse)
  public createCampaigns(campaigns: SponsoredDisplayCampaignCreateParams[]) {
    return this.client.post<CampaignResponse[]>(this.resource, campaigns)
  }
}
