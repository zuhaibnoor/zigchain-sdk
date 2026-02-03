import { HttpClient } from '../client/http.js';
export class ChainStakingApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query staking delegation
     */
    async fetchDelegation(delegatorAddress, validatorAddress) {
        const data = await this.client.get(`/cosmos/staking/v1beta1/delegators/${delegatorAddress}/validators/${validatorAddress}`);
        return data;
    }
    /**
     * zigchaind query staking delegations
     */
    async fetchDelegations(delegatorAddress) {
        const data = await this.client.get(`/cosmos/staking/v1beta1/delegations/${delegatorAddress}`);
        return data;
    }
    async fetchValidatorDelegations(validator_addr) {
        const data = await this.client.get(`/cosmos/staking/v1beta1/validators/${validator_addr}/delegations`);
        return data;
    }
    /**
     * zigchaind query staking delegator-validator
     * Query validator info for given delegator validator pair
     */
    async fetchDelegatorValidator(delegatorAddress, validatorAddress) {
        const data = await this.client.get(`/cosmos/staking/v1beta1/delegators/${delegatorAddress}/validators/${validatorAddress}`);
        return data;
    }
    /**
     * zigchaind query staking delegator-validators
     * Query all validators info for given delegator address
     */
    async fetchDelegatorValidators(delegatorAddress) {
        const data = await this.client.get(`/cosmos/staking/v1beta1/delegators/${delegatorAddress}/validators`);
        return data;
    }
}
//# sourceMappingURL=ChainStakingApi.js.map