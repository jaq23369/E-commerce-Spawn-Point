//Componente: RatingStars
//Descripción: Este componente muestra la valoración de un producto en forma de estrellas. Representa visualmente la puntuación del producto de 1 a 5.
import React from 'react';
const Rating = ({ rating, maxRating, showText, onRate }) => {
  const stars = Array.from({ length: maxRating || 5 }, (_, index) => {
    const filled = index < (rating || 0);
    return (
      <span 
        key={index}
        className={`star ${filled ? 'filled' : 'empty'}`}
        onClick={() => onRate && onRate(index + 1)}
      >
        ★
      </span>
    );
  });
  return (
    <div className="rating">
      {stars}
      {showText && <span className="rating-text">({rating}/{maxRating || 5})</span>}
    </div>
  );
};
export default Rating;