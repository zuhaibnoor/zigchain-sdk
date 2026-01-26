import { HttpClient } from "../client/http.js";
import type { NetworkEndpoints } from "../networks/endpoints.js";
import type { CircuitAccountResponse, 
    CircuitAccountsResponse } from "./types.js";

export class ChainCircuitApi {

   private client : HttpClient
   private rpcClient: HttpClient
   constructor(endpoints: NetworkEndpoints){
        this.client = new HttpClient(endpoints.lcd)
        this.rpcClient = new HttpClient(endpoints.rpc)
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
   * Get disabled messages via direct RPC call
   */
    // async getDisabledMessages(): Promise<DisabledMessagesResponse> {
    // const res = await this.rpcClient.get<{ result: { response: { value: string } } }>(
    //     '/abci_query?path="/circuit/DisabledMessages"'
    // )
    // console.log(res)
    // if (!res.result?.response?.value) return { disabled_messages: ['ookok'] }

    // // decode base64 using atob
    // const decoded = atob(res.result.response.value)
    // const disabled = JSON.parse(decoded)

    // return { disabled_messages: disabled }


}