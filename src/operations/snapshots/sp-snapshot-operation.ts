import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'
import { RecordType, SnapshotResponse, RequestSnapshotParams, SnapshotId } from './types'

export class SponsoredProductsSnapshotOperation extends Operation {
  protected resource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredProducts}/`

  // @Decode(SnapshotResponse)
  public requestSnapshot(recordType: RecordType, params: RequestSnapshotParams) {
    return this.client.post<SnapshotResponse>(`${this.resource}${recordType}/snapshot`, params)
  }

  @Decode(SnapshotResponse)
  public getSnapshot(id: SnapshotId) {
    return this.client.get<SnapshotResponse>(`snapshots/${id}`)
  }
}
