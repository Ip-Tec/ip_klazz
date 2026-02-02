'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, onSnapshot, orderBy, query, Timestamp } from 'firebase/firestore';
import { ComputerDesktopIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

interface UserData {
    id: string;
    email: string;
    displayName?: string;
    lastSeen?: Timestamp;
    lastLogin?: Timestamp;
    currentPath?: string;
    deviceInfo?: {
        browser: string;
        os: string;
        type: string;
    };
    completedTutorials?: string[];
}

export default function AdminUserList() {
    const [users, setUsers] = useState<UserData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen to users collection
        // Note: In a large app, you'd want to paginate or filter this
        const q = query(collection(db, 'users'), orderBy('lastSeen', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const userList: UserData[] = [];
            snapshot.forEach((doc) => {
                userList.push({ id: doc.id, ...doc.data() } as UserData);
            });
            setUsers(userList);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const isOnline = (lastSeen?: Timestamp) => {
        if (!lastSeen) return false;
        const now = Date.now();
        const lastSeenDate = lastSeen.toDate().getTime();
        // Consider online if seen in last 2 minutes
        return now - lastSeenDate < 2 * 60 * 1000;
    };

    const formatTime = (time?: Timestamp) => {
        if (!time) return 'Never';
        return time.toDate().toLocaleString();
    };

    if (loading) return <div className="p-8 text-center text-gray-500">Loading student data...</div>;

    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                <h3 className="font-bold text-gray-900 dark:text-white">Student Activity</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Student</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Current Activity</th>
                            <th className="px-6 py-3">Progress</th>
                            <th className="px-6 py-3">Device</th>
                            <th className="px-6 py-3">Last Login</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            const online = isOnline(user.lastSeen);
                            return (
                                <tr key={user.id} className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${online ? 'bg-green-500' : 'bg-gray-300'}`} />
                                            <div>
                                                <div className="font-bold">{user.displayName || 'Unknown'}</div>
                                                <div className="text-xs text-gray-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {online ? (
                                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                                Online
                                            </span>
                                        ) : (
                                            <span className="text-gray-500 text-xs">
                                                Seen {formatTime(user.lastSeen)}
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                            {user.currentPath || '/'}
                                        </code>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                                            {user.completedTutorials?.length || 0} Finished
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {user.deviceInfo ? (
                                            <div className="flex items-center gap-1" title={`${user.deviceInfo.browser} on ${user.deviceInfo.os}`}>
                                                {user.deviceInfo.type === 'Mobile' ?
                                                    <DevicePhoneMobileIcon className="w-4 h-4" /> :
                                                    <ComputerDesktopIcon className="w-4 h-4" />
                                                }
                                                <span className="truncate max-w-[150px]">
                                                    {user.deviceInfo.os} - {user.deviceInfo.browser}
                                                </span>
                                            </div>
                                        ) : '-'}
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {formatTime(user.lastLogin)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
