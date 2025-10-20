'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function PaymentErrorPage() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message') || 'An unknown error occurred.';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Payment Failed</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{message}</p>
        <Link href="/pricing" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Try Again
        </Link>
      </div>
    </div>
  );
}
