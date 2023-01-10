# @cosmostation/wc-modal

### Installation

```bash
yarn add @cosmostation/wc-modal
```

```bash
npm install @cosmostation/wc-modal
```

### Tendermint

```typescript
import { CosmostationWCModal } from '@cosmostation/wc-modal';

const connector = new WalletConnect({
  bridge: 'https://bridge.walletconnect.org',
  signingMethods: ['cosmostation_wc_accounts_v1', 'cosmostation_wc_sign_tx_v1'],
  qrcodeModal: CosmostationWCModal,
});
```