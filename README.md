# Sui Wallet Integration with Next.js

A Next.js application demonstrating Sui blockchain wallet integration using the official Mysten Labs dApp Kit.

## Features

- 🔗 Connect to Sui wallets (Sui Wallet, Suiet, Ethos, etc.)
- 🌐 Testnet and Mainnet support
- ⚡ Next.js App Router compatible
- 🎨 Tailwind CSS styling
- 📱 Responsive design

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sui wallet browser extension

### Installation

```bash
# Clone and install
git clone <your-repo-url>
cd sui-wallet-test
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── WalletProvider.tsx  # Wallet context providers
│   └── ConnectWallet.tsx   # Connect button component
└── lib/
    └── sui.ts              # Sui network configuration
```

## Configuration

### Network Settings

Edit `src/lib/sui.ts` to modify networks:

```typescript
const { networkConfig } = createNetworkConfig({
  testnet: { url: getFullnodeUrl('testnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
});
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUI_NETWORK=testnet
```

## Usage

### Basic Connection

```typescript
import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';

function MyComponent() {
  const account = useCurrentAccount();
  
  return (
    <div>
      <ConnectButton />
      {account && <p>Connected: {account.address}</p>}
    </div>
  );
}
```

### Available Hooks

- `useCurrentAccount()` - Get connected account
- `useDisconnectWallet()` - Disconnect wallet
- `useSuiClient()` - Access Sui client
- `useSignAndExecuteTransaction()` - Execute transactions

## Deployment

### Vercel

```bash
npm run build
```

Deploy to [Vercel](https://vercel.com) or your preferred platform.

### Environment Variables

Set in production:
- `NEXT_PUBLIC_SUI_NETWORK=mainnet`

## Supported Wallets

- Sui Wallet (Official)
- Suiet Wallet
- Ethos Wallet
- Martian Wallet
- Other Sui-compatible wallets

## Development in Codespaces

1. Create new Codespace
2. Run setup commands
3. Access via forwarded port
4. Install wallet extension in browser

## Troubleshooting

**No wallets detected:**
- Install a Sui wallet browser extension
- Refresh the page

**Build errors:**
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

**Provider errors:**
- Check provider nesting order in `layout.tsx`
- Ensure 'use client' directive on components using hooks

## Resources

- [Sui dApp Kit Documentation](https://sdk.mystenlabs.com/dapp-kit)
- [Sui TypeScript SDK](https://sdk.mystenlabs.com/typescript)
- [Sui Network Explorer](https://suiexplorer.com/)

## License

MIT