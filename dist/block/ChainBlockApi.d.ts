import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { BlockResponse } from './types.js';
export declare class ChainBlockApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query block --type=height <height>
     */
    getBlockByHeight(height: number, atHeight?: number): Promise<BlockResponse>;
    /**
     * Fetch latest block
     * zigchaind query block
     */
    getLatestBlock(atHeight?: number): Promise<unknown>;
}
//# sourceMappingURL=ChainBlockApi.d.ts.map