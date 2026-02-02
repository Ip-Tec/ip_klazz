'use client';

import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PricingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePurchase = async () => {
    setIsSubmitting(true);
    if (!user) {
      router.push('/admin/login?redirect=/pricing');
      return;
    }

    try {
      const idToken = await user.getIdToken();
      const response = await fetch('/api/payments/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          course: 'python',
          amount: 1000, // Amount in NGN (e.g., 1000 for N10.00)
          currency: 'NGN',
          idToken,
        }),
      });

      const { authorizationUrl } = await response.json();

      if (authorizationUrl) {
        window.location.href = authorizationUrl;
      } else {
        alert('Could not initiate payment. Please try again.');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">Pricing</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Python Course</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Get full access to our comprehensive Python course, including all lessons, examples, and projects.</p>
          <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">₦1,000</div>
          <button
            onClick={handlePurchase}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
}
