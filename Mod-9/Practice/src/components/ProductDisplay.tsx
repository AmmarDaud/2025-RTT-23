import React from 'react';
import type { ProductDisplayProps } from './../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children
}) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <img
        src={product.imageUrl || 'https://via.placeholder.com/150'}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-lg text-gray-700">${product.price.toFixed(2)}</p>
      {showDescription && <p className="mt-2 text-sm text-gray-600">{product.description}</p>}
      {showStockStatus && (
        <p className={`mt-1 text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}
      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      )}
      {children}
    </div>
  );
};
