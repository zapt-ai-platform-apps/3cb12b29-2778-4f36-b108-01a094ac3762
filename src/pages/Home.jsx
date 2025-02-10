import React, { useState } from 'react';
import MapBanner from '../components/MapBanner';
import Carousel from '../components/Carousel';
import Catalog from '../components/Catalog';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Implement search logic here, setting searchResults if needed.
  };

  return (
    <div className="p-4">
      <MapBanner />
      <Carousel />
      <SearchBar onSearch={handleSearch} />
      <Catalog />
    </div>
  );
}