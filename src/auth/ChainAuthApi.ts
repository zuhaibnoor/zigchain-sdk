import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  AccountResponse,
  AccountInfoResponse 
} from './types.js'

export class ChainAuthApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query auth account <address>
   */
  async fetchAccount(address: string) {
    const data = await this.client.get<AccountResponse>(
      `/cosmos/auth/v1beta1/accounts/${address}`
    )

    return data.account
  }

  /**
   * zigchaind query auth account-info <address>
   * queries account info which is common to all account types and this info can be used for signing the transactions
   */
  async fetchAccountInfo(address: string) {
    const data = await this.client.get<AccountInfoResponse>(
      `/cosmos/auth/v1beta1/account_info/${address}`
    )

    return data.info
  }

 
}


