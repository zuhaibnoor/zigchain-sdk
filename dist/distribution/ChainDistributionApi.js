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
}
//# sourceMappingURL=ChainDistributionApi.js.map