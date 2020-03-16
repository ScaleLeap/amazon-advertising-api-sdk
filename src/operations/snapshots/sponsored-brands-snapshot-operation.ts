import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import {
  SnapshotResponse,
  RequestSnapshotParams,
  SnapshotId,
  SponsoredBrandsRecordType,
} from './types'

export class SponsoredBrandsSnapshotOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/`

  /**
   * Request a file-based snapshot of all entities of the specified type in the account satisfying the filtering criteria
   *
   * @param {SponsoredBrandsRecordType} recordType
   * @param {RequestSnapshotParams} params
   * @returns
   * @memberof SponsoredBrandsSnapshotOperation
   */
  @Decode(SnapshotResponse)
  public requestSnapshot(recordType: SponsoredBrandsRecordType, params: RequestSnapshotParams) {
    return this.client.post<SnapshotResponse>(`${this.resource}${recordType}/snapshot`, params)
  }

  /**
   * Retrieve status, metadata and location of previously requested snapshot
   *
   * @param {SnapshotId} id
   * @returns
   * @memberof SponsoredBrandsSnapshotOperation
   */
  @Decode(SnapshotResponse)
  public getSnapshot(id: SnapshotId) {
    return this.client.get<SnapshotResponse>(`${this.resource}snapshots/${id}`)
  }
}
