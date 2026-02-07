export interface FeeGrantResponse {
    allowance: {
        granter: string;
        grantee: string;
        allowance: {
            type_url: string;
            value: any;
        };
    };
}
export interface FeeGrantsByGranteeResponse {
    allowances: FeeGrantResponse['allowance'][];
}
export interface FeeGrantsByGranterResponse {
    allowances: FeeGrantResponse['allowance'][];
}
//# sourceMappingURL=types.d.ts.map