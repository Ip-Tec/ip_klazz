'use client';

import { useAuth } from '@/app/context/AuthContext';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/admin/login');
  };

  if (loading) {
    return <div>Loading...</div>; // Or a proper loader
  }

  if (!user || !isAdmin) {
    router.push('/admin/login');
    return null; // Render nothing while redirecting
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
        </div>
        <p className="text-gray-700 dark:text-gray-300">Welcome, {user.email}!</p>
        <p className="text-green-500 font-bold">You have admin privileges.</p>
        {/* More dashboard content will go here */}
      </div>
    </div>
  );
}
