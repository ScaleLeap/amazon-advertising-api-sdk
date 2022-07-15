import { Operation } from '../operation'
import {
  Account,
  RequestId,
  CreateAccount,
  CreateAccountResponse
} from './types'
import { Decode, DecodeArray } from '../../decorators'

export class AccountOperation extends Operation {
  protected resource = 'testAccounts'

  /**
   * Retrieves one or more testAccounts associated with the authorization passed in the request header.
   *
   * @returns
   */
  @DecodeArray(Account)
  public listTestAccounts() {
    return this.client.get<Account[]>(`${this.resource}`)
  }

  /**
   * Retrieves a single account specified by identifier.
   *
   * @param requestId -
   * @returns
   */
  @Decode(Account)
  public getTestAccount(requestId: RequestId) {
    return this.client.get<Account>(`${this.resource}/?requestId=${requestId}`)
  }


  /**
   * Create a test account
   * @returns
   */
  @Decode(CreateAccountResponse)
  public createTestAccount(CreateAccount: CreateAccount) {
    return this.client.post<CreateAccountResponse>(`${this.resource}`, {
      CreateAccount
    })
  }
}