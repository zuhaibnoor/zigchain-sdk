// src/block/ChainBlockApi.ts
import { HttpClient } from '../client/http.js';
export class ChainBlockApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query block --type=height <height>
     */
    async getBlockByHeight(height, atHeight) {
        const headers = atHeight
            ? { 'x-cosmos-block-height': atHeight.toString() }
            : undefined;
        return this.client.get(`/cosmos/base/tendermint/v1beta1/blocks/${height}`, headers);
    }
    /**
     * Fetch latest block
     * zigchaind query block
     */
    async getLatestBlock(atHeight) {
        const headers = atHeight
            ? { 'x-cosmos-block-height': atHeight.toString() }
            : undefined;
        return this.client.get('/cosmos/base/tendermint/v1beta1/blocks/latest', headers);
    }
}
//# sourceMappingURL=ChainBlockApi.js.map