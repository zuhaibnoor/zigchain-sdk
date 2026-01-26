import { HttpClient } from '../client/http.js';
export class ChainBlockResultsApi {
    client;
    constructor(endpoints) {
        // block-results uses CometBFT RPC, NOT LCD
        this.client = new HttpClient(endpoints.rpc);
    }
    /**
     * zigchaind query block-results [height]
     */
    async fetchBlockResults(height) {
        return this.client.get(`/block_results?height=${height}`);
    }
}
//# sourceMappingURL=ChainBlockResultsApi.js.map