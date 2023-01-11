import axios from "axios";
import * as fs from "fs";
import dotenv from "dotenv";
dotenv.config();
interface LocalContract {
  name: string;
  wasmFile: string;
}

interface RemoteContract {
  name: string;
  wasmUrl: string;
}

function isLocal(contract: Contract): contract is LocalContract {
  return (contract as LocalContract).wasmFile !== undefined;
}

export async function downloadWasm(url: string): Promise<Uint8Array> {
  const r = await axios.get(url, { responseType: "arraybuffer" });
  if (r.status !== 200) {
    throw new Error(`Download error: ${r.status}`);
  }
  return r.data;
}

function loadWasmFile(path: string): Uint8Array {
  return fs.readFileSync(path);
}

export type Contract = LocalContract | RemoteContract;

// Check "MNEMONIC" env variable and ensure it is set to a reasonable value
export function getMnemonic(): string {
  const mnemonic = process.env["MNEMONIC"];
  if (!mnemonic || mnemonic.length < 48) {
    throw new Error("Must set MNEMONIC to a 12 word phrase");
  }
  return mnemonic;
}

export async function loadContract(contract: Contract): Promise<Uint8Array> {
  if (isLocal(contract)) {
    return loadWasmFile(contract.wasmFile);
  } else {
    return downloadWasm(contract.wasmUrl);
  }
}
