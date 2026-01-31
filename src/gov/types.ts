/* Governance module response types */

export interface Pagination {
  next_key: string | null
  total?: string
}

export interface ProposalResponse {
  proposal: any
}

export interface ProposalsResponse {
  proposals: any[]
  pagination?: Pagination
}

export interface VoteResponse {
  vote: any
}

export interface VotesResponse {
  votes: any[]
  pagination?: Pagination
}

export interface DepositResponse {
  deposit: any
}

export interface DepositsResponse {
  deposits: any[]
  pagination?: Pagination
}

export interface TallyResponse {
  tally: any
}

export interface GovParamsResponse {
  params: any
}

export interface ConstitutionResponse {
  constitution: string
}
