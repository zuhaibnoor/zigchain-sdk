export interface SlashingParamsResponse {
  params: {
    signed_blocks_window: string
    min_signed_per_window: string
    downtime_jail_duration: string
    slash_fraction_double_sign: string
    slash_fraction_downtime: string
  }
}

export interface ValidatorSigningInfo {
  address: string
  start_height: string
  index_offset: string
  jailed_until: string
  tombstoned: boolean
  missed_blocks_counter: string
}

export interface SigningInfoResponse {
  val_signing_info: ValidatorSigningInfo
}

export interface SigningInfosResponse {
  info: ValidatorSigningInfo[]
}
