# ZigChain JavaScript / TypeScript SDK

This SDK provides a simple, developer-friendly way to interact with **ZigChain** using its LCD (REST) endpoints. It is designed to closely follow ZigChain CLI query commands while keeping the API clean, predictable, and easy to use.

The SDK is modular — each blockchain module (auth, bank, staking, gov, etc.) has its own API class and documentation file.

---

## Installation

Install the SDK using npm:

```bash
npm install @zuhaibnoor/zigchain-sdk
```

or with yarn:

```bash
yarn add @zuhaibnoor/zigchain-sdk
```

---

## Supported Environments

* Node.js 18+
* TypeScript

---

## Basic Usage

### 1️⃣ Import the SDK

```ts
import {
  getNetworkEndpoints,
  Network,
  ChainConsensusApi
} from '@zuhaibnoor/zigchain-sdk'
```

---

### 2️⃣ Select Network

```ts
const endpoints = getNetworkEndpoints(Network.Testnet)
```

Available networks:

* `Network.Mainnet`
* `Network.Testnet`

---

### 3️⃣ Initialize a Module API

Each module has its own class:

```ts
const consensusApi = new ChainConsensusApi(endpoints)
```

---

### 4️⃣ Call Query Functions

```ts
const params = await consensusApi.fetchConsensusParams()
console.log(params)
```

---

## Design Philosophy

This SDK follows a few strict design principles:

* ✅ One class per Cosmos module
* ✅ One function per CLI query
* ✅ Uses **LCD endpoints only**
* ✅ Minimal abstraction — returns raw chain data
* ✅ Optional `height` support where applicable


This makes it easy to:

* map CLI → SDK usage
* debug responses
* extend the SDK safely

---

## Project Structure

```text
src/
├── auth/
│   ├── ChainAuth.ts
│   └── types.ts
├── bank/
├── staking/
├── gov/
├── slashing/
├── mint/
├── consensus/
|     .
|     .
|     .
├── http.ts
├── network.ts
└── index.ts

docs/
├── auth.md
├── bank.md
├── staking.md
├── gov.md
├── consensus.md
└── ...
```

Each file in the `docs/` folder explains how to use a specific module.

---


## Height-based Queries

Some queries accept a `height` parameter:

```ts
await api.fetchParams(123456)
```

This internally sets:

```
x-cosmos-block-height
```

⚠️ This may fail if the node has pruned historical state.

---

## Module Documentation

Detailed guides for each module are available in the `docs/` folder:

* `auth.md` – Accounts & authentication
* `bank.md` – Balances & supply
* `staking.md` – Validators & delegations

and so on...

---

## Versioning & Updates

* Patch versions: bug fixes & small improvements
* Minor versions: new modules or query functions
* Major versions: breaking API changes

---



If you’re unsure which function maps to which CLI command — check the module docs. The naming closely mirrors `zigchaind query ...` commands.
