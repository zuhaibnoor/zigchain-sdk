import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { ProposalResponse, ProposalsResponse, TallyResponse, GovParamsResponse, ConstitutionResponse } from './types.js';
export declare class ChainGovApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query gov constitution
     */
    fetchConstitution(): Promise<ConstitutionResponse>;
    /**
     * zigchaind query gov proposal <id>
     */
    fetchProposal(proposalId: string | number): Promise<ProposalResponse>;
    /**
     * zigchaind query gov proposals
     */
    fetchAllProposals(): Promise<ProposalsResponse>;
    /**
     * zigchaind query gov tally <proposal_id>
     */
    fetchTally(proposalId: string | number): Promise<TallyResponse>;
    /**
     * zigchaind query gov params
     */
    fetchParams(params_type: string): Promise<GovParamsResponse>;
}
//# sourceMappingURL=ChainGovApi.d.ts.map