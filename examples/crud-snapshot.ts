import { amazonAdvertising } from './auth'
import { SuccessSnapshotResponse } from '../src'

const sponsoredBrandsSnapshotOperation = amazonAdvertising.sponsoredBrandsSnapshot
const sponsoredProductsSnapshotOperation = amazonAdvertising.sponsoredProductsSnapshot
const SNAPSHOT_ID = 'amzn1.clicksAPI.v1.p1.5E82F8C3.b1095870-c8b5-47c2-b4ef-0c404c3e4fc9'
const successSnapshotResponse: SuccessSnapshotResponse = {
  snapshotId: SNAPSHOT_ID,
  status: 'SUCCESS',
  statusDetails: 'Snapshot has been successfully generated.',
  location:
    'https://advertising-api-test.amazon.com/v1/snapshots/amzn1.clicksAPI.v1.p1.5E82F8C3.b1095870-c8b5-47c2-b4ef-0c404c3e4fc9/download',
  fileSize: 148,
  expiration: new Date(),
}

// Request a file-based snapshot of all entities of the specified type in the account satisfying the filtering criteria.
sponsoredBrandsSnapshotOperation.requestSnapshot('campaigns', {})

// Retrieve status, metadata and location of previously requested snapshot.
sponsoredBrandsSnapshotOperation.getSnapshot(SNAPSHOT_ID)

// Downloads the snapshot corresponding to the success snapshot response specified.
sponsoredBrandsSnapshotOperation.downloadSnapshot(successSnapshotResponse)

// Request a file-based snapshot of all entities of the specified type in the account satisfying the filtering criteria.
sponsoredProductsSnapshotOperation.requestSnapshot('campaigns', {})

// Retrieve status, metadata and location of previously requested snapshot.
sponsoredProductsSnapshotOperation.getSnapshot(SNAPSHOT_ID)

// Downloads the snapshot corresponding to the success snapshot response specified.
sponsoredProductsSnapshotOperation.downloadSnapshot(successSnapshotResponse)
