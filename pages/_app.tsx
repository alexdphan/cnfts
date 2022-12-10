import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletProvider } from '@cosmos-kit/react';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation';
import { wallets as leapWallets } from '@cosmos-kit/leap';

import { TailwindModal } from '../components';
import { ThemeProvider } from '../contexts/theme';

import { SignerOptions } from '@cosmos-kit/core';
import { chains, assets } from 'chain-registry';
import AddNetworkKeplr from '../config/localarabica';
import { getSigningCosmosClientOptions } from 'osmojs';
import { GasPrice } from '@cosmjs/stargate';

// export const ARABICA_PARAMS = {
//   chainId: 'arabica-2',
//   chainName: 'Arabica Devnet',
//   rpc: 'https://rpc.limani.celestia-devops.dev',
//   rest: 'https://limani.celestia-devops.dev',
// };

interface Chain {
  chainId: 'arabica-2',
  chainName: 'Arabica Devnet',
  rpc: 'https://rpc.limani.celestia-devops.dev',
  rest: 'https://limani.celestia-devops.dev',
}; // something like this... but how to get it to work with the wallet provider? maybe include with localarabica.ts? not sure what with chain_name: 'localosmosis' is for

// the comment with chain_name: 'localosmosis' is for the signerOptions, which is a function that returns the signingCosmwasm options for a given chain. So you can use it to set the gas price for a given chain. In this case, we're setting the gas price for the localosmosis chain to 0.0025uosmo.

function App({ Component, pageProps }: AppProps) {
 
  const localosmosis: Chain = {...}; // with chain_name: 'localosmosis'
  const localosmosisAssets: AssetList = {...}; // with chain_name: 'localosmosis'
 
  const signerOptions: SignerOptions = {
    signingStargate: (_chain: Chain) => {
      return getSigningCosmosClientOptions();
    },
    signingCosmwasm: (chain: Chain) => {
      switch (chain.chain_name) {
        case 'localosmosis':
          return {
            gasPrice: GasPrice.fromString('0.0025uosmo')
          };
      }
    }
  };

  return (
    <WalletProvider
      chains={chains}
      assetLists={assets}
      // wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
      wallets={keplrWallets}
      signerOptions={signerOptions}
      walletModal={TailwindModal}
    >
      <AddNetworkKeplr params={ARABICA_PARAMS} />
      <ThemeProvider>
        <div className="min-h-screen text-black bg-white dark:bg-gray-bg dark:text-white">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </WalletProvider>
  );
}

export default CreateCosmosApp;

// so we have arabica connected (works directly with keplr), need to figure out how to integrate it with useWallet hook in CosmosKit instead https://docs.cosmoskit.com/wallet-provider#adding-localnet-and-testnets