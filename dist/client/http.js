export class HttpClient {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async get(path, headers) {
        const init = {
            method: 'GET'
        };
        if (headers) {
            init.headers = headers;
        }
        const res = await fetch(this.baseUrl + path, init);
        return res.json();
    }
}
//# sourceMappingURL=http.js.map