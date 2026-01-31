import {
  ChainGovApi,
  getNetworkEndpoints,
  Network
} from '../../dist/index.js'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const govApi = new ChainGovApi(endpoints)

  const proposalId = 59

//   console.log('\n📜 Constitution')
//   console.log(await govApi.fetchConstitution())

//   console.log('\n📋 Proposals')
//   const proposals = await govApi.fetchAllProposals()
//   console.dir(proposals, { depth: null })

//   console.log('\n📌 Proposal Detail')
//   console.dir(await govApi.fetchProposal(proposalId), { depth: null })

//   console.log('\n📊 Tally')
//   console.log(await govApi.fetchTally(proposalId))

  console.log('\nProposal votes')
  console.dir(await govApi.fetchVotes(proposalId), {depth:null})

  

}

main()
