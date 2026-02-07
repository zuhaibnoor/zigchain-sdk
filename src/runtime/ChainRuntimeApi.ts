import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  RuntimeConfigResponse,
  
} from './types.js'

export class ChainRuntimeApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query runtime config
   * Query the current application runtime configuration
   */
  async fetchConfig() {
    const data = await this.client.get<RuntimeConfigResponse>(
      '/cosmos/base/node/v1beta1/config'
    )

    return data
  }

}
