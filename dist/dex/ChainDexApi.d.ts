import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { DexPoolResponse } from './types.js';
export declare class ChainDexApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query dex get-pool <pool-id>
     */
    fetchPool(poolId: string): Promise<DexPoolResponse>;
}
//# sourceMappingURL=ChainDexApi.d.ts.map