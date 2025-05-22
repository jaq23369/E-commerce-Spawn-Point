//Componente: ComplementsList
//Descripción: Este componente muestra una lista de productos complementarios o adicionales que se pueden adquirir junto con el producto principal.
import React from 'react';
import Button from '../ui/Button';
const ComplementsList = ({ complements, onAddComplement, title }) => {
  if (!complements || complements.length === 0) return null;
  return (
    <div className="complements-list">
      <h3>{title || "Complementos"}</h3>
      <div className="complements-items">
        {complements.map(complement => (
          <div key={complement.id} className="complement-item">
            <img src={complement.image} alt={complement.name} />
            <h4>{complement.name}</h4>
            <span>${complement.price}</span>
            <Button onClick={() => onAddComplement(complement)}>Agregar</Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ComplementsList;