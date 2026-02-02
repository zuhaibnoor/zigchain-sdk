import { HttpClient } from '../client/http.js';
export class ChainGovApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query gov constitution
     */
    async fetchConstitution() {
        const data = await this.client.get('/cosmos/gov/v1/constitution');
        return data;
    }
    /**
     * zigchaind query gov proposal <id>
     */
    async fetchProposal(proposalId) {
        const data = await this.client.get(`/cosmos/gov/v1/proposals/${proposalId}`);
        return data;
    }
    /**
     * zigchaind query gov proposals
     */
    async fetchAllProposals() {
        const data = await this.client.get('/cosmos/gov/v1/proposals');
        return data;
    }
    // /**
    //  * zigchaind query gov vote <proposal_id> <voter>
    //  */
    // async fetchVote(proposalId: string | number, voter: string) {
    //   const data = await this.client.get<VoteResponse>(
    //     `/cosmos/gov/v1/proposals/${proposalId}/votes/${voter}`
    //   )
    //   return data
    // }
    // /**
    //  * zigchaind query gov votes <proposal_id>
    //  */
    // async fetchVotes(proposalId: string | number) {
    //   const data = await this.client.get<VotesResponse>(
    //     `/cosmos/gov/v1/proposals/${proposalId}/votes`
    //   )
    //   return data
    // }
    // /**
    //  * zigchaind query gov deposit <proposal_id> <depositor>
    //  */
    // async fetchDeposit(proposalId: string | number, depositor: string) {
    //   const data = await this.client.get<DepositResponse>(
    //     `/cosmos/gov/v1/proposals/${proposalId}/deposits/${depositor}`
    //   )
    //   return data
    // }
    // /**
    //  * zigchaind query gov deposits <proposal_id>
    //  */
    // async fetchDeposits(proposalId: string | number) {
    //   const data = await this.client.get<DepositsResponse>(
    //     `/cosmos/gov/v1/proposals/${proposalId}/deposits`
    //   )
    //   return data
    // }
    /**
     * zigchaind query gov tally <proposal_id>
     */
    async fetchTally(proposalId) {
        const data = await this.client.get(`/cosmos/gov/v1/proposals/${proposalId}/tally`);
        return data;
    }
    /**
     * zigchaind query gov params
     */
    async fetchParams(params_type) {
        const data = await this.client.get(`/cosmos/gov/v1/params/${params_type}`);
        return data;
    }
}
//# sourceMappingURL=ChainGovApi.js.map