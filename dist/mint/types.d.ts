export interface MintInflationResponse {
    inflation: string;
}
export interface MintAnnualProvisionsResponse {
    annual_provisions: string;
}
export interface MintParams {
    mint_denom: string;
    inflation_rate_change: string;
    inflation_max: string;
    inflation_min: string;
    goal_bonded: string;
    blocks_per_year: string;
}
export interface MintParamsResponse {
    params: MintParams;
}
//# sourceMappingURL=types.d.ts.map