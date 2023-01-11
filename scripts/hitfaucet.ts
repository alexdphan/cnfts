// import { FaucetClient } from "cosmwasm";

// export async function hitFaucet(address: string, token: string, faucetURL: string) {
//     const client = new FaucetClient(faucetURL);
//     return await client.credit(address, token);
// }

import { FaucetClient } from "cosmwasm";

/**
 * 
 * @param address 
 * @param token 
 * @param faucetUrl 
 * @returns 
 */
export async function hitFaucet(
  address: string,
  token: string,
  faucetUrl: string
) {
  const client = new FaucetClient(faucetUrl);
  return await client.credit(address, token);
}