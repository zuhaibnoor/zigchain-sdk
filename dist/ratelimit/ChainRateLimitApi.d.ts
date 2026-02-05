import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { RateLimitResponse, RateLimitsResponse } from './types.js';
export declare class ChainRateLimitApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query ratelimit list-rate-limits
     */
    fetchAllRateLimits(): Promise<RateLimitsResponse>;
    /**
     * zigchaind query ratelimit rate-limit
     */
    fetchRateLimit(channelId: string, denom: string): Promise<RateLimitResponse>;
    /**
     * zigchaind query ratelimit rate-limits-by-chain
     */
    fetchRateLimitsByChain(chainId: string): Promise<RateLimitsResponse>;
}
//# sourceMappingURL=ChainRateLimitApi.d.ts.map