import { HttpClient } from '../http-client'

export class Operation {
  protected version = 'v2'
  constructor(protected client: HttpClient) {}
}
