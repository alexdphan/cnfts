// export const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'stargaze'

import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';

export const chainName = 'cosmwasmtestnet';
export const stakingDenom = 'umlg';
export const feeDenom = 'uand';

// export const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'celeswasm';
// export const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'cosmwasmtestnet';

export const chainassets: AssetList = assets.find(
  (chain) => chain.chain_name === chainName
) as AssetList;

export const coin: Asset = chainassets.assets.find(
  (asset) => asset.base === stakingDenom
) as Asset;

// this comes from chain-registry