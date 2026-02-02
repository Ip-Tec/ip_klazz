'use client';

import { useState, useEffect } from 'react';
import SearchModal from './SearchModal';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function GlobalSearchWrapper() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault();
                setOpen(true);
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-orange-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:bottom-8 sm:right-8"
                aria-label="Search tutorials"
            >
                <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <SearchModal open={open} setOpen={setOpen} />
        </>
    );
}
