import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { SubspaceParamResponse, SubspacesResponse } from './types.js';
export declare class ChainParamsApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query params subspace
     */
    fetchParam(subspace: string, key: string): Promise<SubspaceParamResponse>;
    /**
     * zigchaind query params subspaces
     */
    fetchSubspaces(): Promise<SubspacesResponse>;
}
//# sourceMappingURL=ChainParamsApi.d.ts.map