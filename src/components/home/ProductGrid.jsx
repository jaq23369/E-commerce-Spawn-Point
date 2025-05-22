//Componente: ProductGrid
//Descripción: Este componente organiza múltiples ProductCard en una cuadrícula responsive. Muestra una lista de productos en formato de grid en la página principal.
import React from 'react';
import ProductCard from './ProductCard';
const ProductGrid = ({ products, onAddToCart, onViewDetails, onToggleFavorite, favorites }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.includes(product.id)}
        />
      ))}
    </div>
  );
};
export default ProductGrid;