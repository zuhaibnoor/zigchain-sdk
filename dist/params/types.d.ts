export interface SubspaceParamResponse {
    param: {
        subspace: string;
        key: string;
        value: string;
    };
}
export interface SubspaceInfo {
    subspace: string;
    keys: string[];
}
export interface SubspacesResponse {
    subspaces: SubspaceInfo[];
}
//# sourceMappingURL=types.d.ts.map