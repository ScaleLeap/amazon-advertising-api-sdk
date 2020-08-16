import { BaseAdGroupOperation } from './base-ad-group-operation'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

export class SponsoredDisplayAdGroupOperation extends BaseAdGroupOperation {
  protected uriPrefix: AmazonAdTypeURIPrefix = AmazonAdTypeURIPrefix.SponsoredDisplay
}
