export interface BlockResponse {
    block_id: {
        hash: string;
        part_set_header: {
            total: number;
            hash: string;
        };
    };
    block: {
        header: Record<string, any>;
        data: Record<string, any>;
        evidence: Record<string, any>;
        last_commit: Record<string, any>;
    };
}
//# sourceMappingURL=types.d.ts.map