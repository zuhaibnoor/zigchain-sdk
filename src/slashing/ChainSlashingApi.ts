import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  SlashingParamsResponse,
  SigningInfoResponse,
  SigningInfosResponse
} from './types.js'

export class ChainSlashingApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query slashing params
   */
  async fetchParams() {
    const data = await this.client.get<SlashingParamsResponse>(
      '/cosmos/slashing/v1beta1/params'
    )

    return data
  }

  /**
   * zigchaind query slashing signing-info <valcons-address>
   */
  async fetchSigningInfo(valConsAddress: string) {
    const data = await this.client.get<SigningInfoResponse>(
      `/cosmos/slashing/v1beta1/signing_infos/${valConsAddress}`
    )

    return data
  }

  /**
   * zigchaind query slashing signing-infos
   */
  async fetchSigningInfos() {
    const data = await this.client.get<SigningInfosResponse>(
      '/cosmos/slashing/v1beta1/signing_infos'
    )

    return data
  }
}
