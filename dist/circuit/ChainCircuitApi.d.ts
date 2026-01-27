import type { NetworkEndpoints } from "../networks/endpoints.js";
import type { CircuitAccountResponse, CircuitAccountsResponse } from "./types.js";
export declare class ChainCircuitApi {
    private client;
    private rpcClient;
    constructor(endpoints: NetworkEndpoints);
    /**
   * zigchaind query circuit account <address>
   */
    getAccountPermissions(address: string): Promise<CircuitAccountResponse>;
    /**
   * zigchaind query circuit accounts
   */
    getAllAccountPermissions(): Promise<CircuitAccountsResponse>;
}
//# sourceMappingURL=ChainCircuitApi.d.ts.map