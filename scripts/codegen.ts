import codegen from '@cosmwasm/ts-codegen';
// import { join } from 'path';
// import { sync as rimraf } from 'rimraf';

// make changes to the config as needed
codegen({
  contracts: [
    {
      name: 'cnft721-base',
      dir: '../contracts/schema',
    },
    // {
    //   name: 'Minter',
    //   dir: './path/to/Minter/schema',
    // },
  ],
  outPath: '../src/codegen',

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
}).then(() => {
  console.log('✨ all done!');
});


// npm run codegen                                                         ─╯

// > @cosmology/tailwindcss@1.6.3 codegen
// > cross-env NODE_ENV=development babel-node scripts/codegen.ts

// (node:5999) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// (Use `node --trace-warnings ...` to show where the warning was created)
// /Users/alexanderphan_1/Developer/cnfts-fe/scripts/codegen.ts:1
// import codegen from '@cosmwasm/ts-codegen';
// ^^^^^^

// SyntaxError: Cannot use import statement outside a module
//     at internalCompileFunction (node:internal/vm:74:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1128:20)
//     at Module._compile (node:internal/modules/cjs/loader:1169:27)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1259:10)
//     at Object.newLoader [as .js] (/Users/alexanderphan_1/Developer/cnfts-fe/node_modules/pirates/lib/index.js:141:7)
//     at Module.load (node:internal/modules/cjs/loader:1068:32)
//     at Module._load (node:internal/modules/cjs/loader:909:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:82:12)
//     at Object.<anonymous> (/Users/alexanderphan_1/Developer/cnfts-fe/node_modules/@babel/node/lib/_babel-node.js:146:21)
//     at Module._compile (node:internal/modules/cjs/loader:1205:14)

// Node.js v19.1.0