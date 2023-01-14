# cNFTs
---
cNFTs, also known as Celestia NFTs, are an implementation of CosmoWasm's cw721 NFT contract using Celestia's Rollmint
---
*NFTs have many critiques as said by many*

One of the main points of current NFTs involve scalability issues. 
More specifically, the Data Availability problem.

cNFTs are an example of how Celestia' Rollmint can allow anyone to design and deploy a sovereign rollup on Celestia in minutes.

### A step towards increasing performance, allowing future scalabilty.
---
**[CosmWasm](https://docs.cosmwasm.com/docs/1.0/#:~:text=What%20is%20CosmWasm%3F,plug%20into%20the%20Cosmos%20SDK.) is a smart contracting platform built for the Cosmos ecosystem. Simply put, it's the Cosmos (Cosm) way of using WebAssembly (Wasm).**

- Using CosmWasm, the project can be used to be built on top of the Cosmos ecosystem to provide sovereignty, process transactions quickly and communicate with other blockchains in the ecosystem.


**[Rollmint](https://docs.celestia.org/developers/rollmint/) is an ABCI (Application Blockchain Interface) implementation for sovereign rollups to deploy on top of Celestia.**

- With Rollmint, this would allow Tendermint to be replaced with a drop-in replacement that communicates directly with Celestia's Data Availability layer. This enable anyone to design and deploy a sovereign rollup on Celestia in minutes.
--- 
## How to use

1. Set up a Celeswasm chain and wallet by starting up Rollmint. This would involve running a [Celestia light node](https://docs.celestia.org/developers/node-tutorial) and a [Wasmd](https://docs.celestia.org/developers/cosmwasm-dependency#wasmd-installation) (cosmos zone with smart contracts enabled).

2. Once you've set up your Celestia Light Node and Wamd, you can follow these next steps on running Rollmint to initialize a CosmWasm Rollup. More information on how to do that will be linked [here](https://docs.celestia.org/developers/cosmwasm-environment#initializing-cosmwasm-rollup-with-a-bash-script).

4. Enter the CNFTs app and connect your wallet (from the Custom chain spun up using Rollmint) using Keplr. 

3. Input parameters about your NFTs. This would include the name, link to IPFS image, description, etc.

4. Ensure you have enough funds (which should be known since you ran the bash script (init.sh). Finally, press the mint button. This would burn tokens in return for a cNFT.

5. Enjoy! You now have a Celestia NFT :D
--- 
## Credits

Frontend code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) Cosmos chain registry and chain info.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos.
* [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)  and [Next.js deployment documentation](https://nextjs.org/docs/deployment).
--- 
## Tasks

- [X] Enter Button
- [x] Wallet to navbar, connect wallet button
- [x] Me the switch theme work
- [X] Fix look on connect wallet after connecting wallet (wallet.tsx)
- [X] Add form after connecting wallet 
- [X] Cleanup form page
- [ ] Get contracts to work
- [ ] About page and start page (the form page) Using a CNFT minter, we focus on scaling blockchain technology, innovation, security for long-term value and consumer growth.
- [ ] Add celeswasm chain
- [X] Make home page overall 
- [X] Add logo(s) (home page + companies)
- [ ] Add an about page (learn more button)
- [ ] Make a popup that shows to connect wallet (after filling form)
- [X] Make images of companies below build featuring section
- [X] Fix home error
- [ ] Cleanup theme