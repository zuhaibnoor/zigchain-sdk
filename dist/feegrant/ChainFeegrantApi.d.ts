import type { NetworkEndpoints } from "../networks/endpoints.js";
import type { FeeGrantResponse, FeeGrantsByGranteeResponse, FeeGrantsByGranterResponse } from './types.js';
export declare class ChainFeeGrantApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query feegrant grant <granter> <grantee>
     * Query a single fee grant between granter and grantee
     */
    fetchGrant(granter: string, grantee: string): Promise<FeeGrantResponse>;
    /**
     * zigchaind query feegrant grants-by-grantee <grantee>
     * Query all fee grants received by a grantee
     */
    fetchGrantsByGrantee(grantee: string): Promise<FeeGrantsByGranteeResponse>;
    /**
     * zigchaind query feegrant grants-by-granter <granter>
     * Query all fee grants issued by a granter
     */
    fetchGrantsByGranter(granter: string): Promise<FeeGrantsByGranterResponse>;
}
//# sourceMappingURL=ChainFeegrantApi.d.ts.map