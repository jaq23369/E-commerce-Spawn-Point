//Componente: ProductDetail
//Descripción: Este componente es el contenedor principal para la página de detalle del producto. Organiza y muestra todos los elementos relacionados con un producto específico.
import React from 'react';
import Button from '../ui/Button';
import Rating from '../ui/Rating';
import FavoriteButton from './FavoriteButton';
const ProductDetail = ({ product, isFavorite, onAddToCart, onToggleFavorite, onGoBack, children }) => {
  return (
    <div className="product-detail">
      <div className="product-main">
        {children}
      </div>
      <div className="product-info">
        <Button onClick={onGoBack}>← Regresar</Button>
        <h2>{product.name}</h2>
        <Rating rating={product.rating} />
        <div className="product-meta">
          <span className="product-price">${product.price}</span>
          <FavoriteButton 
            productId={product.id}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
        <Button onClick={() => onAddToCart(product)}>Agregar al carrito</Button>
      </div>
    </div>
  );
};
export default ProductDetail;