import ConnectWallet from '@/components/ConnectWallet';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Sui Wallet Integration Test
        </h1>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
          <ConnectWallet />
        </div>
      </div>
    </main>
  );
}