import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { EvidenceResponse, EvidencesResponse } from './types.js';
export declare class ChainEvidenceApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query evidence evidence <hash>
     */
    fetchEvidence(hash: string): Promise<EvidenceResponse>;
    /**
     * zigchaind query evidence list
     */
    fetchAllEvidence(): Promise<EvidencesResponse>;
}
//# sourceMappingURL=ChainEvidenceApi.d.ts.map