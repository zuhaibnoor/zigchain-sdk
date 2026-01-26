import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { BlockResultsResponse } from './types.js';
export declare class ChainBlockResultsApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query block-results [height]
     */
    fetchBlockResults(height: number): Promise<BlockResultsResponse>;
}
//# sourceMappingURL=ChainBlockResultsApi.d.ts.map