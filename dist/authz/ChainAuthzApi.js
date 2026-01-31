import { HttpClient } from "../client/http.js";
export class ChainAuthzApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
}
//# sourceMappingURL=ChainAuthzApi.js.map