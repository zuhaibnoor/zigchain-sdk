import type { NetworkEndpoints } from '../networks/endpoints.js';
export declare class ChainBankApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query bank balance <address> <denom>
     */
    fetchBalance(address: string, denom: string): Promise<import("./types.js").Coin>;
    /**
     * zigchaind query bank balances <address>
     */
    fetchBalances(address: string): Promise<import("./types.js").Coin[]>;
    /**
     * zigchaind query bank total-supply
     */
    fetchTotalSupply(): Promise<import("./types.js").Coin[]>;
    /**
     * zigchaind query bank total-supply-of <denom>
     */
    fetchSupplyOf(denom: string): Promise<import("./types.js").Coin>;
}
//# sourceMappingURL=ChainBankApi.d.ts.map