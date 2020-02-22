import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  SBListTargetsRequest,
  SBListTargetsResponse,
  SBUpdateTargetsRequest,
  SBUpdateTargetsResponse,
  SBCreateTargetsRequest,
  SBCreateTargetsResponse,
  TargetId,
  SBTargetingClause,
  SBTargetingClauseResponse,
  SBBatchGetTargetsRequest,
  SBBatchGetTargetsResponse,
} from './types'

export class SponsoredBrandsProductTargetingOperation extends Operation {
  protected targetResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/targets`

  @Decode(SBListTargetsResponse)
  public listTargets(params: SBListTargetsRequest) {
    return this.client.post<SBListTargetsResponse>(this.targetResource, params)
  }

  @Decode(SBUpdateTargetsResponse)
  public updateTargets(params: SBUpdateTargetsRequest[]) {
    return this.client.put<SBUpdateTargetsResponse>(this.targetResource, params)
  }

  @Decode(SBCreateTargetsResponse)
  public createTargets(params: SBCreateTargetsRequest) {
    return this.client.post<SBCreateTargetsResponse>(this.targetResource, params)
  }

  @Decode(SBTargetingClause)
  public getTarget(targetId: TargetId) {
    return this.client.get<SBTargetingClause>(`${this.targetResource}/${targetId}`)
  }

  @Decode(SBTargetingClauseResponse)
  public archiveTarget(targetId: TargetId) {
    return this.client.delete<SBTargetingClauseResponse>(`${this.targetResource}/${targetId}`)
  }

  @Decode(SBBatchGetTargetsResponse)
  public batchGet(params: SBBatchGetTargetsRequest) {
    return this.client.post<SBBatchGetTargetsResponse>(this.targetResource, params)
  }
}
