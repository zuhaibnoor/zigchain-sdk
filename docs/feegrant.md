# Feegrant Module

## Module Overview

The **Feegrant module** allows one account (**granter**) to **pay transaction fees for another account (**grantee**)**.
This is useful when a user needs to submit transactions but does not have tokens to pay gas fees themselves.

Fee grants are created **explicitly by the granter** and exist only between specific address pairs.

---

## When Should You Use Feegrant?

* When an application wants to **sponsor transaction fees** for its users
* When fees should be paid **from a different account**

---

## ChainFeegrantApi

This module provides read-only access to fee grant information available on-chain.

### `fetchGrant(granter, grantee)`

**Purpose:**
Fetch details of a fee grant between a specific granter and grantee.

**What it tells you:**

* Whether a fee grant exists
* Spend limit (if any)
* Expiration time (if set)

**When to use:**

* To check if a grantee is allowed to use the granter’s balance for fees
* Before sending a transaction using fee grants

---

### `fetchGrantsByGrantee(grantee)`

**Purpose:**
Fetch all fee grants **received by a given grantee**.

**What it tells you:**

* Which accounts are paying fees for this grantee
* Limits and expiration details for each grant

**When to use:**

* To show a user who is sponsoring their transaction fees
* To decide which grant to use when multiple grants exist

---

### `fetchGrantsByGranter(granter)`

**Purpose:**
Fetch all fee grants **created by a given granter**.

**What it tells you:**

* Which accounts can use the granter’s tokens to pay fees
* How much fee allowance has been given

**When to use:**

* To monitor sponsored users
* To audit or manage fee sponsorships

---

## Important Notes

* Fee grants **do not exist by default**
* If no fee grants are created, queries will return **empty results**
* There is **no global list of all fee grants** on the chain
* Fee grants are always **address-to-address**

---

## Feegrant vs Authz (Clear & Simple)

This section is critical, so let’s be **very explicit**.

### Feegrant Module

**What it controls:**
👉 **Who pays the transaction fee**

**What changes:**

* The **fee** is paid by the granter
* The **transaction content** still belongs to the sender

**Example:**

* Alice submits a transaction
* Bob pays the gas fee for Alice
* Alice’s transaction still affects Alice’s account, not Bob’s

---

### Authz Module

**What it controls:**
👉 **Who is allowed to submit transactions on someone else’s behalf**

**What changes:**

* One account submits transactions **for another account**
* The transaction affects the **owner’s account**, not the sender

**Example:**

* Bob submits a transaction
* The transaction modifies Alice’s account
* Bob is acting *on behalf of Alice*

---

### Simple Comparison Table

| Feature                  | Feegrant         | Authz              |
| ------------------------ | ---------------- | ------------------ |
| Pays transaction fee     | Someone else     | Sender             |
| Submits transaction      | Original account | Authorized account |
| Changes account state of | Sender           | Account owner      |
| Main purpose             | Fee sponsorship  | Account delegation |

---

## Key Takeaway

* **Feegrant = “Who pays the fee?”**
* **Authz = “Who is allowed to submit the transaction?”**

They solve **different problems** and are often used **together**, but they are **not the same**.

Perfect 👍 — below is a **complete, copy-pasteable testing example** written exactly in the style you’ve been using for other modules.
It’s **doc-ready**, beginner-friendly, and explains *what is being tested* and *why*.

You can drop this straight into your **Feegrant module documentation**.

---

# Testing Example

## Test Setup

```ts
import {
  ChainFeegrantApi,
  getNetworkEndpoints,
  Network
} from '@zuhaibnoor/zigchain-sdk'
```

---

## Full Test Example

```ts
async function main() {
  // 1. Select network
  const endpoints = getNetworkEndpoints(Network.Testnet)

  // 2. Initialize Feegrant module
  const feegrant = new ChainFeegrantApi(endpoints)

  // Replace these with REAL addresses that have an existing fee grant
  const granter = 'zig1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  const grantee = 'zig1yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'

  // --------------------------------------------------
  // Query a specific fee grant (granter -> grantee)
  // --------------------------------------------------
  console.log('\n--- Fee Grant (Granter → Grantee) ---')
  try {
    const grant = await feegrant.fetchGrant(granter, grantee)
    console.dir(grant, { depth: null })
  } catch (err) {
    console.log('No direct fee grant found between granter and grantee')
  }

  // --------------------------------------------------
  // Query all grants received by a grantee
  // --------------------------------------------------
  console.log('\n--- Grants By Grantee ---')
  const grantsByGrantee = await feegrant.fetchGrantsByGrantee(grantee)
  console.dir(grantsByGrantee, { depth: null })

  // --------------------------------------------------
  // Query all grants created by a granter
  // --------------------------------------------------
  console.log('\n--- Grants By Granter ---')
  const grantsByGranter = await feegrant.fetchGrantsByGranter(granter)
  console.dir(grantsByGranter, { depth: null })
}

main()
```

---
