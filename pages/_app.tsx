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

import { getSigningCosmosClientOptions } from 'interchain';
import { GasPrice } from '@cosmjs/stargate';
import { Chain } from '@chain-registry/types';

import { Montserrat, Quantico } from '@next/font/google';

import Navbar from '../components/navbar';

const inter = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
});
// need to add this to the main.tsx file

const courier = Quantico({
  subsets: ['latin'],
  weight: ['400'],
});

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    signingStargate: (_chain: Chain) => {
      return getSigningCosmosClientOptions();
    },
    signingCosmwasm: (chain: Chain) => {
      switch (chain.chain_name) {
        case 'cosmwasmtestnet':
          return {
            gasPrice: GasPrice.fromString('0.0025umlga'),
          };
      }
    },
  };

  return (
    <>
      <main className={courier.className}>
        <WalletProvider
          chains={chains}
          assetLists={assets}
          wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
          signerOptions={signerOptions}
          walletModal={TailwindModal}
          endpointOptions={{
            cosmwasmtestnet: {
              rpc: ['https://rpc.malaga-420.cosmwasm.com/'],
            },
          }}
        >
          {/* Navbar needs to be inside wallet and theme provider for it to work */}
          <ThemeProvider>
            <Navbar />
            <div className="min-h-screen text-black bg-clight dark:bg-black dark:text-white ">
              <Component {...pageProps} />
            </div>
          </ThemeProvider>
        </WalletProvider>
      </main>
    </>
  );
}

export default CreateCosmosApp;

// make home page
// enter button
// move wallet to navbar, connect wallet button
// add form after connecting wallet
// get contracts to work

// later
// add logo
// add an about page
