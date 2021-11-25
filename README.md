# Swapr Staking Subgraph

A subgraph for the [Swapr](https://swapr.eth.link) Staking.

# Install

```bash
$ npm install
$ npm run codegen
```

## Entities

### Token

Stores information about ERC20 tokens that have been used as bidding or auctioning tokens in sales. These include symbol, decimals name and address.

# FAQs

# Deployment

## Set up config file

Each network deployment requires setting up a JSON configuration file in `config/<NetworkName>.json`.

## Prepare `subgraph.yaml`

`subgraph.yaml` is built from `subgraph.template.yaml` using configuration defined in previous section. To do so, run

```bash
$ npm run prepare-<NetworkName>
```

xDAI and Rinkeby networks are supported.

## Deploy to The Graph

Read documentations for [installing The Graph CLI](https://thegraph.com/docs/quick-start#3.-initialize-a-new-subgraph), then run

```bash
$ npm run deploy
```

# Extract ABIs

ABIs for main contracts are not included in the repo. Instead, they are extracted from the smart contract package [`@dxdao/aqua-sc`](https://github.com/cryptonative-ch/mesa-smartcontracts)). To build the ABIs, run:

```bash
$ npm run build-abis
```

Note that it requires [`jq`](https://stedolan.github.io/jq/) tool.

# Tests

Tests require [Docker](http://docker.com/) installed. To run tests, run

```bash
$ yarn tests
```

# Scripts

This projects comes with a set of predefined scripts in `package.json`

| Script             | Description                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| `test`             | Runs Jest tests.                                                                |
| `docker-up`        | Runs Docker services defined in `docker-compose.yaml`.                          |
| `docker-clean`     | reset docker kill & rm. Use if subgraph is not working with `explore-local`.    |
| `prepare-subgraph` | Builds `subgraph.yaml` for either mainnet or rinkeby.                           |
| `prepare-rinkeby`  | Builds `subgraph.yaml` for the Rinkeby testnet (deprecated).                    |
| `prepare-xdai`     | Builds `subgraph.yaml` for the xDai network (deprecated).                       |
| `codegen`          | Generates AssemblyScript types for smart contract ABIs and the subgraph schema. |
| `build`            | Runs `graph build` to compile a subgraph to WebAssembly.                        |
| `deploy-xdai`      | Deploys the subgraph build to The Graph on the xDai network.                    |
| `deploy-rinkeby`   | Deploys the subgraph build to The Graph on the Rinkeby testnet.                 |
| `typechain`        | Creates typed-contracts classes.                                                |
| `build-abis`       | Extracts contract ABIs from artifacts in `artifacts` directory.                 |
| `deploy-local`     | Deploys the graph build to local graph-node.                                    |
| `create-local`     | Creates the graph build in local graph-node.                                    |
| `remove-local`     | Removes the graph build from local graph-node.                                  |
