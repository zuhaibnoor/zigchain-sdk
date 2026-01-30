import { HttpClient } from "../client/http.js";
import type { NetworkEndpoints } from "../networks/endpoints.js";

export class ChainFactoryApi {
    private client:HttpClient
    constructor( endpoints: NetworkEndpoints){
        this.client =  new HttpClient(endpoints.lcd)
    }

    
}