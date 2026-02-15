'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { db } from '@/lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function UserTracker() {
    const { user } = useAuth();
    const pathname = usePathname();

    // Helper to parse UA
    const getDeviceInfo = () => {
        const ua = window.navigator.userAgent;
        let browser = "Unknown";
        let os = "Unknown";
        const isMobile = /Mobi|Android/i.test(ua);

        if (ua.indexOf("Firefox") > -1) browser = "Mozilla Firefox";
        else if (ua.indexOf("SamsungBrowser") > -1) browser = "Samsung Internet";
        else if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) browser = "Opera";
        else if (ua.indexOf("Trident") > -1) browser = "Microsoft Internet Explorer";
        else if (ua.indexOf("Edge") > -1) browser = "Microsoft Edge";
        else if (ua.indexOf("Chrome") > -1) browser = "Google Chrome";
        else if (ua.indexOf("Safari") > -1) browser = "Apple Safari";

        if (ua.indexOf("Win") > -1) os = "Windows";
        else if (ua.indexOf("Mac") > -1) os = "MacOS";
        else if (ua.indexOf("Linux") > -1) os = "Linux";
        else if (ua.indexOf("Android") > -1) os = "Android";
        else if (ua.indexOf("like Mac") > -1) os = "iOS";

        return {
            browser,
            os,
            type: isMobile ? "Mobile" : "Desktop"
        };
    };

    useEffect(() => {
        if (!user) return;

        const userRef = doc(db, 'users', user.uid);
        const deviceInfo = getDeviceInfo();

        // 1. Initial Update (Login/Device Info)
        const initSession = async () => {
            try {
                await setDoc(userRef, {
                    email: user.email,
                    displayName: user.displayName || user.email?.split('@')[0],
                    photoURL: user.photoURL,
                    deviceInfo,
                    lastLogin: serverTimestamp(),
                    isOnline: true,
                    lastSeen: serverTimestamp(),
                    currentPath: pathname
                }, { merge: true });
            } catch (error) {
                console.error("Error tracking session:", error);
            }
        };

        initSession();

        // 2. Heartbeat (Every 60s)
        const interval = setInterval(() => {
            setDoc(userRef, {
                lastSeen: serverTimestamp(),
                isOnline: true,
                currentPath: window.location.pathname // Use window to be sure in callback
            }, { merge: true }).catch(e => console.error("Heartbeat error", e));
        }, 60000);

        // 3. Cleanup (Offline)
        // Note: This is best effort. Reliable offline status usually needs Realtime Database 'onDisconnect'.
        // For Firestore, we rely on 'lastSeen' timestamp comparisons in the UI.
        return () => {
            clearInterval(interval);
        };
    }, [user, pathname]); // Run when user or path changes

    // 4. Path Tracker (Immediate on route change)
    useEffect(() => {
        if (!user) return;
        const userRef = doc(db, 'users', user.uid);
        setDoc(userRef, {
            currentPath: pathname,
            lastSeen: serverTimestamp()
        }, { merge: true }).catch(console.error);
    }, [pathname, user]);

    return null;
}
