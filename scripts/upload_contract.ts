
import { Contract, getMnemonic } from "../scripts/helpers/utils";
import { connect } from "./helpers/connect";
import { malagaConfig } from "../scripts/networks";
import { hitFaucet } from "./helpers/hitFaucet";
import { uploadContracts } from "./helpers/uploadContracts";
import { initToken } from "./helpers/initToken";
import { Metadata } from "osmojs/types/codegen/cosmos/bank/v1beta1/bank";

const contracts: Contract[] = [
  {
    name: "Cnft",
    wasmFile: "./contracts/cw721_metadata.wasm",
  },
];
// returns the uploaded contract code id for the given contract name from the uploadContracts function in uploadContracts.ts to instantiate the contract

async function main(): Promise<void> {
  /**
   *  We're going to upload & initialise the contract here!
   *  Check out the video course on academy.cosmwasm.com!
   */

  // -- Get our mnemonic -- //
  const mnemonic = getMnemonic();

  // -- Get a signing client -- //
  const { client, address } = await connect(mnemonic, malagaConfig);
  // connects to offlineSigner component (connect.ts)
  // takes your mnemonic and creates an offline signer out of it
  // connects offline signer to cosmwasm client (Initializing SigningCosmWasmClient)

  // -- Check if given wallet has enough balance -- //
  const { amount } = await client.getBalance(address, malagaConfig.feeToken);
  // checks if you have enough balance to pay for the transaction fees
  if (amount === "0") {
    // if not, have a warning and hit the faucet -- //
    console.warn(
      'Your wallet has no balance, please request tokens from a faucet'
    );
    // -- Call a faucet to get some tokens -- //
    // await hitFaucet(address, malagaConfig.feeToken, malagaConfig.faucetUrl);
    // create a new faucet client from cosmwasm npm package and calls the method credit on it

    // -- Check if faucet has enough balance again -- //
    let { amount } = await client.getBalance(address, malagaConfig.feeToken);
    console.log(
      'New balance of ${address} is ${amount}, the fee token is ${malagaConfig.feeToken}'
    );
  }

  // -- Upload the contract -- //
  const codeId = await uploadContracts(client, address, contracts);


  // -- Initialize (Instantiate) the contract -- //
  const contractAddress = await initToken(client, address, codeId.Cnft)

  console.log(`Contract ${contractAddress} was initialized`);
  // have to save the contract address for later use
}

main().then(
  () => {
    process.exit(0);
  },
  (error) => {
    console.error(error);
    process.exit(1);
  }
);


// $ ts-node ./scripts/upload_contract.ts
// Connected to wasm14emfn5eeqmumh5vq0yw7jt8556kz3r34j22u3r
// Balance: 0 umlg
// Your wallet has no balance, requesting some tokens from faucet
// New balance of ${address} is ${amount}, the fee token is ${malagaConfig.feeToken}
// Uploading cw20_base...
// Contract wasm1ea72ykc8wlnpqjtt5d4ldd8jsqvhcs6y8rrdfwzvm5eru0wncnxs5ytzxm was initialized