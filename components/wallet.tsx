/* eslint-disable react-hooks/exhaustive-deps */

import { MouseEventHandler, useEffect, useMemo } from 'react';
import { ChainCard } from '../components';
import { Address } from './react/views';
import {
  ArrowPathIcon,
  ArrowDownTrayIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import { useWallet } from '@cosmos-kit/react';
import { WalletStatus } from '@cosmos-kit/core';
import { chainName } from '../config';

const buttons = {
  Disconnected: {
    icon: WalletIcon,
    title: 'Connect Wallet',
  },
  Connected: {
    icon: WalletIcon,
    title: 'My Wallet',
  },
  Rejected: {
    icon: ArrowPathIcon,
    title: 'Reconnect',
  },
  Error: {
    icon: ArrowPathIcon,
    title: 'Change Wallet',
  },
  NotExist: {
    icon: ArrowDownTrayIcon,
    title: 'Install Wallet',
  },
};

export const WalletSection = () => {
  const walletManager = useWallet();
  const {
    connect,
    openView,
    walletStatus,
    username,
    address,
    currentChainName,
    currentChainRecord,
    getChainLogo,
    setCurrentChain,
  } = walletManager;

  useEffect(() => {
    setCurrentChain(chainName);
  }, [setCurrentChain]);

  const chain = {
    chainName: currentChainName,
    label: currentChainRecord?.chain.pretty_name,
    value: currentChainName,
    icon: getChainLogo(currentChainName),
  };

  useEffect(() => {
    setCurrentChain(chainName);
  }, [setCurrentChain]);

  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault();
    await connect();
  };

  const onClickOpenView: MouseEventHandler = (e) => {
    e.preventDefault();
    openView();
  };

  const _renderConnectButton = useMemo(() => {
    // Spinner
    if (walletStatus === WalletStatus.Connecting) {
      return (
        <button className="rounded-lg w-full bg-purple-damp hover:bg-purple-damp/75 inline-flex justify-center items-center py-2.5 font-medium cursor-wait text-white">
          <svg
            className="w-5 h-5 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </button>
      );
    }

    let onClick;
    if (
      walletStatus === WalletStatus.Disconnected ||
      walletStatus === WalletStatus.Rejected
    )
      onClick = onClickConnect;
    else onClick = onClickOpenView;

    const buttonData = buttons[walletStatus];

    return (
      <button
        className="rounded-lg bg-purple-700 w-full hover:bg-purple-600 inline-flex justify-center items-center py-2.5 font-medium text-white"
        onClick={onClick}
      >
        <buttonData.icon className="flex-shrink-0 w-5 h-5 mr-2 text-white" />
        {buttonData.title}
      </button>
    );
  }, [onClickConnect, onClickOpenView, walletStatus]);

  return (
    <div className="flex w-full mr-auto">
      <div className="grid w-full h-full grid-cols-1 gap-4 border rounded-lg lg:grid-cols-3 border-black/10 dark:border-white/10 md:grid-cols-2">
        {_renderConnectButton}
        {address ? <Address>{address}</Address> : <></>}
        <div>
          {username && (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <p className=" h-12 text-lg font-medium text-black dark:text-white py-2.5">
                {username}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

//  <div className="grid grid-cols-1 gap-4">
//       {chainName && (
//         <div className="mb-4">
//           <ChainCard
//             prettyName={chain?.label || chainName}
//             icon={chain?.icon}
//           />
//         </div>
//       )}
