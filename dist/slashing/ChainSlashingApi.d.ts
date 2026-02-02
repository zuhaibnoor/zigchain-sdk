import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { SlashingParamsResponse, SigningInfoResponse, SigningInfosResponse } from './types.js';
export declare class ChainSlashingApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query slashing params
     */
    fetchParams(): Promise<SlashingParamsResponse>;
    /**
     * zigchaind query slashing signing-info <valcons-address>
     */
    fetchSigningInfo(valConsAddress: string): Promise<SigningInfoResponse>;
    /**
     * zigchaind query slashing signing-infos
     */
    fetchSigningInfos(): Promise<SigningInfosResponse>;
}
//# sourceMappingURL=ChainSlashingApi.d.ts.map