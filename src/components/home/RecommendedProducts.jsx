
//Componente: RecommendedProducts
//Descripción: Este componente muestra productos recomendados basados en el historial de navegación.
import React from 'react';
import ProductGrid from './ProductGrid';
const RecommendedProducts = ({ products, onAddToCart, onViewDetails, title }) => {
  if (products.length === 0) return null;
  return (
    <section className="recommended-products">
      <h2>{title || "Recomendados para ti"}</h2>
      <ProductGrid 
        products={products}
        onAddToCart={onAddToCart}
        onViewDetails={onViewDetails}
        onToggleFavorite={() => {}}
        favorites={[]}
      />
    </section>
  );
};
export default RecommendedProducts;