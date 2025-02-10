import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase, recordLogin } from '../supabaseClient';
import * as Sentry from '@sentry/browser';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);
    setLoading(false);
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        console.log("User signed in:", session.user);
        setUser(session.user);
        recordLogin(session.user.email, import.meta.env.VITE_PUBLIC_APP_ENV).catch(error => {
          console.error('Failed to record login:', error);
          Sentry.captureException(error);
        });
      } else {
        console.log("User signed out");
        setUser(null);
      }
    });
    return () => listener?.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      console.log("User signed out successfully");
    } catch (error) {
      console.error('Sign out error:', error);
      Sentry.captureException(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);