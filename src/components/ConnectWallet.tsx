'use client';

import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';

export default function ConnectWallet() {
  const currentAccount = useCurrentAccount();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Wallet Connection</h2>
      <ConnectButton />
      
      {currentAccount && (
        <div className="mt-4 p-4 bg-green-100 rounded-lg">
          <p className="font-semibold">Connected!</p>
          <p className="text-sm text-gray-600 break-all">
            Address: {currentAccount.address}
          </p>
        </div>
      )}
    </div>
  );
}