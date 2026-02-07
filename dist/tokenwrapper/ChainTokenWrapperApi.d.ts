import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { TokenWrapperModuleInfoResponse, TokenWrapperParamsResponse, TokenWrapperTotalTransfersResponse } from './types.js';
export declare class ChainTokenWrapperApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query tokenwrapper module-info
     */
    fetchModuleInfo(): Promise<TokenWrapperModuleInfoResponse>;
    /**
     * zigchaind query tokenwrapper params
     */
    fetchParams(): Promise<TokenWrapperParamsResponse>;
    /**
     * zigchaind query tokenwrapper total-transfers
     */
    fetchTotalTransfers(): Promise<TokenWrapperTotalTransfersResponse>;
}
//# sourceMappingURL=ChainTokenWrapperApi.d.ts.map