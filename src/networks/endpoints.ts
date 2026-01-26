import { Network } from './types.js'

export interface NetworkEndpoints {
  lcd: string
  rpc: string
}

export function getNetworkEndpoints(
  network: Network
): NetworkEndpoints {
  switch (network) {
    case Network.Testnet:
      return {
        lcd: 'https://public-zigchain-testnet-lcd.numia.xyz',
        rpc: 'https://public-zigchain-testnet-rpc.numia.xyz'
      }

    case Network.Mainnet:
      return {
        lcd: 'https://public-zigchain-mainnet-lcd.example.xyz',
        rpc: 'https://public-zigchain-mainnet-rpc.example.xyz'
      }

    default:
      throw new Error(`Unsupported network: ${network}`)
  }
}
