import React, { useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import * as Sentry from '@sentry/browser';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAuthChange = (event, session) => {
    if (session?.user) {
      console.log("User authenticated:", session.user);
      setLoading(true);
      navigate('/dashboard');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Se connecter</h1>
      <p className="mb-4">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Sign in with ZAPT
        </a>
      </p>
      <div className="max-w-md mx-auto">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google', 'facebook', 'apple']}
          socialLayout="horizontal"
          redirectTo="/dashboard"
          onAuthChange={handleAuthChange}
        />
      </div>
      {loading && <div>Loading Dashboard...</div>}
    </div>
  );
}