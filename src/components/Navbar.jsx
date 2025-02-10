import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [signingOut, setSigningOut] = useState(false);

  const handleSignOut = async () => {
    setSigningOut(true);
    try {
      await signOut();
      console.log("User signed out successfully");
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
      setSigningOut(false);
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex flex-wrap items-center justify-between">
      <div className="flex items-center space-x-4">
        <NavLink to="/" className="cursor-pointer font-bold text-xl">
          New App
        </NavLink>
        <NavLink to="/about" className="cursor-pointer hover:underline">
          À propos
        </NavLink>
        <NavLink to="/support" className="cursor-pointer hover:underline">
          Support Client
        </NavLink>
        <NavLink to="/terms" className="cursor-pointer hover:underline">
          Termes et conditions
        </NavLink>
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <NavLink to="/dashboard" className="cursor-pointer hover:underline">
              Dashboard
            </NavLink>
            <button
              onClick={handleSignOut}
              disabled={signingOut}
              className={`cursor-pointer bg-red-500 hover:bg-red-600 px-3 py-1 rounded ${signingOut ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Sign Out
            </button>
          </>
        ) : (
          <NavLink to="/login" className="cursor-pointer bg-green-500 hover:bg-green-600 px-3 py-1 rounded">
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}