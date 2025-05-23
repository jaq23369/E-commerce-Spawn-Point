//Hook: useCartCalculations
//Descripción: Este hook personalizado calcula el subtotal y total del carrito. Utiliza useMemo para evitar recálculos innecesarios cuando el carrito no cambia.

import { useMemo } from 'react';
import { useCart } from '../context/CartContext';

export const useCartCalculations = () => {
  const { cartItems } = useCart();
  
  const calculations = useMemo(() => {
    // Calcular subtotal
    const subtotal = cartItems.reduce(
      (total, item) => total + (item.price * item.quantity), 
      0
    );
    
    // Calcular total (en este caso es igual al subtotal)
    const total = subtotal;
    
    // Verificar si hay error (total > $999.99)
    const hasError = total > 999.99;
    
    // Contar total de items
    const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    
    return {
      subtotal: Number(subtotal.toFixed(2)),
      total: Number(total.toFixed(2)),
      hasError,
      itemCount
    };
  }, [cartItems]);
  
  return calculations;
};