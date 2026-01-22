export interface ConsensusParamsResponse {
    params: ConsensusParams;
}
export interface ConsensusParams {
    block: {
        max_bytes: string;
        max_gas: string;
    };
    evidence: {
        max_age_num_blocks: string;
        max_age_duration: string;
        max_bytes: string;
    };
    validator: {
        pub_key_types: string[];
    };
}
//# sourceMappingURL=types.d.ts.map