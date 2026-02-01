'use client';

import { Fragment, useState, useEffect, useMemo } from 'react';
import { Dialog, Combobox, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import Fuse from 'fuse.js';
import { useRouter } from 'next/navigation';

interface SearchItem {
    title: string;
    content: string;
    url: string;
    lang: string;
    type: string;
}

interface SearchModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function SearchModal({ open, setOpen }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const [searchIndex, setSearchIndex] = useState<SearchItem[]>([]);
    const [results, setResults] = useState<SearchItem[]>([]);
    const router = useRouter();

    // Load search index on mount
    useEffect(() => {
        fetch('/search-index.json')
            .then((res) => res.json())
            .then((data) => setSearchIndex(data))
            .catch((err) => console.error('Failed to load search index:', err));
    }, []);

    // Initialize Fuse
    const fuse = useMemo(() => new Fuse(searchIndex, {
        keys: ['title', 'content'],
        threshold: 0.3,
        includeMatches: true,
    }), [searchIndex]);

    // Handle search
    useEffect(() => {
        if (query.length > 1) {
            const searchResults = fuse.search(query).map((result) => result.item);
            setResults(searchResults.slice(0, 5)); // Limit to 5 results
        } else {
            setResults([]);
        }
    }, [query, searchIndex, fuse]); // Correct dependency array

    const handleSelect = (item: SearchItem | null) => {
        if (!item) return;
        setOpen(false);
        router.push(item.url);
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                            <Combobox onChange={handleSelect}>
                                <div className="relative">
                                    <MagnifyingGlassIcon
                                        className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <Combobox.Input
                                        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                        placeholder="Search tutorials..."
                                        onChange={(event) => setQuery(event.target.value)}
                                    />
                                </div>

                                {results.length > 0 && (
                                    <Combobox.Options static className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
                                        {results.map((item) => (
                                            <Combobox.Option
                                                key={item.url}
                                                value={item}
                                                className={({ active }) =>
                                                    `cursor-default select-none px-4 py-2 ${active ? 'bg-indigo-600 text-white' : ''
                                                    }`
                                                }
                                            >
                                                {({ active }) => (
                                                    <>
                                                        <div className="flex justify-between">
                                                            <span className={`font-medium ${active ? 'text-white' : 'text-gray-900'}`}>
                                                                {item.title}
                                                            </span>
                                                            <span className={`text-xs uppercase ${active ? 'text-indigo-200' : 'text-gray-500'}`}>
                                                                {item.lang}
                                                            </span>
                                                        </div>
                                                        <p className={`line-clamp-1 text-xs ${active ? 'text-indigo-200' : 'text-gray-500'}`}>
                                                            {item.content}
                                                        </p>
                                                    </>
                                                )}
                                            </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                )}

                                {query !== '' && results.length === 0 && (
                                    <div className="px-6 py-14 text-center text-sm sm:px-14">
                                        <ExclamationCircleIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <p className="mt-4 font-semibold text-gray-900">No results found</p>
                                        <p className="mt-2 text-gray-500">We couldn&apos;t find anything matching that term. Please try again.</p>
                                    </div>
                                )}
                            </Combobox>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
