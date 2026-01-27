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
}
//# sourceMappingURL=ChainDexApi.js.map