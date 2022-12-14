import codegen from '@cosmwasm/ts-codegen';
// import { join } from 'path';
// import { sync as rimraf } from 'rimraf';

codegen.default({
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
