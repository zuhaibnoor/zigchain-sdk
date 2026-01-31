import { HttpClient } from "../client/http.js";
export class ChainFactoryApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    } /**
   * zigchaind query factory params
   */
    async fetchParams() {
        const data = await this.client.get('/zigchain/factory/params');
        return data;
    }
    /**
     * zigchaind query factory denoms-by-admin <address>
     */
    async fetchDenomsByAdmin(admin) {
        const data = await this.client.get(`/zigchain/factory/denomByAdmin/${admin}`);
        return data;
    }
    /**
     * zigchaind query factory show-denom <denom>
     */
    async fetchDenom(denom) {
        const data = await this.client.get(`/zigchain/factory/denom/${denom}`);
        return data;
    }
    /**
     * zigchaind query factory denom-auth <denom>
     */
    async fetchDenomAuth(denom) {
        const data = await this.client.get(`/zigchain/factory/denom_auth/${denom}`);
        return data;
    }
}
//# sourceMappingURL=ChainFactoryApi.js.map