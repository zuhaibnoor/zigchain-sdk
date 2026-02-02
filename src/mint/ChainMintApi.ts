import { HttpClient } from "../client/http.js"
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  MintInflationResponse,
  MintAnnualProvisionsResponse,
  MintParamsResponse
} from './types.js'

export class ChainMintApi { 
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query mint inflation
   */
  async fetchInflation() {
    const data = await this.client.get<MintInflationResponse>(
      '/cosmos/mint/v1beta1/inflation'
    )

    return data
  }

  /**
   * zigchaind query mint annual-provisions
   */
  async fetchAnnualProvisions() {
    const data = await this.client.get<MintAnnualProvisionsResponse>(
      '/cosmos/mint/v1beta1/annual_provisions'
    )

    return data
  }

  /**
   * zigchaind query mint params
   */
  async fetchParams() {
    const data = await this.client.get<MintParamsResponse>(
      '/cosmos/mint/v1beta1/params'
    )

    return data
  }
}
