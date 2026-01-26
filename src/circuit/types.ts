export interface CircuitAccountResponse {
  permission: {
    level: string
    limit: string
  }
}

export interface CircuitAccountsResponse {
  permissions: Array<{
    address: string
    permission: {
      level: string
      limit: string
    }
  }>
}

export interface DisabledMessagesResponse {
  disabled_messages: string[]
}
