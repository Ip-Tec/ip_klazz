'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

interface InstallContextType {
    deferredPrompt: BeforeInstallPromptEvent | null;
    showInstallPrompt: () => void;
    isAppInstalled: boolean;
}

const InstallContext = createContext<InstallContextType>({
    deferredPrompt: null,
    showInstallPrompt: () => { },
    isAppInstalled: false,
});

export function InstallProvider({ children }: { children: ReactNode }) {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isAppInstalled, setIsAppInstalled] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
        };

        window.addEventListener('beforeinstallprompt', handler);

        // Check if app is installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsAppInstalled(true);
        }

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const showInstallPrompt = async () => {
        if (!deferredPrompt) return;
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setDeferredPrompt(null);
        }
    };

    return (
        <InstallContext.Provider value={{ deferredPrompt, showInstallPrompt, isAppInstalled }}>
            {children}
        </InstallContext.Provider>
    );
}

export const useInstall = () => useContext(InstallContext);
