export declare class HttpClient {
    private readonly baseUrl;
    constructor(baseUrl: string);
    get<T>(path: string, headers?: Record<string, string>): Promise<T>;
}
//# sourceMappingURL=http.d.ts.map