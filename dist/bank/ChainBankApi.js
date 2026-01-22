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
}
//# sourceMappingURL=ChainBankApi.js.map