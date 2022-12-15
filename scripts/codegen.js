// import codegen from '@cosmwasm/ts-codegen';
const codegen = require('@cosmwasm/ts-codegen').default;

// import { join } from 'path';
const { join, resolve } = require('path');

// import pkg from 'rimraf';
const pkg = require('rimraf');

// import { sync as rimraf } from 'rimraf';
const { sync: rimraf } = pkg;

const contractDir = join(__dirname, '../contracts');
const outPath = join(__dirname, '../ts/src');
rimraf(outPath);

codegen({
    contracts: [
      {
        name: 'cnfts',
        dir: join(contractDir, 'schemas/cw721-base'),
      },
      // {
      //   name: 'Minter',
      //   dir: './path/to/Minter/schema',
      // },
    ],
    outPath,

    // options are completely optional ;)
    options: {
      bundle: {
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
        enabled: false,
      },
      messageComposer: {
        enabled: false,
      },
    },
  })
  .then(() => {
    console.log('✨ all done!');
  });

  // FINALLY ;D