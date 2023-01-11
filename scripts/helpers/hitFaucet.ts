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
