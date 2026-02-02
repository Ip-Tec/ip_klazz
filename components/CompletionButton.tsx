'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { db } from '@/lib/firebase';
import { doc, updateDoc, arrayUnion, arrayRemove, onSnapshot } from 'firebase/firestore';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/24/solid';

interface CompletionButtonProps {
    tutorialId: string; // e.g., "javascript/intro"
}

export default function CompletionButton({ tutorialId }: CompletionButtonProps) {
    const { user } = useAuth();
    const [isCompleted, setIsCompleted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }

        const userRef = doc(db, 'users', user.uid);
        const unsubscribe = onSnapshot(userRef, (doc) => {
            if (doc.exists()) {
                const data = doc.data();
                const completed = data.completedTutorials?.includes(tutorialId) || false;
                setIsCompleted(completed);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [user, tutorialId]);

    const toggleCompletion = async () => {
        if (!user) return; // Or redirect to login

        // Optimistic UI update could be done here, but onSnapshot handles it fast enough usually
        const userRef = doc(db, 'users', user.uid);
        try {
            if (isCompleted) {
                await updateDoc(userRef, {
                    completedTutorials: arrayRemove(tutorialId)
                });
            } else {
                await updateDoc(userRef, {
                    completedTutorials: arrayUnion(tutorialId)
                });
            }
        } catch (error) {
            console.error("Error updating progress:", error);
        }
    };

    if (!user) return null; // Don't show for guests

    return (
        <button
            onClick={toggleCompletion}
            disabled={loading}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-sm ${isCompleted
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
        >
            {isCompleted ? (
                <>
                    <CheckCircleIconSolid className="w-6 h-6" />
                    <span>Completed</span>
                </>
            ) : (
                <>
                    <CheckCircleIcon className="w-6 h-6" />
                    <span>Mark as Complete</span>
                </>
            )}
        </button>
    );
}
