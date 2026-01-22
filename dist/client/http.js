// export class HttpClient {
//   private baseUrl: string
//   constructor(baseUrl: string) {
//     this.baseUrl = baseUrl.replace(/\/$/, '')
//   }
//   async get<T>(path: string): Promise<T> {
//     const res = await fetch(`${this.baseUrl}${path}`)
//     if (!res.ok) {
//       throw new Error(`HTTP ${res.status}: ${res.statusText}`)
//     }
//     return res.json() as Promise<T>
//   }
// }
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