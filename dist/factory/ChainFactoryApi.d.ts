import type { NetworkEndpoints } from "../networks/endpoints.js";
import type { FactoryParamsResponse, DenomAuthResponse, DenomsByAdminResponse, ShowDenomResponse } from './types.js';
export declare class ChainFactoryApi {
    private client;
    constructor(endpoints: NetworkEndpoints); /**
   * zigchaind query factory params
   */
    fetchParams(): Promise<FactoryParamsResponse>;
    /**
     * zigchaind query factory denoms-by-admin <address>
     */
    fetchDenomsByAdmin(admin: string): Promise<DenomsByAdminResponse>;
    /**
     * zigchaind query factory show-denom <denom>
     */
    fetchDenom(denom: string): Promise<ShowDenomResponse>;
    /**
     * zigchaind query factory denom-auth <denom>
     */
    fetchDenomAuth(denom: string): Promise<DenomAuthResponse>;
}
//# sourceMappingURL=ChainFactoryApi.d.ts.map