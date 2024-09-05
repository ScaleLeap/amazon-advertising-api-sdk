import { HttpClient } from '../http-client'
import { Operation } from './operation'

export class OperationProvider {
  // eslint-disable-next-line no-unused-vars
  constructor(private client: HttpClient) {}

  // eslint-disable-next-line no-unused-vars
  create<T extends Operation>(ops: new (client: HttpClient) => T): T {
    return new ops(this.client)
  }
}
