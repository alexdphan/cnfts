import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletProvider } from '@cosmos-kit/react';
import {
  ChakraProvider,
  Box,
  useColorModeValue,
  useColorMode,
  color,
  Flex,
} from '@chakra-ui/react';
// import { defaultTheme, chainName } from '../config';
import { chainName } from '../config';
import theme from '../config/theme';
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

  const { colorMode } = useColorMode();
  const bgColor = { light: 'green', dark: 'gray.900' };

  return (
    <>
      <Box>
        <main className={courier.className}>
          <ChakraProvider theme={theme}>
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
    </>
  );
}

export default CreateCosmosApp;

// shit
