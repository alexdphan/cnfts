// data from https://github.com/cosmos/chain-registry/tree/master/testnets
import { GasPrice } from "@cosmjs/stargate";

export interface Network {
  chainId: string;
  rpcEndpoint: string;
  prefix: string;
  gasPrice: GasPrice;
  feeToken: string;
  faucetUrl: string;
}

export const malagaConfig: Network = {
  chainId: "malaga-420",
  rpcEndpoint: "https://rpc.malaga-420.cosmwasm.com/",
  prefix: "wasm",
  gasPrice: GasPrice.fromString("0.25umlg"),
  feeToken: "umlg",
  faucetUrl: "https://faucet.malaga-420.cosmwasm.com/",
};
// Malaga testnet is a Cosmos Hub testnet, so we can use this custom config
// NEED TO CHANGE THIS FOR CELESWASM... maybe not necessary..
