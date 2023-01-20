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
  chainId: 'celeswasm',
  rpcEndpoint: 'https://<YOUR_NODE_IP>:26657',
  prefix: 'wasm',
  gasPrice: GasPrice.fromString('0.25uwasm'),
  feeToken: 'uwasm',
  faucetUrl: '',
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
