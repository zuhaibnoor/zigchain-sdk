export interface Delegation {
    delegator_address: string;
    validator_address: string;
    shares: string;
}
export interface Balance {
    denom: string;
    amount: string;
}
export interface DelegationResponse {
    delegation: Delegation;
    balance: Balance;
}
export interface DelegationsResponse {
    delegation_responses: DelegationResponse[];
}
export interface Validator {
    operator_address: string;
    consensus_pubkey: {
        '@type': string;
        key: string;
    };
    jailed: boolean;
    status: string;
    tokens: string;
    delegator_shares: string;
    description: {
        moniker: string;
        identity: string;
        website: string;
        security_contact: string;
        details: string;
    };
    commission: {
        commission_rates: {
            rate: string;
            max_rate: string;
            max_change_rate: string;
        };
        update_time: string;
    };
    min_self_delegation: string;
}
export interface DelegationsToResponse {
    delegation_responses: DelegationResponse[];
}
export interface DelegatorValidatorResponse {
    validator: Validator;
}
export interface DelegatorValidatorsResponse {
    validators: Validator[];
}
//# sourceMappingURL=types.d.ts.map