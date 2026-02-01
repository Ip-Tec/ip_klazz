'use client';

import {
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    XIcon,
    LinkedinIcon,
    WhatsappIcon
} from 'react-share';
import { LinkIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

interface SocialShareProps {
    title: string;
    url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
    const [copied, setCopied] = useState(false);
    const [fullUrl, setFullUrl] = useState('');

    useEffect(() => {
        // In some environments, window.location.href might be updated after mount
        setFullUrl(window.location.href);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(fullUrl || url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareUrl = fullUrl || url;

    return (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-6 uppercase tracking-tight">
                Share this <span className="text-orange-500">Tutorial</span>
            </h3>
            <div className="flex flex-wrap gap-4">
                <TwitterShareButton url={shareUrl} title={title}>
                    <div className="group flex items-center gap-3 px-5 py-2.5 bg-black text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-black/20">
                        <XIcon size={24} round />
                        <span className="font-bold">Post</span>
                    </div>
                </TwitterShareButton>

                <LinkedinShareButton url={shareUrl} title={title}>
                    <div className="group flex items-center gap-3 px-5 py-2.5 bg-[#0077b5] text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-[#0077b5]/20">
                        <LinkedinIcon size={24} round />
                        <span className="font-bold">Share</span>
                    </div>
                </LinkedinShareButton>

                <WhatsappShareButton url={shareUrl} title={title}>
                    <div className="group flex items-center gap-3 px-5 py-2.5 bg-[#25d366] text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-[#25d366]/20">
                        <WhatsappIcon size={24} round />
                        <span className="font-bold">Send</span>
                    </div>
                </WhatsappShareButton>

                <button
                    onClick={handleCopy}
                    className="group flex items-center gap-3 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-200 dark:border-gray-700"
                >
                    {copied ? (
                        <CheckIcon className="w-6 h-6 text-green-500 animate-bounce" />
                    ) : (
                        <LinkIcon className="w-6 h-6 text-orange-500" />
                    )}
                    <span className="font-bold">{copied ? 'Copied!' : 'Copy Link'}</span>
                </button>
            </div>
        </div>
    );
}
