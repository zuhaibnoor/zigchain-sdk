export interface Evidence {
  type_url: string
  value: any
}

export interface EvidenceResponse {
  evidence: Evidence
}

export interface EvidencesResponse {
  evidence: Evidence[]
  pagination?: {
    next_key: string | null
    total: string
  }
}
