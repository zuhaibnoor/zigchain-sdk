import { HttpClient } from "../client/http.js";
export class ChainFeeGrantApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query feegrant grant <granter> <grantee>
     * Query a single fee grant between granter and grantee
     */
    async fetchGrant(granter, grantee) {
        const data = await this.client.get(`/cosmos/feegrant/v1beta1/allowance/${granter}/${grantee}`);
        return data;
    }
    /**
     * zigchaind query feegrant grants-by-grantee <grantee>
     * Query all fee grants received by a grantee
     */
    async fetchGrantsByGrantee(grantee) {
        const data = await this.client.get(`/cosmos/feegrant/v1beta1/allowances/${grantee}`);
        return data;
    }
    /**
     * zigchaind query feegrant grants-by-granter <granter>
     * Query all fee grants issued by a granter
     */
    async fetchGrantsByGranter(granter) {
        const data = await this.client.get(`/cosmos/feegrant/v1beta1/issued/${granter}`);
        return data;
    }
}
//# sourceMappingURL=ChainFeegrantApi.js.map