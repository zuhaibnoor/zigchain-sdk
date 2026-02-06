# Distribution Module

The **Distribution module** handles reward distribution in the ZigChain network.
It manages validator commissions, delegator rewards, community pool funds, and distribution-related parameters.

This module allows you to **query how rewards are shared** between validators, delegators, and the community pool.

---

## `ChainDistributionApi`

```ts
import { ChainDistributionApi } from '@zuhaibnoor/zigchain-sdk'
```

---

## Constructor

```ts
const distribution = new ChainDistributionApi(endpoints)
```

Initializes the Distribution API using the network’s LCD endpoint.

---

## Functions

---

### `fetchValidatorCommission(validator: string)`

**Purpose:**
Returns the commission accumulated by a specific validator from delegators’ rewards.

**When to use:**
Use this when you want to check how much commission a validator has earned.

```ts
const commission = await distribution.fetchValidatorCommission(
  'zigvaloper1...'
)
```

---

### `fetchCommunityPool()`

**Purpose:**
Fetches the total balance of the **community pool**, which is used for governance-approved spending.

**When to use:**
Helpful for governance dashboards or tracking ecosystem funds.

```ts
const pool = await distribution.fetchCommunityPool()
```

---

### `fetchDelegatorValidators(delegator: string)`

**Purpose:**
Returns the list of validators from which a delegator is currently earning rewards.

**When to use:**
Use this to understand which validators are paying rewards to a specific delegator.

```ts
const validators =
  await distribution.fetchDelegatorValidators('zig1...')
```

---

### `fetchDelegatorWithdrawAddress(delegator: string)`

**Purpose:**
Fetches the withdraw address where a delegator’s rewards are sent.

**When to use:**
Useful for checking whether a delegator has set a **custom reward withdrawal address**.

```ts
const withdrawAddress =
  await distribution.fetchDelegatorWithdrawAddress('zig1...')
```

---

### `fetchParams()`

**Purpose:**
Returns the current **distribution parameters**, including community tax and reward configuration.

**When to use:**
Helpful for understanding how rewards are split at the protocol level.

```ts
const params = await distribution.fetchParams()
```

---



---
## Summary

| Function                        | What it tells you                          |
| ------------------------------- | ------------------------------------------ |
| `fetchValidatorCommission`      | How much commission a validator has earned |
| `fetchCommunityPool`            | Total funds in the community pool          |
| `fetchDelegatorValidators`      | Validators paying rewards to a delegator   |
| `fetchDelegatorWithdrawAddress` | Where delegator rewards are withdrawn      |
| `fetchParams`                   | Network-wide reward distribution rules     |

---

