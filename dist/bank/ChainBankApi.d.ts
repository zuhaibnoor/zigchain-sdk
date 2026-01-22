import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { DenomMetadataResponse, DenomOwnersResponse, DenomsMetadataResponse } from './types.js';
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
    /**
   * Fetch metadata for a specific denom
   * zigchaind query bank denom-metadata <denom>
   */
    fetchDenomMetadata(denom: string): Promise<DenomMetadataResponse>;
    /**
     * Query metadata by string (partial match)
     * zigchaind query bank denom-metadata-by-query-string <query>
     */
    queryDenomMetadataByQuery(query: string): Promise<DenomsMetadataResponse>;
    /**
     * Fetch all owners of a specific denom
     * zigchaind query bank denom-owners <denom>
     */
    fetchDenomOwners(denom: string): Promise<DenomOwnersResponse>;
    /**
     * Query denom owners by query string (partial match)
     * zigchaind query bank denom-owners-by-query <query>
     */
    queryDenomOwnersByQuery(query: string): Promise<DenomOwnersResponse>;
    /**
     * Fetch metadata for all registered coin denominations
     * zigchaind query bank denoms-metadata
     */
    fetchAllDenomsMetadata(): Promise<import("./types.js").DenomMetadata[]>;
}
//# sourceMappingURL=ChainBankApi.d.ts.map