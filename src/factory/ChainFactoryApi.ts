import { HttpClient } from "../client/http.js";
import type { NetworkEndpoints } from "../networks/endpoints.js";
import type {
  FactoryParamsResponse,
  DenomAuthResponse,
  DenomsByAdminResponse,
  ListDenomResponse,
  ShowDenomResponse,
  ListDenomAuthResponse
} from './types.js'

export class ChainFactoryApi {
    private client:HttpClient
    constructor( endpoints: NetworkEndpoints){
        this.client =  new HttpClient(endpoints.lcd)
    }  /**
   * zigchaind query factory params
   */
  async fetchParams() {
    const data = await this.client.get<FactoryParamsResponse>(
      '/zigchain/factory/params'
    )

    return data
  }

 

  /**
   * zigchaind query factory denoms-by-admin <address>
   */
  async fetchDenomsByAdmin(admin: string) {
    const data = await this.client.get<DenomsByAdminResponse>(
      `/zigchain/factory/denomByAdmin/${admin}`
    )

    return data
  }

  /**
   * zigchaind query factory show-denom <denom>
   */
  async fetchDenom(denom: string) {
    const data = await this.client.get<ShowDenomResponse>(
      `/cosmos/tokenfactory/v1beta1/denoms/${denom}`
    )

    return data
  }

  /**
   * zigchaind query factory denom-auth <denom>
   */
  async fetchDenomAuth(denom: string) {
    const data = await this.client.get<DenomAuthResponse>(
      `/cosmos/tokenfactory/v1beta1/denoms/${denom}/authority_metadata`
    )

    return data
  }

  /**
   * zigchaind query factory list-denom-auth
   */
  async fetchAllDenomAuths() {
    const data = await this.client.get<ListDenomAuthResponse>(
      '/cosmos/tokenfactory/v1beta1/denom_authority_metadata'
    )

    return data
  }
}

