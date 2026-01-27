import { HttpClient } from "../client/http.js";
export class ChainCircuitApi {
    client;
    rpcClient;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
        this.rpcClient = new HttpClient(endpoints.rpc);
    }
    /**
   * zigchaind query circuit account <address>
   */
    async getAccountPermissions(address) {
        return this.client.get(`/cosmos/circuit/v1/accounts/${address}`);
    }
    /**
   * zigchaind query circuit accounts
   */
    async getAllAccountPermissions() {
        return this.client.get(`/cosmos/circuit/v1/accounts`);
    }
}
//# sourceMappingURL=ChainCircuitApi.js.map