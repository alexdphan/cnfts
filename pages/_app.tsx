import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletProvider } from '@cosmos-kit/react';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
// import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation';
// import { wallets as leapWallets } from '@cosmos-kit/leap';
import { getSigningCosmosClientOptions } from 'osmojs';
import { GasPrice } from '@cosmjs/stargate';

import { TailwindModal } from '../components';
import { ThemeProvider } from '../contexts/theme';

import { SignerOptions } from '@cosmos-kit/core';
import { chains, assets } from 'chain-registry';
import { Chain, AssetList } from '@chain-registry/types';
import { celeswasm, celeswasmAssets } from '../config/celeswasm';

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  
  // const chain: Chain = { chain_name: 'celeswasm' }; // with chain_name: 'localosmosis'
  // const celeswasmAssets: AssetList = { chain_name: 'celeswasm' }; // with chain_name: 'localosmosis'
  
  const signerOptions: SignerOptions = {
    signingStargate: (_chain: Chain) => {
      return getSigningCosmosClientOptions();
    },
    signingCosmwasm: (chain: Chain) => {
      switch (chain.chain_name) {
        case 'celeswasm':
          return {
            gasPrice: GasPrice.fromString('0.0025uwasm'),
          };
      }
    },
  };

  return (
    <WalletProvider
      chains={[...chains, celeswasm]}
      assetLists={[...assets, celeswasmAssets]}
      // wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
      wallets={keplrWallets}
      signerOptions={signerOptions}
      walletModal={TailwindModal}
      endpointOptions={{
        celeswasm: {
          rpc: ['http://127.0.0.1:26657'],
        },
      }}
    >
      <ThemeProvider>
        <div className="min-h-screen text-black bg-white dark:bg-black dark:text-white">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </WalletProvider>
  );
}

export default CreateCosmosApp;
// not codebase, peers
// use rpcs, rest, more on rpcs
// provide slip, fees, staking, vector