# Quick Usage Guide

## Bank Module 

Import the Bank API and network endpoints:

```ts
import {
  ChainBankApi,
  getNetworkEndpoints,
  Network,
} from '@zuhaibnoor/zigchain-sdk'
````

Initialize the Bank API:

```ts
const endpoints = getNetworkEndpoints(Network.Testnet)
const bankApi = new ChainBankApi(endpoints)
```

### Fetch all balances of an address

```ts
const address = 'zig1xxxxxxxxxxxxxxxxxxxxxxxxxxxx'

const balances = await bankApi.fetchBalances(address)
console.dir(balances, { depth: null })
```

### Fetch balance of a specific denom

```ts
const balance = await bankApi.fetchBalance(address, 'uzig')
console.dir(balance, { depth: null })
```

### Fetch total supply of all tokens

```ts
const supply = await bankApi.fetchTotalSupply()
console.dir(supply, { depth: null })
````

### Fetch supply of a specific token denomination

```ts
const supplyOf = await bankApi.fetchSupplyOf('uzig')
console.dir(supplyOf, { depth: null })
```


### Fetch metadata of a specific denom

```ts
const metadata = await bankApi.fetchDenomMetadata('uzig')
console.dir(metadata, { depth: null })
````

### Fetch owners of a specific denom

```ts
const owners = await bankApi.fetchDenomOwners('uzig')
console.dir(owners, { depth: null })
```

### Fetch metadata of all denoms

```ts
const allMetadata = await bankApi.fetchAllDenomsMetadata()
console.dir(allMetadata, { depth: null })
```

### Fetch send-enabled denoms

```ts
const sendEnabled = await bankApi.fetchSendEnabled()
console.dir(sendEnabled, { depth: null })
````

### Fetch spendable balance of a specific denom

```ts
const spendable = await bankApi.fetchSpendableBalance(address, 'uzig')
console.dir(spendable, { depth: null })
```

### Fetch all spendable balances of an address

```ts
const spendableBalances = await bankApi.fetchSpendableBalances(address)
console.dir(spendableBalances, { depth: null })
````

### Fetch bank module parameters

```ts
const paramsAtHeight = await bankApi.fetchParams()
console.dir(paramsAtHeight, { depth: null })
```







