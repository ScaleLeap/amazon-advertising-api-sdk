import { HttpClient } from '../http-client'
import { Operation } from './operation'

export class OperationProvider {
  constructor(private client: HttpClient) {}

  create<T extends Operation>(ops: new (client: HttpClient) => T): T {
    return new ops(this.client)
  }
}
