import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type { DexPoolResponse, 
            DexPoolBalancesResponse,
        poolUidResponse,
    DexParamsResponse } from './types.js'

export class ChainDexApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query dex get-pool <pool-id>
   */
  async fetchPool(poolId: string) {
    return this.client.get<DexPoolResponse>(
      `/zigchain/dex/pool/${poolId}`
    )
  }

  /** 
   * zigchaind cquery dex get-pool-balances <pool-id>
   */

   async fetchPoolBalances(poolId: string) {
    return this.client.get<DexPoolBalancesResponse>(
      `/zigchain/dex/pool-balances/${poolId}`
    )
  }

  /**
   *  fetch pool uids
   */

  async fetchPoolUids( tokenA: string, tokenB: string){
    return this.client.get<poolUidResponse>(
        `/zigchain/dex/pool_uids/${tokenA}/${tokenB}`
    )
  }

   /**
   * zigchaind query dex params
   */
  async fetchParams() {
    return this.client.get<DexParamsResponse>(
      '/zigchain/dex/params'
    )
  }

}
