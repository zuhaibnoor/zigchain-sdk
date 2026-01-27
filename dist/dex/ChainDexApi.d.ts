import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { DexPoolResponse, DexPoolBalancesResponse, poolUidResponse, DexParamsResponse } from './types.js';
export declare class ChainDexApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query dex get-pool <pool-id>
     */
    fetchPool(poolId: string): Promise<DexPoolResponse>;
    /**
     * zigchaind cquery dex get-pool-balances <pool-id>
     */
    fetchPoolBalances(poolId: string): Promise<DexPoolBalancesResponse>;
    /**
     *  fetch pool uids
     */
    fetchPoolUids(tokenA: string, tokenB: string): Promise<poolUidResponse>;
    /**
    * zigchaind query dex params
    */
    fetchParams(): Promise<DexParamsResponse>;
}
//# sourceMappingURL=ChainDexApi.d.ts.map