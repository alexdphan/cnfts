import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletProvider } from '@cosmos-kit/react';
import {
  ChakraProvider,
  Box,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { defaultTheme, chainName } from '../config';
import { wallets } from '@cosmos-kit/keplr';

import { SignerOptions } from '@cosmos-kit/core';
import { chains, assets } from 'chain-registry';
import { Chain } from '@chain-registry/types';
import { GasPrice } from '@cosmjs/stargate';

import { Quantico } from '@next/font/google';
import Navbar from '../components/navbar';

const courier = Quantico({
  subsets: ['latin'],
  weight: ['400'],
});

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
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
      <div>
        <Box>
          <main className={courier.className}>
            <ChakraProvider>
              <WalletProvider
                chains={chains}
                assetLists={assets}
                wallets={wallets}
                // signerOptions={signerOptions}
                endpointOptions={{
                  cosmwasmtestnet: {
                    rpc: ['https://rpc.malaga-420.cosmwasm.com/'],
                    rest: ['https://api.malaga-420.cosmwasm.com'],
                  },
                }}
              >
                <Navbar />
                <Component {...pageProps} />
              </WalletProvider>
            </ChakraProvider>
          </main>
        </Box>
      </div>
    </>
  );
}

export default CreateCosmosApp;

// shit
