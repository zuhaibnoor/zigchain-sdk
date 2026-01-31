export interface Pagination {
    next_key: string | null;
    total?: string;
}
export interface FactoryParamsResponse {
    params: Record<string, unknown>;
}
export interface DenomAuth {
    denom: string;
    admin: string;
}
export interface DenomAuthResponse {
    denom_auth: DenomAuth;
}
export interface DenomsByAdminResponse {
    denoms: string[];
}
export interface ListDenomResponse {
    denoms: string[];
    pagination?: Pagination;
}
export interface ShowDenomResponse {
    denom: {
        denom: string;
        admin: string;
    };
}
export interface ListDenomAuthResponse {
    denom_auths: DenomAuth[];
}
//# sourceMappingURL=types.d.ts.map