// export const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'stargaze'

import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';


export const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'celeswasm';

// export const chainassets: AssetList = assets.find(
//   (chain) => chain.chain_name === chainName
// ) as AssetList;
// export const coin: Asset = chainassets.assets.find(
//   (asset) => asset.base === 'uwasm'
// ) as Asset;
// this comes from chain-registry