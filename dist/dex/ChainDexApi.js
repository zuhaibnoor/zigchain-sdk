import { HttpClient } from '../client/http.js';
export class ChainDexApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query dex get-pool <pool-id>
     */
    async fetchPool(poolId) {
        return this.client.get(`/zigchain/dex/pool/${poolId}`);
    }
    /**
     * zigchaind cquery dex get-pool-balances <pool-id>
     */
    async fetchPoolBalances(poolId) {
        return this.client.get(`/zigchain/dex/pool-balances/${poolId}`);
    }
    /**
     *  fetch pool uids
     */
    async fetchPoolUids(tokenA, tokenB) {
        return this.client.get(`/zigchain/dex/pool_uids/${tokenA}/${tokenB}`);
    }
    /**
    * zigchaind query dex params
    */
    async fetchParams() {
        return this.client.get('/zigchain/dex/params');
    }
}
//# sourceMappingURL=ChainDexApi.js.map