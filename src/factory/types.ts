/* Factory module response types */

export interface FactoryParamsResponse {
  params: Record<string, unknown>
}

export interface DenomAuth {
  denom: string
  admin: string
}

export interface DenomAuthResponse {
  denom_auth: DenomAuth
}

export interface DenomsByAdminResponse {
  denoms: string[]
}

export interface ListDenomResponse {
  denoms: string[]
}

export interface ShowDenomResponse {
  denom: {
    denom: string
    admin: string
  }
}

export interface ListDenomAuthResponse {
  denom_auths: DenomAuth[]
}
