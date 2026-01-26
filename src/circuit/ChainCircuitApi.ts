import { HttpClient } from "../client/http.js";
import type { NetworkEndpoints } from "../networks/endpoints.js";
import type { CircuitAccountResponse, 
    CircuitAccountsResponse, 
    DisabledMessagesResponse} from "./types.js";

export class ChainCircuitApi {

   private client : HttpClient
   
   constructor(endpoints: NetworkEndpoints){
        this.client = new HttpClient(endpoints.lcd)
    }

    /**
   * zigchaind query circuit account <address>
   */
    async getAccountPermissions(address:string){
        return this.client.get<CircuitAccountResponse>(
            `/cosmos/circuit/v1/accounts/${address}`
        )
    }

    /**
   * zigchaind query circuit accounts
   */
    async getAllAccountPermissions() {
        return this.client.get<CircuitAccountsResponse>(
        `/cosmos/circuit/v1/accounts`
        )
  }

  /**
   * zigchaind query circuit disabled-list
   */
  async getDisabledMessages() {
    return this.client.get<DisabledMessagesResponse>(
      `/cosmos/circuit/v1/disabled_list`
    )
}

}