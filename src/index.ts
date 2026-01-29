export * from './consensus/ChainConsensusApi.js'
export * from './consensus/types.js'

export * from './networks/endpoints.js'
export * from './networks/types.js'

export * from './bank/ChainBankApi.js'
export * from './bank/types.js'

export * from './block/ChainBlockApi.js'
export * from './block/types.js'

export * from './block-results/ChainBlockResultsApi.js'
export * from './block-results/types.js'

export * from './circuit/ChainCircuitApi.js'
export * from './circuit/types.js'

export * from './dex/ChainDexApi.js'
export * from './dex/types.js'

export * from './auth/ChainAuthApi.js'
export * from './auth/types.js'


export function helloZigChain() {
  return "Hello ZigChain SDK";
}



console.log(helloZigChain())

