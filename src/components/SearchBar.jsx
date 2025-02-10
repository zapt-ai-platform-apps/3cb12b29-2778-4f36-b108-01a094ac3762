import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher des produits..."
        className="box-border p-2 border rounded-l w-full"
      />
      <button type="submit" className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r">
        Rechercher
      </button>
    </form>
  );
}