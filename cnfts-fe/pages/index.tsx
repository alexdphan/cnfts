import Head from 'next/head';
import { Product, Dependency, WalletSection } from '../components';
import { dependencies, products } from '../config';
import Image from 'next/image';
import { useColorMode, useColorModeValue, Flex } from '@chakra-ui/react';
import { cosmWasmTypes } from '@cosmjs/cosmwasm-stargate';
import { CosmwasmIcon } from '../assets/cosmwasmIcon';
import { CosmosIcon } from '../assets/cosmosIcon';
import { CelestiaIcon } from '../assets/celestiaIcon';

export default function Home() {
  return (
    <Flex>
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        <a
          href="https://blog.celestia.org/meet-cohort-one-of-modular-fellows/"
          className="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium">
            Project from Modular Fellows! See what is up
          </span>
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-transparent md:text-5xl lg:text-6xl animate-pulse sm:text-4xl bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
          Celestia NFTs
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Welcome! ~ This is a CNFT minter ~ Enter the app to mint!
          <br />
          Simply add your assets link, name, and description, then press the
          Mint button
        </p>

        <div className="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="/about"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="/mint"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2 -ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
            Enter
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">
            BUILT FEATURING
          </span>
          <div className="flex flex-wrap items-center justify-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="#"
              className="mb-5 mr-5 overflow-hidden lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 "
            ></a>
            <a
              href="#"
              className="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <CosmwasmIcon />
            </a>
            <a
              href="#"
              className="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <CelestiaIcon />
            </a>
            <a
              href="#"
              className="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <CosmosIcon />
            </a>
          </div>
          <div className="mt-10">
            <a href="https://alexdphan.com/">
              <p>Built by @alexdphan</p>
            </a>
          </div>
        </div>
      </div>
    </Flex>
  );
}
