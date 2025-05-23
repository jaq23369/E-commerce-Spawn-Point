//Componente: Badge
//Descripción: Este componente muestra una etiqueta visual pequeña que proporciona información adicional sobre un producto, como "En oferta", "Agotado" o "Nuevo".
import React from 'react';
const Badge = ({ text, type, className }) => {
  return (
    <span className={`badge badge-${type || 'default'} ${className || ''}`}>
      {text}
    </span>
  );
};
export default Badge;