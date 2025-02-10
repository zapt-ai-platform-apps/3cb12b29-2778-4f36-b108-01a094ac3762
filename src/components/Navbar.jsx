import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex flex-wrap items-center justify-between">
      <div className="flex items-center space-x-4">
        <NavLink to="/" className="cursor-pointer font-bold text-xl">
          Local Store Promotions
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
            <button onClick={handleSignOut} className="cursor-pointer bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
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