// src/distribution/ChainDistributionApi.ts
import { HttpClient } from '../client/http.js';
export class ChainDistributionApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query distribution commission <validator>
     */
    async fetchValidatorCommission(validator) {
        const data = await this.client.get(`/cosmos/distribution/v1beta1/validators/${validator}/commission`);
        return data;
    }
    /**
     * zigchaind query distribution community-pool
     */
    async fetchCommunityPool() {
        const data = await this.client.get('/cosmos/distribution/v1beta1/community_pool');
        return data;
    }
    /**
     * zigchaind query distribution delegator-validators <delegator>
     */
    async fetchDelegatorValidators(delegator) {
        const data = await this.client.get(`/cosmos/distribution/v1beta1/delegators/${delegator}/validators`);
        return data;
    }
    /**
     * zigchaind query distribution delegator-withdraw-address <delegator>
     */
    async fetchDelegatorWithdrawAddress(delegator) {
        const data = await this.client.get(`/cosmos/distribution/v1beta1/delegators/${delegator}/withdraw_address`);
        return data;
    }
    /**
     * zigchaind query distribution params
     */
    async fetchParams() {
        const data = await this.client.get('/cosmos/distribution/v1beta1/params');
        return data;
    }
    //==========================
    /**
     * zigchaind query distribution rewards <delegator-address>
     */
    async fetchDelegatorRewards(delegator) {
        return this.client.get(`/cosmos/distribution/v1beta1/delegators/${delegator}/rewards`);
    }
    /**
     * zigchaind query distribution rewards-by-validator
     */
    async fetchDelegatorRewardsByValidator(delegator, validator) {
        return this.client.get(`/cosmos/distribution/v1beta1/delegators/${delegator}/rewards/${validator}`);
    }
    /**
     * zigchaind query distribution slashes <validator-address>
     */
    async fetchValidatorSlashes(validator) {
        return this.client.get(`/cosmos/distribution/v1beta1/validators/${validator}/slashes`);
    }
    /**
     * zigchaind query distribution validator-distribution-info <validator-address>
     */
    async fetchValidatorDistributionInfo(validator) {
        return this.client.get(`/cosmos/distribution/v1beta1/validators/${validator}`);
    }
    /**
     * zigchaind query distribution validator-outstanding-rewards <validator-address>
     */
    async fetchValidatorOutstandingRewards(validator) {
        return this.client.get(`/cosmos/distribution/v1beta1/validators/${validator}/outstanding_rewards`);
    }
}
//# sourceMappingURL=ChainDistributionApi.js.map