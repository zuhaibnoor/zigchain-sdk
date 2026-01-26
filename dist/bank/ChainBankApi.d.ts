import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { BalanceResponse, BalancesResponse, TotalSupplyResponse, SupplyOfResponse, DenomMetadataResponse, DenomOwnersResponse, DenomsMetadataResponse, SendEnabledResponse, SpendableBalanceResponse, SpendableBalancesResponse, BankParamsResponse } from './types.js';
export declare class ChainBankApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query bank balance <address> <denom>
     */
    fetchBalance(address: string, denom: string): Promise<BalanceResponse>;
    /**
     * zigchaind query bank balances <address>
     */
    fetchBalances(address: string): Promise<BalancesResponse>;
    /**
     * zigchaind query bank total-supply
     */
    fetchTotalSupply(): Promise<TotalSupplyResponse>;
    /**
     * zigchaind query bank total-supply-of <denom>
     */
    fetchSupplyOf(denom: string): Promise<SupplyOfResponse>;
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
    /**
     * Fetch metadata for all registered coin denominations
     * zigchaind query bank denoms-metadata
     */
    fetchAllDenomsMetadata(): Promise<DenomsMetadataResponse>;
    /**
     * zigchaind query bank send-enabled
     */
    fetchSendEnabled(): Promise<SendEnabledResponse>;
    /**
     * zigchaind query bank spendable-balance <address> <denom>
     */
    fetchSpendableBalance(address: string, denom: string): Promise<SpendableBalanceResponse>;
    /**
     * zigchaind query bank spendable-balances <address>
     */
    fetchSpendableBalances(address: string): Promise<SpendableBalancesResponse>;
    /**
     * zigchaind query bank params
     * zigchaind query bank params --height <H>
     */
    fetchParams(): Promise<BankParamsResponse>;
}
//# sourceMappingURL=ChainBankApi.d.ts.map