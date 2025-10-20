'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  paidCourses: { [key: string]: boolean };
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, isAdmin: false, paidCourses: {}, loading: true });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [paidCourses, setPaidCourses] = useState<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdTokenResult();
        setIsAdmin(token.claims.admin === true);

        const paidClaims: { [key: string]: boolean } = {};
        for (const key in token.claims) {
          if (key.startsWith('paid_')) {
            paidClaims[key.replace('paid_', '')] = true;
          }
        }
        setPaidCourses(paidClaims);

        setUser(user);
      } else {
        setUser(null);
        setIsAdmin(false);
        setPaidCourses({});
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAdmin, paidCourses, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
