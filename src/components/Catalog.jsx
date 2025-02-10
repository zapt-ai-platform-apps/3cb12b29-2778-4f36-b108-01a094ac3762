import React, { useState, useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import ProductCard from './ProductCard';
import dummyProducts from '../data/dummyProducts';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching products for catalog');
    setTimeout(() => {
      setProducts(dummyProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProducts =
    filter === 'all' ? products : products.filter(prod => prod.category === filter);

  const handleFilterChange = (cat) => {
    setFilter(cat);
  };

  if (loading) return <div>Loading Catalog...</div>;

  return (
    <div className="p-4">
      <div className="mb-4 flex space-x-4">
        <button onClick={() => handleFilterChange('all')} className="cursor-pointer bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded">
          All
        </button>
        <button onClick={() => handleFilterChange('alimentaire')} className="cursor-pointer bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded">
          Alimentaire
        </button>
        <button onClick={() => handleFilterChange('électronique')} className="cursor-pointer bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded">
          Électronique
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}