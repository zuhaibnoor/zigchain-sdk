// src/block/ChainBlockApi.ts

import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type { BlockResponse } from './types.js'

export class ChainBlockApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query block --type=height <height>
   */
  async getBlockByHeight(
    height: number,
    atHeight?: number
  ): Promise<BlockResponse> {
    const headers = atHeight
      ? { 'x-cosmos-block-height': atHeight.toString() }
      : undefined

    return this.client.get<BlockResponse>(
      `/cosmos/base/tendermint/v1beta1/blocks/${height}`,
      headers
    )
  }
    /**
     * Fetch latest block
     * zigchaind query block
     */
    async getLatestBlock(
    atHeight?: number
    ) {
    const headers = atHeight
        ? { 'x-cosmos-block-height': atHeight.toString() }
        : undefined

    return this.client.get(
        '/cosmos/base/tendermint/v1beta1/blocks/latest',
        headers
    )
    }
 
}
