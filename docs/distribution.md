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

## `fetchDelegatorRewards(delegator)`

**Purpose:**
Fetches **all staking rewards** earned by a delegator across **all validators**.

**When to use:**
Use this when you want a complete view of a delegator’s accumulated rewards before withdrawal.

**CLI equivalent:**

```
zigchaind query distribution rewards <delegator-address>
```

---

## `fetchDelegatorRewardsByValidator(delegator, validator)`

**Purpose:**
Returns rewards earned by a delegator **from a specific validator only**.

**When to use:**
Helpful when analyzing reward contribution per validator or building validator-specific dashboards.

**CLI equivalent:**

```
zigchaind query distribution rewards-by-validator <delegator> <validator>
```

---

## `fetchValidatorSlashes(validator)`

**Purpose:**
Fetches **slashing events** applied to a validator, including the slashing fraction and period.

**When to use:**
Use this to inspect validator misbehavior history and assess validator risk.

**CLI equivalent:**

```
zigchaind query distribution slashes <validator-address>
```

---

## `fetchValidatorDistributionInfo(validator)`

**Purpose:**
Returns a validator’s **distribution overview**, including self-bond rewards and commission earned.

**When to use:**
Useful for validators or explorers to understand validator earnings structure.

**CLI equivalent:**

```
zigchaind query distribution validator-distribution-info <validator-address>
```

---

## `fetchValidatorOutstandingRewards(validator)`

**Purpose:**
Fetches **unwithdrawn (outstanding) rewards** for a validator and all of its delegations.

**When to use:**
Use this to check pending rewards that have not yet been withdrawn.

**CLI equivalent:**

```
zigchaind query distribution validator-outstanding-rewards <validator-address>
```

---

## 📌 Summary

| Function                        | What it tells you                          |
| ------------------------------- | ------------------------------------------ |
| `fetchValidatorCommission`      | How much commission a validator has earned |
| `fetchCommunityPool`            | Total funds in the community pool          |
| `fetchDelegatorValidators`      | Validators paying rewards to a delegator   |
| `fetchDelegatorWithdrawAddress` | Where delegator rewards are withdrawn      |
| `fetchParams`                   | Network-wide reward distribution rules     |
| `fetchDelegatorRewards`            | Get all staking rewards for a delegator across all validators |
| `fetchDelegatorRewardsByValidator` | Get delegator rewards from a specific validator               |
| `fetchValidatorSlashes`            | Query slashing events applied to a validator                  |
| `fetchValidatorDistributionInfo`   | Fetch validator commission and self-bond rewards              |
| `fetchValidatorOutstandingRewards` | Get unwithdrawn rewards for a validator                       |
---

