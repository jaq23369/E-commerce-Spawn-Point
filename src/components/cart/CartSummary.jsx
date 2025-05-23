//Componente: CartSummary 
//Descripción: Este componente muestra el resumen del carrito con subtotal y total a pagar. También muestra mensajes de error si el total excede el límite permitido.
import React from 'react';
import Button from '../ui/Button';
const CartSummary = ({ subtotal, total, hasError, onPay, onEmptyCart }) => {
  return (
    <div className="cart-summary">
      <div className="summary-line">
        <span>Subtotal: ${subtotal}</span>
      </div>
      <div className="summary-line">
        <span>Total: ${total}</span>
      </div>
      {hasError && <div className="error">ERROR: Total excede $999.99</div>}
      <Button onClick={onPay} disabled={hasError}>PAGAR</Button>
      <Button onClick={onEmptyCart}>Vaciar carrito</Button>
    </div>
  );
};
export default CartSummary;