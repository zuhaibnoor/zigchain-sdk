import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  BalanceResponse,
  BalancesResponse,
  TotalSupplyResponse,
  SupplyOfResponse,
} from './types.js'

export class ChainBankApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query bank balance <address> <denom>
   */
  async fetchBalance(address: string, denom: string) {
    const data = await this.client.get<BalanceResponse>(
    `/cosmos/bank/v1beta1/balances/${address}/by_denom?denom=${denom}`
  )

  return data.balance
  }

  /**
   * zigchaind query bank balances <address>
   */
  async fetchBalances(address: string) {
    const data = await this.client.get<BalancesResponse>(
      `/cosmos/bank/v1beta1/balances/${address}`
    )

    return data.balances
  }

  /**
   * zigchaind query bank total-supply
   */
  async fetchTotalSupply() {
    const data = await this.client.get<TotalSupplyResponse>(
      '/cosmos/bank/v1beta1/supply'
    )

    return data.supply
  }

  /**
   * zigchaind query bank total-supply-of <denom>
   */
  async fetchSupplyOf(denom: string) {
    const data = await this.client.get<SupplyOfResponse>(
      `/cosmos/bank/v1beta1/supply/by_denom?denom=${denom}`
    )

    return data.amount
  }
}
