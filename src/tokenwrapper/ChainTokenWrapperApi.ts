import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  TokenWrapperModuleInfoResponse,
  TokenWrapperParamsResponse,
  TokenWrapperTotalTransfersResponse
} from './types.js'

export class ChainTokenWrapperApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query tokenwrapper module-info
   */
  async fetchModuleInfo() {
    return this.client.get<TokenWrapperModuleInfoResponse>(
      '/zigchain/tokenwrapper/module_info'
    )
  }

  /**
   * zigchaind query tokenwrapper params
   */
  async fetchParams() {
    return this.client.get<TokenWrapperParamsResponse>(
      '/zigchain/tokenwrapper/params'
    )
  }

  /**
   * zigchaind query tokenwrapper total-transfers
   */
  async fetchTotalTransfers() {
    return this.client.get<TokenWrapperTotalTransfersResponse>(
      '/zigchain/tokenwrapper/total_transfers'
    )
  }
}
