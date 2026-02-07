import { HttpClient } from '../client/http.js';
export class ChainRuntimeApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query runtime config
     * Query the current application runtime configuration
     */
    async fetchConfig() {
        const data = await this.client.get('/cosmos/base/node/v1beta1/config');
        return data;
    }
}
//# sourceMappingURL=ChainRuntimeApi.js.map