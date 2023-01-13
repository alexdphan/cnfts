/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { useWallet } from '@cosmos-kit/react';
import { Registry } from 'cosmwasm';
import { useState, useEffect, SetStateAction } from 'react';
import { CnftsContractAddress } from '../config/celeswasm';
import { CnftsClient } from '../ts/Cnfts.client';

export default function Form() {
  // -- offline signer -- //
  // const { getCosmWasmClient, address } = useWallet();
  // getting the signer's address and the CosmWasmClient from @cosmos-kit/react
  const [cnftsClient, setCnftsClient] = useState<CnftsClient | null>(null);
  // setting the Cw20QueryClient from imported Cw20.client.ts
  // const [balance, setBalance] = useState<string | null>(null);
  // setting the balance of the token from cw20Client.balance()
    // const balance = balance(CnftsContractAddress);


  // contract txhash //
  const [txHash, setTxHash] = useState<string | undefined>(undefined);

  const walletManager = useWallet();
  const { getSigningStargateClient, getSigningCosmWasmClient, address } =
    walletManager;

  // -- CnftsClient -- //

  useEffect(() => {
    // getCosmWasmClient comes from the above const useWallet()
    getSigningCosmWasmClient().then((cosmWasmClient) => {
      if (!cosmWasmClient || !address) {
        console.error('No cosmwasm client or address');
        return;
      }
      const newClient = new CnftsClient(
        cosmWasmClient,
        address,
        CnftsContractAddress
      );
      setCnftsClient(newClient);
    });
  }, [address, setCnftsClient]);

  const mint = async () => {
    if (!cnftsClient) {
      console.error('No cw20 client');
      return;
    }
    const res = await cnftsClient.mint({
      owner: 'wasm1k3xsettvly8ekr0apte78katuwqjj9gvgrg76d',
      tokenId: 'Entity1',
      tokenUri:
        'https://ipfs.io/ipfs/QmU9aJPc8mACk1zJoPuvGpqVE6TCDnHSMHwAXGmgEdbiNb?filename=celestia.png',
    });
    console.log(res);

    setTxHash(res.transactionHash);
  };

  return (
    <div className="p-20">
      <div>
        <div className="flex-col px-6 py-16 border-4 rounded-3xl border-primary-800 ">
          <h1 className="flex items-center justify-center min-h-full pb-10 text-4xl font-extrabold leading-none tracking-tight text-transparent sm:px-6 lg:px-8 md:text-5xl lg:text-6xl sm:text-4xl bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
            Mint
          </h1>
          <div className="flex items-center justify-center sm:px-6 lg:px-8">
            <form className="w-2/3">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  // for="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Link to asset:
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  // for="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name of CNFT
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="repeat_password"
                  id="floating_repeat_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  // for="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Description
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    // for="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    // for="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    // for="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Mint to
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    // for="floating_company"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Additional Info
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={mint}
              >
                Mint
              </button>
              <p>{txHash}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
