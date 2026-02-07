import { HttpClient } from "../client/http.js";
import type { NetworkEndpoints } from "../networks/endpoints.js";
import type {
    FeeGrantResponse,
    FeeGrantsByGranteeResponse,
    FeeGrantsByGranterResponse
} from './types.js'

export class ChainFeeGrantApi{
    private client: HttpClient
    constructor(endpoints:NetworkEndpoints){
        this.client = new HttpClient(endpoints.lcd)
    }
  /**
   * zigchaind query feegrant grant <granter> <grantee>
   * Query a single fee grant between granter and grantee
   */
  async fetchGrant(granter: string, grantee: string) {
    const data = await this.client.get<FeeGrantResponse>(
      `/cosmos/feegrant/v1beta1/allowance/${granter}/${grantee}`
    )
    return data
  }

  /**
   * zigchaind query feegrant grants-by-grantee <grantee>
   * Query all fee grants received by a grantee
   */
  async fetchGrantsByGrantee(grantee: string) {
    const data = await this.client.get<FeeGrantsByGranteeResponse>(
      `/cosmos/feegrant/v1beta1/allowances/${grantee}`
    )
    return data
  }

  /**
   * zigchaind query feegrant grants-by-granter <granter>
   * Query all fee grants issued by a granter
   */
  async fetchGrantsByGranter(granter: string) {
    const data = await this.client.get<FeeGrantsByGranterResponse>(
      `/cosmos/feegrant/v1beta1/issued/${granter}`
    )
    return data
  }
}
