import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type { BlockResultsResponse } from './types.js'

export class ChainBlockResultsApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    // block-results uses RPC, NOT LCD
    this.client = new HttpClient(endpoints.rpc)
  }

  /**
   * zigchaind query block-results [height]
   */
  async fetchBlockResults(height: number): Promise<BlockResultsResponse> {
    return this.client.get<BlockResultsResponse>(
      `/block_results?height=${height}`
    )
  }
}