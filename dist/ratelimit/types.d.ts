export interface RateLimit {
    chain_id: string;
    channel_id: string;
    denom: string;
    quota: {
        max_percent_send: string;
        max_tokens: string;
        duration_hours: string;
    };
    flow: {
        inflow: string;
        outflow: string;
    };
}
export interface RateLimitResponse {
    rate_limit: RateLimit;
}
export interface RateLimitsResponse {
    rate_limits: RateLimit[];
}
//# sourceMappingURL=types.d.ts.map