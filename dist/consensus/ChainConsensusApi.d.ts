import type { NetworkEndpoints } from '../networks/endpoints.js';
export declare class ChainConsensusApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query consensus params
     */
    fetchConsensusParams(options?: {
        height?: number;
    }): Promise<import("./types.js").ConsensusParams>;
}
//# sourceMappingURL=ChainConsensusApi.d.ts.map