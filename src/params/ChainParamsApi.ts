import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  SubspaceParamResponse,
  SubspacesResponse
} from './types.js'

export class ChainParamsApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query params subspace
   */
  async fetchParam(subspace: string, key: string) {
    const data = await this.client.get<SubspaceParamResponse>(
      `/cosmos/params/v1beta1/params/${subspace}/${key}`
    )

    return data
  }

  /**
   * zigchaind query params subspaces
   */
  async fetchSubspaces() {
    const data = await this.client.get<SubspacesResponse>(
      '/cosmos/params/v1beta1/subspaces'
    )

    return data
  }
}
