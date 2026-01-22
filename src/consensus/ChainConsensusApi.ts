import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type { ConsensusParamsResponse } from './types.js'

export class ChainConsensusApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query consensus params
   */
  async fetchConsensusParams(options?: { height?: number }) {
    const headers: Record<string, string> | undefined =
      options?.height !== undefined
        ? { 'x-cosmos-block-height': String(options.height) }
        : undefined

    const data = await this.client.get<ConsensusParamsResponse>(
      '/cosmos/consensus/v1/params',
      headers
    )

    return data.params
  }
}
