//Componente: FavoriteButton 
//Descripción: Este componente muestra un botón para marcar/desmarcar productos como favoritos.
import React from 'react';
import Button from '../ui/Button';
const FavoriteButton = ({ productId, isFavorite, onToggleFavorite }) => {
  return (
    <Button 
      className={`favorite-button ${isFavorite ? 'active' : ''}`}
      onClick={() => onToggleFavorite(productId)}
    >
      {isFavorite ? '❤️' : '🤍'}
    </Button>
  );
};
export default FavoriteButton;