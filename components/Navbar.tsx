'use client';

import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import ThemeToggle from './ThemeToggle';
import { UserCircleIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const { user, loading } = useAuth();

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Ip Klazz
                        </span>
                    </Link>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                        {!loading && (
                            <>
                                {user ? (
                                    <Link
                                        href="/profile"
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        <UserCircleIcon className="w-5 h-5" />
                                        <span className="hidden sm:inline">Profile</span>
                                    </Link>
                                ) : (
                                    <Link
                                        href="/login"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                                    >
                                        <ArrowRightEndOnRectangleIcon className="w-5 h-5" />
                                        <span>Login</span>
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
