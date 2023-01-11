import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/20/solid';
import { Product, Dependency, WalletSection } from '../components';

import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Container,
  Link,
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
// import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Disclosure
      as="nav"
      className="text-black dark:text-white"
      // shadow in classname
    >
      {({ open }) => (
        <>
          <Box className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex items-center mr-2 -ml-2 md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center flex-shrink-0 text-2xl font-semibold text-primary-400">
                  <a href="../">CNFTs</a>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-primary-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="../"
                    className="inline-flex items-center px-1 pt-1 font-medium border-b-2 border-transparent text-md dark:text-neutral-500 hover:border-primary-400 hover:text-gray-400"
                    color=""
                  >
                    Home
                  </a>
                  <a
                    href="../about"
                    className="inline-flex items-center px-1 pt-1 font-medium border-b-2 border-transparent text-md dark:text-neutral-500 hover:border-primary-400 hover:text-gray-400"
                  >
                    About
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  <span className="sr-only">Toggle Theme</span>
                  <WalletSection />

                  {/* Theme toggle */}
                  <Button variant="outline" px={0} onClick={toggleColorMode}>
                    <Icon
                      as={
                        colorMode === 'light'
                          ? BsFillMoonStarsFill
                          : BsFillSunFill
                      }
                    />
                  </Button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3"></Menu>
                </div>
              </div>
            </div>
          </Box>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium border-l-4 text-primary-700 border-primary-500 bg-primary-50 sm:pl-5 sm:pr-6"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                About
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
