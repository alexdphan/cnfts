export * from './src';
// installed babel.node (run latest JavaScript code using the Babel compiler) and cross-env (set env variables in npm scripts)

import { contracts } from './src';

const {
  CnftsClient,
  CnftsMessageComposer,
} = contracts.Cnfts;

