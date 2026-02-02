import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { MintInflationResponse, MintAnnualProvisionsResponse, MintParamsResponse } from './types.js';
export declare class ChainMintApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query mint inflation
     */
    fetchInflation(): Promise<MintInflationResponse>;
    /**
     * zigchaind query mint annual-provisions
     */
    fetchAnnualProvisions(): Promise<MintAnnualProvisionsResponse>;
    /**
     * zigchaind query mint params
     */
    fetchParams(): Promise<MintParamsResponse>;
}
//# sourceMappingURL=ChainMintApi.d.ts.map