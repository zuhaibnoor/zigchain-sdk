import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { ProposalResponse, ProposalsResponse, VoteResponse, VotesResponse, DepositResponse, DepositsResponse, TallyResponse, GovParamsResponse, ConstitutionResponse } from './types.js';
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
     * zigchaind query gov vote <proposal_id> <voter>
     */
    fetchVote(proposalId: string | number, voter: string): Promise<VoteResponse>;
    /**
     * zigchaind query gov votes <proposal_id>
     */
    fetchVotes(proposalId: string | number): Promise<VotesResponse>;
    /**
     * zigchaind query gov deposit <proposal_id> <depositor>
     */
    fetchDeposit(proposalId: string | number, depositor: string): Promise<DepositResponse>;
    /**
     * zigchaind query gov deposits <proposal_id>
     */
    fetchDeposits(proposalId: string | number): Promise<DepositsResponse>;
    /**
     * zigchaind query gov tally <proposal_id>
     */
    fetchTally(proposalId: string | number): Promise<TallyResponse>;
    /**
     * zigchaind query gov params
     */
    fetchParams(): Promise<GovParamsResponse>;
}
//# sourceMappingURL=ChainGovApi.d.ts.map