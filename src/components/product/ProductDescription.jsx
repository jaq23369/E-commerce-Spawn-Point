//Componente: ProductDescription
//Descripción: Este componente muestra la descripción detallada de un producto. Incluye información sobre características, jugabilidad y otros detalles relevantes.
import React from 'react';
const ProductDescription = ({ description, title }) => {
  if (!description) return null;
  return (
    <div className="product-description">
      <h3>{title || "Descripción"}</h3>
      <p>{description}</p>
    </div>
  );
};
export default ProductDescription;