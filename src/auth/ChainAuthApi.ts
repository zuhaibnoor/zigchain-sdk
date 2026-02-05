import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  AccountResponse,
  AccountInfoResponse,
  AuthParamsResponse,
  Bech32PrefixResponse,
  ModuleAccountResponse,
  ModuleAccountsResponse
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

    return data
  }

  /**
   * zigchaind query auth account-info <address>
   * queries account info which is common to all account types and this info can be used for signing the transactions
   */
  async fetchAccountInfo(address: string) {
    const data = await this.client.get<AccountInfoResponse>(
      `/cosmos/auth/v1beta1/account_info/${address}`
    )

    return data
  }

 //======================== API NOT WORKING=======================================
  /**
 * zigchaind query auth address-by-acc-num <account_number>
 */
    // async fetchAddressByAccountNumber(accountNumber: string | number) {
    // const data = await this.client.get<AddressByAccountNumberResponse>(
    //     `/cosmos/auth/v1beta1/address_by_id?account_id=${accountNumber}`
    // )

    // return data.address
    // }


  //   /**
  //    * zigchaind query auth address-bytes-to-string <address_bytes>
  //    */
  //   async fetchAddressFromBytes(addressBytes: string) {
  //   const data = await this.client.get<AddressBytesToStringResponse>(
  //       `/cosmos/auth/v1beta1/address_bytes_to_string/${addressBytes}`
  //   )

  //   return data.address
  //   }


  //   // address-string-to-bytes
  // async fetchAddressBytes(address: string) {
  //   return this.client.get<AddressBytesResponse>(
  //     `/cosmos/auth/v1beta1/address_bytes/${address}`
  //   )
  // }

  //======================== API NOT WORKING=======================================================

  // bech32-prefix
  async fetchBech32Prefix() {
    return this.client.get<Bech32PrefixResponse>(
      `/cosmos/auth/v1beta1/bech32`
    )
  }

  // module-account
  async fetchAccountsByModule(
    moduleName: string) {
    return this.client.get<ModuleAccountResponse>(
      `/cosmos/auth/v1beta1/module_accounts/${moduleName}`
    )
  }

  // module-accounts
  async fetchModuleAccounts(): Promise<ModuleAccountsResponse> {
    return this.client.get<ModuleAccountsResponse>(
      `/cosmos/auth/v1beta1/module_accounts`
    )
  }

  // params (supports --height)
  async fetchAuthParams( height?: number ) {
    const headers = height
      ? { 'x-cosmos-block-height': height.toString() }
      : undefined

    return this.client.get<AuthParamsResponse>(
      `/cosmos/auth/v1beta1/params`,
      headers
    )
  }
}



