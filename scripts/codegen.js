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
        enabled: true,
      },
    },
  })
  .then(() => {
    console.log('✨ all done!');
  });

// FINALLY ;D

// For example, if you are using Node.js v12, you can use the node command to run JavaScript code that uses the syntax and features that are supported by Node.js v12.

// The babel-node command is typically used to run JavaScript code that uses modern language features and syntax that are not natively supported by the runtime you are using. For example, if you are using Node.js v12, but you want to use the import and export statements to import and export modules, you can use the babel-node command to transpile your code and use the import and export statements.

// In general, you should use the node command to run JavaScript code that is written using the syntax and features that are supported by the runtime you are using, and you should use the babel-node command to run JavaScript code that uses modern language features and syntax that are not supported by the runtime you are using.