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

export const ARABICA_PARAMS = {
  chainId: 'arabica-2',
  chainName: 'Arabica Devnet',
  rpc: 'https://rpc.limani.celestia-devops.dev',
  rest: 'https://limani.celestia-devops.dev',
};


function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // signingStargate: (_chain: Chain) => {
    //   return getSigningCosmosClientOptions();
    // }
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