import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { RuntimeConfigResponse } from './types.js';
export declare class ChainRuntimeApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query runtime config
     * Query the current application runtime configuration
     */
    fetchConfig(): Promise<RuntimeConfigResponse>;
}
//# sourceMappingURL=ChainRuntimeApi.d.ts.map