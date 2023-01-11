import { SigningCosmWasmClient } from "cosmwasm";
// import { Cw20Coin, InstantiateMsg } from "../../ts/Cw20.types";
import { InstantiateMsg } from "../../ts/Cnfts.types";


export async function initToken(
  client: SigningCosmWasmClient,
  address: string,
  code: number
) {
  // const initial_balances: Cw20Coin[] = [{ address, amount: "123456000000" }];
  // gave some initial balance to the address, typed in random initial amount
  
  const initMsg: InstantiateMsg = {
    // name: "Test Token",
    // symbol: "TTOKEN",
    // decimals: 6, // default in the industry
    // initial_balances,
    // mint: {
    //   minter: address,
    // },
    minter: "Test Minter",
    name: "Tester",
    symbol: "TEST"
  };
  // make sure to look at the interfaces every time you instantiate the generated types (Cw20.types.ts in this case within the bindings folder)

  const info = await client.instantiate(
    address,
    code,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    initMsg,
    "Test Token 1.0",
    "auto",
    {
      admin: address,
    }
  );
  return info.contractAddress;
}
