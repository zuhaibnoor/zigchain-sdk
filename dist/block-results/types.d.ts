export interface BlockResultsResponse {
    height: string;
    txs_results: Array<{
        code: number;
        data: string;
        log: string;
        info: string;
        gas_wanted: string;
        gas_used: string;
        events: Array<{
            type: string;
            attributes: Array<{
                key: string;
                value: string;
                index: boolean;
            }>;
        }>;
    }> | null;
    begin_block_events: any[] | null;
    end_block_events: any[] | null;
    validator_updates: any[];
    consensus_param_updates: any | null;
}
//# sourceMappingURL=types.d.ts.map