import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="border p-2 rounded hover:shadow-lg cursor-pointer" onClick={() => window.location.assign(`/product/${product.id}`)}>
      <img src={product.image} alt={product.name} className="w-full h-auto object-cover mb-2" />
      <h3 className="font-bold">{product.name}</h3>
      <p>{product.price}</p>
      <p className="text-red-500">{product.discount}</p>
    </div>
  );
}