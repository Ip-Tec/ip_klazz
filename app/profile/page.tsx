'use client';

import { useAuth } from '@/app/context/AuthContext';
import { db, auth } from '@/lib/firebase';
import { doc, getDoc, Timestamp } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserCircleIcon, ComputerDesktopIcon, CalendarIcon, ArrowRightStartOnRectangleIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface UserData {
    lastLogin?: Timestamp;
    deviceInfo?: {
        browser: string;
        os: string;
        type: string;
    };
    completedTutorials?: string[];
}

export default function ProfilePage() {
    const { user, loading } = useAuth();
    const [userData, setUserData] = useState<UserData | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            const fetchUserData = async () => {
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserData(docSnap.data() as UserData);
                }
            };
            fetchUserData();
        }
    }, [user]);

    const handleLogout = async () => {
        await signOut(auth);
        router.push('/');
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    if (!user) {
        router.push('/admin/login'); // Or home
        return null;
    }

    const formatDate = (date?: Timestamp) => {
        if (!date) return 'Unknown';
        return date.toDate().toLocaleString();
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="p-8 w-full">
                        <div className="flex items-center justify-between mb-6">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold flex items-center gap-2">
                                <UserCircleIcon className="w-5 h-5" /> User Profile
                            </div>
                            <Link href="/" className="text-gray-400 hover:text-gray-500">Back to Home</Link>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            {user.photoURL ? (
                                <img className="h-16 w-16 rounded-full" src={user.photoURL} alt={user.displayName || "User"} />
                            ) : (
                                <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-2xl font-bold">
                                    {user.email?.charAt(0).toUpperCase()}
                                </div>
                            )}
                            <div>
                                <h1 className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white">
                                    {user.displayName || 'Student'}
                                </h1>
                                <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                                    <CalendarIcon className="w-4 h-4" />
                                    <span className="text-xs font-semibold uppercase">Last Login</span>
                                </div>
                                <p className="text-gray-900 dark:text-white font-medium">
                                    {userData ? formatDate(userData.lastLogin) : 'Loading...'}
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                                    <ComputerDesktopIcon className="w-4 h-4" />
                                    <span className="text-xs font-semibold uppercase">Device Info</span>
                                </div>
                                <p className="text-gray-900 dark:text-white font-medium">
                                    {userData?.deviceInfo ? `${userData.deviceInfo.browser} on ${userData.deviceInfo.os}` : 'Unknown Device'}
                                </p>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg md:col-span-2">
                                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-1">
                                    <BookOpenIcon className="w-4 h-4" />
                                    <span className="text-xs font-semibold uppercase">Study Progress</span>
                                </div>
                                <p className="text-gray-900 dark:text-white font-bold text-lg">
                                    {userData?.completedTutorials?.length || 0} Tutorials Completed
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                        >
                            <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
