// export const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'stargaze';;


// https://github.com/cosmology-tech/create-cosmos-app/pull/24/files#

import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';

export const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'localarabica';

export const chainassets: AssetList = assets.find(
  (chain) => chain.chain_name === chainName
) as AssetList;
export const coin: Asset = chainassets.assets.find(
  (asset) => asset.base === 'uosmo'
) as Asset;