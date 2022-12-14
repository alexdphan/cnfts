// import codegen from '@cosmwasm/ts-codegen';
// import { join } from 'path';
// import pkg from 'rimraf';
// const { sync: rimraf } = pkg;

// // const contractDir = join(__dirname, '../contracts/schemas/cnft721-base');
// const contractDir = join(import.meta.url, '../contracts/schemas/cnft721-base');
// // const outPath = join(__dirname, '../ts/src');
// const outPath = join(import.meta.url, '../ts/src');
// rimraf(outPath);

// codegen.default({
//   contracts: [
//     {
//       name: 'cnft721-base',
//       dir: join(contractDir, 'cnft721-base'),
//     },
//     // {
//     //   name: 'Minter',
//     //   dir: './path/to/Minter/schema',
//     // },
//   ],
//   outPath: './ts/src',

//   // options are completely optional ;)
//   options: {
//     bundle: {
//       bundleFile: 'index.ts',
//       scope: 'contracts',
//     },
//     types: {
//       enabled: true,
//     },
//     client: {
//       enabled: true,
//     },
//     reactQuery: {
//       enabled: true,
//       optionalClient: true,
//       version: 'v4',
//       mutations: true,
//       queryKeys: true,
//       queryFactory: true,
//     },
//     recoil: {
//       enabled: false,
//     },
//     messageComposer: {
//       enabled: false,
//     },
//   },
// }).then(() => {
//   console.log('✨ all done!');
// });

import codegen from '@cosmwasm/ts-codegen';

codegen
  .default({
    contracts: [
      {
        name: 'cnft721-base',
        dir: './contracts/schemas/cnft721-base',
      },
      // {
      //   name: 'Minter',
      //   dir: './path/to/Minter/schema',
      // },
    ],
    outPath: './ts/src',

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
