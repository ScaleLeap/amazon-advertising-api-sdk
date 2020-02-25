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
  SBListNegativeTargetsRequest,
  SBListNegativeTargetsResponse,
  SBUpdateNegativeTargetsRequest,
  SBUpdateNegativeTargetsResponse,
  SBCreateNegativeTargetsResponse,
  SBCreateNegativeTargetsRequest,
  SBNegativeTargetingClause,
  SBNegativeTargetId,
  SBBatchGetNegativeTargetsResponse,
  SBBatchGetNegativeTargetsRequest,
} from './types'

export class SponsoredBrandsProductTargetingOperation extends Operation {
  protected targetResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/targets`
  protected negativeTargetResource = `sb/negativeTargets`

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
  public batchGetTargets(params: SBBatchGetTargetsRequest) {
    return this.client.post<SBBatchGetTargetsResponse>(this.targetResource, params)
  }

  @Decode(SBListNegativeTargetsResponse)
  public listNegativeTargets(params: SBListNegativeTargetsRequest) {
    return this.client.post<SBListNegativeTargetsResponse>(this.negativeTargetResource, params)
  }

  @Decode(SBUpdateNegativeTargetsResponse)
  public updateNegativeTargets(params: SBUpdateNegativeTargetsRequest) {
    return this.client.put<SBUpdateNegativeTargetsResponse>(this.negativeTargetResource, params)
  }

  @Decode(SBCreateNegativeTargetsResponse)
  public createNegativeTargets(params: SBCreateNegativeTargetsRequest) {
    return this.client.post<SBCreateNegativeTargetsResponse>(this.negativeTargetResource, params)
  }

  @Decode(SBNegativeTargetingClause)
  public getNegativeTarget(negativeTargetId: SBNegativeTargetId) {
    return this.client.get<SBNegativeTargetingClause>(
      `${this.negativeTargetResource}/${negativeTargetId}`,
    )
  }

  @Decode(SBTargetingClauseResponse)
  public archiveNegativeTarget(negativeTargetId: SBNegativeTargetId) {
    return this.client.delete<SBTargetingClauseResponse>(
      `${this.negativeTargetResource}/${negativeTargetId}`,
    )
  }

  @Decode(SBBatchGetNegativeTargetsResponse)
  public batchGetNegativeTargets(params: SBBatchGetNegativeTargetsRequest) {
    return this.client.post<SBBatchGetNegativeTargetsResponse>(this.negativeTargetResource, params)
  }
}
