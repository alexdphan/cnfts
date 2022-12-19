const { join, resolve } = require('path');
// import codegen from '@cosmwasm/ts-codegen';
const codegen = require('@cosmwasm/ts-codegen').default;
//import pkg from 'rimraf';
const pkg = require('rimraf');
//import path from "path";
const { sync: rimraf } = pkg;

const contractDir = join(__dirname, '../contracts');
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

codegen({
  contracts: [
    {
      name: 'cnfts',
      dir: join(contractDir, 'schemas/cw721-base'),
    },
  ],
  outPath,
  options: {
    bundle: {
      enabled: true,
      bundleFile: 'index.ts',
      scope: 'contracts',
    },
    types: {
      enabled: true,
    },
    client: {
      enabled: true,
    },
    reactQuery: {
      enabled: true,
      optionalClient: true,
      version: 'v4',
      mutations: true,
      queryKeys: true,
      queryFactory: true,
    },
    recoil: {
      enabled: true,
    },
    messageComposer: {
      enabled: false,
    },
  },
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
