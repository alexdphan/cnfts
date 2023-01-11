
import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';
import { localosmosis, localosmosisAssets } from './localosmosis';

// export const chainName = 'cosmwasmtestnet';
// export const stakingDenom = 'umlg';
// export const feeDenom = 'uand';

export const chainName = localosmosis.chain_name;
// // export const chainName = 'osmosistestnet';

// export const chainassets: AssetList = assets.find(
//   (chain) => chain.chain_name === chainName
// ) as AssetList;

// export const coin: Asset = chainassets.assets.find(
//   (asset) => asset.base === 'uosmo'
// ) as Asset;
