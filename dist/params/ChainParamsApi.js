import { HttpClient } from '../client/http.js';
export class ChainParamsApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query params subspace
     */
    async fetchParam(subspace, key) {
        const data = await this.client.get(`/cosmos/params/v1beta1/params/${subspace}/${key}`);
        return data;
    }
    /**
     * zigchaind query params subspaces
     */
    async fetchSubspaces() {
        const data = await this.client.get('/cosmos/params/v1beta1/subspaces');
        return data;
    }
}
//# sourceMappingURL=ChainParamsApi.js.map