'use client';

import { AuthProvider } from '@/app/context/AuthContext';
import { ReactNode } from 'react';

import UserTracker from '@/components/UserTracker';

import { InstallProvider } from "./context/InstallContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <InstallProvider>
        {children}
        <UserTracker />
      </InstallProvider>
    </AuthProvider>
  );
}
