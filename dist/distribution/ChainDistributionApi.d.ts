import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { ValidatorCommissionResponse, CommunityPoolResponse, DelegatorValidators, DelegatorWithdrawAddressResponse, DistributionParamsResponse } from './types.js';
export declare class ChainDistributionApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query distribution commission <validator>
     */
    fetchValidatorCommission(validator: string): Promise<ValidatorCommissionResponse>;
    /**
     * zigchaind query distribution community-pool
     */
    fetchCommunityPool(): Promise<CommunityPoolResponse>;
    /**
     * zigchaind query distribution delegator-validators <delegator>
     */
    fetchDelegatorValidators(delegator: string): Promise<DelegatorValidators>;
    /**
     * zigchaind query distribution delegator-withdraw-address <delegator>
     */
    fetchDelegatorWithdrawAddress(delegator: string): Promise<DelegatorWithdrawAddressResponse>;
    /**
     * zigchaind query distribution params
     */
    fetchParams(): Promise<DistributionParamsResponse>;
}
//# sourceMappingURL=ChainDistributionApi.d.ts.map