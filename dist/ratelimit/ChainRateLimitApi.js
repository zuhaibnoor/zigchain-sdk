// src/ratelimit/ChainRateLimit.ts
import { HttpClient } from '../client/http.js';
export class ChainRateLimitApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query ratelimit list-rate-limits
     */
    async fetchAllRateLimits() {
        const data = await this.client.get('/zigchain/ratelimit/v1beta1/ratelimits');
        return data;
    }
    /**
     * zigchaind query ratelimit rate-limit
     */
    async fetchRateLimit(channelId, denom) {
        const data = await this.client.get(`/zigchain/ratelimit/v1beta1/ratelimit/${channelId}/${denom}`);
        return data;
    }
    /**
     * zigchaind query ratelimit rate-limits-by-chain
     */
    async fetchRateLimitsByChain(chainId) {
        const data = await this.client.get(`/zigchain/ratelimit/v1beta1/ratelimits/${chainId}`);
        return data;
    }
}
//# sourceMappingURL=ChainRateLimitApi.js.map