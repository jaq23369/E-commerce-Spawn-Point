//Componente: ProductCard
//Descripción: Este componente muestra la información resumida de un producto en forma de tarjeta. Incluye imagen, nombre, precio, valoración y botón para agregar al carrito.
import React from 'react';
import Button from '../ui/Button';
import Rating from '../ui/Rating';
import Badge from '../ui/Badge';
const ProductCard = ({ product, onAddToCart, onViewDetails, onToggleFavorite, isFavorite }) => {
  return (
    <div className="product-card">
      {product.hasDiscount && <Badge text="Oferta" type="discount" />}
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3 onClick={() => onViewDetails(product.id)}>{product.name}</h3>
        <Rating rating={product.rating} />
        <div className="product-price">
          {product.originalPrice && <span className="original-price">${product.originalPrice}</span>}
          <span className="current-price">${product.price}</span>
        </div>
        <Button onClick={() => onAddToCart(product)}>Agregar al carrito</Button>
        <Button onClick={() => onToggleFavorite(product.id)}>{isFavorite ? '❤️' : '🤍'}</Button>
      </div>
    </div>
  );
};
export default ProductCard;