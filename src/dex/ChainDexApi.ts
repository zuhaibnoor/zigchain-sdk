import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type { DexPoolResponse } from './types.js'

export class ChainDexApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query dex get-pool <pool-id>
   */
  async fetchPool(poolId: string): Promise<DexPoolResponse> {
    return this.client.get<DexPoolResponse>(
      `/zigchain/dex/pool/${poolId}`
    )
  }
}
