// import { HttpClient } from '../client/http.js'
// import type { NetworkEndpoints } from '../networks/endpoints.js'
// import type { ConsensusParamsResponse } from './types.js'
// export class ChainConsensusApi {
//   private client: HttpClient
//   constructor(endpoints: NetworkEndpoints) {
//     this.client = new HttpClient(endpoints.lcd)
//   }
//   /**
//    * zigchaind query consensus params
//    */
//   async fetchConsensusParams() {
//     const data = await this.client.get<ConsensusParamsResponse>(
//       '/cosmos/consensus/v1/params'
//     )
//     return data.params
//   }
// }
import { HttpClient } from '../client/http.js';
export class ChainConsensusApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query consensus params
     */
    async fetchConsensusParams(options) {
        const headers = options?.height !== undefined
            ? { 'x-cosmos-block-height': String(options.height) }
            : undefined;
        const data = await this.client.get('/cosmos/consensus/v1/params', headers);
        return data.params;
    }
}
//# sourceMappingURL=ChainConsensusApi.js.map