import { PubKey, StdSignature, StdSignDoc } from "@keplr-wallet/types";
export declare function encodeSecp256k1Pubkey(pubkey: Uint8Array): PubKey;
export declare function encodeSecp256k1Signature(pubkey: Uint8Array, signature: Uint8Array): StdSignature;
export declare function serializeSignDoc(signDoc: StdSignDoc): Uint8Array;
