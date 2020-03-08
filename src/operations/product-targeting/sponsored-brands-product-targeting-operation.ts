import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  SponsoredBrandsListTargetsRequest,
  SponsoredBrandsListTargetsResponse,
  SponsoredBrandsUpdateTargetsRequest,
  SponsoredBrandsUpdateTargetsResponse,
  SponsoredBrandsCreateTargetsRequest,
  SponsoredBrandsCreateTargetsResponse,
  TargetId,
  SponsoredBrandsTargetingClause,
  SponsoredBrandsTargetingClauseResponse,
  SponsoredBrandsBatchGetTargetsRequest,
  SponsoredBrandsBatchGetTargetsResponse,
  SponsoredBrandsListNegativeTargetsRequest,
  SponsoredBrandsListNegativeTargetsResponse,
  SponsoredBrandsUpdateNegativeTargetsRequest,
  SponsoredBrandsUpdateNegativeTargetsResponse,
  SponsoredBrandsCreateNegativeTargetsResponse,
  SponsoredBrandsCreateNegativeTargetsRequest,
  SponsoredBrandsNegativeTargetingClause,
  SponsoredBrandsNegativeTargetId,
  SponsoredBrandsBatchGetNegativeTargetsResponse,
  SponsoredBrandsBatchGetNegativeTargetsRequest,
} from './types'

export class SponsoredBrandsProductTargetingOperation extends Operation {
  protected targetResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/targets`
  protected negativeTargetResource = `sb/negativeTargets`

  @Decode(SponsoredBrandsListTargetsResponse)
  public listTargets(params: SponsoredBrandsListTargetsRequest) {
    return this.client.post<SponsoredBrandsListTargetsResponse>(this.targetResource, params)
  }

  @Decode(SponsoredBrandsUpdateTargetsResponse)
  public updateTargets(params: SponsoredBrandsUpdateTargetsRequest[]) {
    return this.client.put<SponsoredBrandsUpdateTargetsResponse>(this.targetResource, params)
  }

  @Decode(SponsoredBrandsCreateTargetsResponse)
  public createTargets(params: SponsoredBrandsCreateTargetsRequest) {
    return this.client.post<SponsoredBrandsCreateTargetsResponse>(this.targetResource, params)
  }

  @Decode(SponsoredBrandsTargetingClause)
  public getTarget(targetId: TargetId) {
    return this.client.get<SponsoredBrandsTargetingClause>(`${this.targetResource}/${targetId}`)
  }

  @Decode(SponsoredBrandsTargetingClauseResponse)
  public archiveTarget(targetId: TargetId) {
    return this.client.delete<SponsoredBrandsTargetingClauseResponse>(
      `${this.targetResource}/${targetId}`,
    )
  }

  @Decode(SponsoredBrandsBatchGetTargetsResponse)
  public batchGetTargets(params: SponsoredBrandsBatchGetTargetsRequest) {
    return this.client.post<SponsoredBrandsBatchGetTargetsResponse>(this.targetResource, params)
  }

  @Decode(SponsoredBrandsListNegativeTargetsResponse)
  public listNegativeTargets(params: SponsoredBrandsListNegativeTargetsRequest) {
    return this.client.post<SponsoredBrandsListNegativeTargetsResponse>(
      this.negativeTargetResource,
      params,
    )
  }

  @Decode(SponsoredBrandsUpdateNegativeTargetsResponse)
  public updateNegativeTargets(params: SponsoredBrandsUpdateNegativeTargetsRequest) {
    return this.client.put<SponsoredBrandsUpdateNegativeTargetsResponse>(
      this.negativeTargetResource,
      params,
    )
  }

  @Decode(SponsoredBrandsCreateNegativeTargetsResponse)
  public createNegativeTargets(params: SponsoredBrandsCreateNegativeTargetsRequest) {
    return this.client.post<SponsoredBrandsCreateNegativeTargetsResponse>(
      this.negativeTargetResource,
      params,
    )
  }

  @Decode(SponsoredBrandsNegativeTargetingClause)
  public getNegativeTarget(negativeTargetId: SponsoredBrandsNegativeTargetId) {
    return this.client.get<SponsoredBrandsNegativeTargetingClause>(
      `${this.negativeTargetResource}/${negativeTargetId}`,
    )
  }

  @Decode(SponsoredBrandsTargetingClauseResponse)
  public archiveNegativeTarget(negativeTargetId: SponsoredBrandsNegativeTargetId) {
    return this.client.delete<SponsoredBrandsTargetingClauseResponse>(
      `${this.negativeTargetResource}/${negativeTargetId}`,
    )
  }

  @Decode(SponsoredBrandsBatchGetNegativeTargetsResponse)
  public batchGetNegativeTargets(params: SponsoredBrandsBatchGetNegativeTargetsRequest) {
    return this.client.post<SponsoredBrandsBatchGetNegativeTargetsResponse>(
      this.negativeTargetResource,
      params,
    )
  }
}
