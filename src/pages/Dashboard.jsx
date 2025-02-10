import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <div className="p-4">
        <p>Vous devez être connecté pour accéder au dashboard.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-2">Bienvenue, {user.email}</p>
      <div className="mb-4">
        <h2 className="font-bold">Points de Fidélité</h2>
        <p>Vous avez 1200 points.</p>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">Historique des Achats</h2>
        <p>Aucun achat récent.</p>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">Programme de Parrainage</h2>
        <p>Invitez vos amis et gagnez des récompenses !</p>
      </div>
      <button onClick={signOut} className="cursor-pointer bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
        Sign Out
      </button>
    </div>
  );
}