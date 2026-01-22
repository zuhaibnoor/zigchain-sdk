import { Network } from './types.js';
export function getNetworkEndpoints(network) {
    switch (network) {
        case Network.Testnet:
            return {
                lcd: 'https://public-zigchain-testnet-lcd.numia.xyz',
            };
        case Network.Mainnet:
            return {
                lcd: 'https://public-zigchain-mainnet-lcd.example.xyz',
            };
        default:
            throw new Error(`Unsupported network: ${network}`);
    }
}
//# sourceMappingURL=endpoints.js.map