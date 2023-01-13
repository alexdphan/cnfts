// data from https://github.com/cosmos/chain-registry/tree/master/testnets
import { GasPrice } from '@cosmjs/stargate';

export interface Network {
  chainId: string;
  rpcEndpoint: string;
  prefix: string;
  gasPrice: GasPrice;
  feeToken: string;
  faucetUrl: string;
}

// export const celeswasmConfig: Network = {
//   chainId: 'mocha',
//   rpcEndpoint: 'https://rpc-mocha.pops.one/',
//   prefix: 'celestia',
//   gasPrice: GasPrice.fromString('0.25utia'),
//   feeToken: 'utia',
//   faucetUrl: ""
// };

export const celeswasmConfig: Network = {
  chainId: 'malaga-420',
  rpcEndpoint: 'https://rpc.malaga-420.cosmwasm.com/',
  prefix: 'wasm',
  gasPrice: GasPrice.fromString('0.25umlg'),
  feeToken: 'umlg',
  faucetUrl: 'https://faucet.malaga-420.cosmwasm.com/',
};

// export const celeswasmConfig: Network = {
//   chainId: 'celeswasm',
//   rpcEndpoint: 'https://rpc-mocha.pops.one',
//   prefix: 'wasm',
//   gasPrice: GasPrice.fromString('0.25uwasm'),
//   feeToken: 'uwasm',
//   faucetUrl: '',
// };
// NEED TO CHANGE THIS FOR CELESWASM... maybe not necessary..
