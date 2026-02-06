import {
  ChainEvidenceApi,
  getNetworkEndpoints,
  Network
} from '../../dist/index.js'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const evidenceApi = new ChainEvidenceApi(endpoints)

  console.log('--- All Evidence ---')
  const allEvidence = await evidenceApi.fetchAllEvidence()
  console.dir(allEvidence, { depth: null })

  // Replace with a real evidence hash if available
  // console.log('\n--- Single Evidence ---')
  // const evidence = await evidenceApi.fetchEvidence('<evidence-hash>')
  // console.dir(evidence, { depth: null })
}

main()
