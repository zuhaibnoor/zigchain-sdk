import { HttpClient } from '../client/http.js';
export class ChainBankApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query bank balance <address> <denom>
     */
    async fetchBalance(address, denom) {
        const data = await this.client.get(`/cosmos/bank/v1beta1/balances/${address}/by_denom?denom=${denom}`);
        return data.balance;
    }
    /**
     * zigchaind query bank balances <address>
     */
    async fetchBalances(address) {
        const data = await this.client.get(`/cosmos/bank/v1beta1/balances/${address}`);
        return data.balances;
    }
    /**
     * zigchaind query bank total-supply
     */
    async fetchTotalSupply() {
        const data = await this.client.get('/cosmos/bank/v1beta1/supply');
        return data.supply;
    }
    /**
     * zigchaind query bank total-supply-of <denom>
     */
    async fetchSupplyOf(denom) {
        const data = await this.client.get(`/cosmos/bank/v1beta1/supply/by_denom?denom=${denom}`);
        return data.amount;
    }
    //====
    /**
   * Fetch metadata for a specific denom
   * zigchaind query bank denom-metadata <denom>
   */
    async fetchDenomMetadata(denom) {
        const data = await this.client.get(`/cosmos/bank/v1beta1/denoms_metadata/${denom}`);
        return data;
    }
    /**
     * Query metadata by string (partial match)
     * zigchaind query bank denom-metadata-by-query-string <query>
     */
    async queryDenomMetadataByQuery(query) {
        const data = await this.client.get(`/cosmos/bank/v1beta1/denoms_metadata_by_query_string?denom=${query}`);
        return data;
    }
    /**
     * Fetch all owners of a specific denom
     * zigchaind query bank denom-owners <denom>
     */
    async fetchDenomOwners(denom) {
        const data = await this.client.get(`/cosmos/bank/v1beta1/denom_owners/${denom}`);
        return data;
    }
    /**
     * Query denom owners by query string (partial match)
     * zigchaind query bank denom-owners-by-query <query>
     */
    async queryDenomOwnersByQuery(query) {
        const data = await this.client.get(`/cosmos/bank/v1beta1/denom_owners_by_query?denom=${query}`);
        return data;
    }
    /**
     * Fetch metadata for all registered coin denominations
     * zigchaind query bank denoms-metadata
     */
    async fetchAllDenomsMetadata() {
        const data = await this.client.get(`/cosmos/bank/v1beta1/denoms_metadata`);
        return data.metadatas;
    }
}
//# sourceMappingURL=ChainBankApi.js.map