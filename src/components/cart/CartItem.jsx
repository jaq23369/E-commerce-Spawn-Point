// * Componente: CartItem
//Descripción: Este componente representa un ítem individual dentro del carrito de compras. Muestra la información básica del producto (nombre, imagen, precio) y la cantidad seleccionada.
import React from 'react';
import Button from '../ui/Button';
const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <div className="item-controls">
          <Button onClick={() => onDecrease(item.id)}>-</Button>
          <span>{item.quantity}</span>
          <Button onClick={() => onIncrease(item.id)}>+</Button>
          <Button onClick={() => onRemove(item.id)}>Eliminar</Button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;