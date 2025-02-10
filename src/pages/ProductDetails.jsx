import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Dummy product details for demonstration
  const product = {
    id,
    name: `Product ${id}`,
    description: 'This is a detailed description of the product.',
    category: id % 2 === 0 ? 'électronique' : 'alimentaire',
    price: id % 2 === 0 ? '$20' : '$10',
    discount: id % 2 === 0 ? '15%' : '10%',
    image: `https://via.placeholder.com/400?text=Product+${id}`
  };

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="cursor-pointer bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded mb-4">
        Retour
      </button>
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 object-cover rounded" />
        <div className="md:ml-4 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="mb-2">{product.description}</p>
          <p className="mb-2">Catégorie: {product.category}</p>
          <p className="mb-2">Prix: {product.price}</p>
          <p className="mb-2 text-red-500">Remise: {product.discount}</p>
        </div>
      </div>
    </div>
  );
}