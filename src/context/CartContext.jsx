//Componente: CartContext
//Descripción: Este archivo define el contexto global del carrito de compras. Proporciona el estado del carrito y funciones para manipularlo a todos los componentes. Implementa useContext para gestionar el estado global del carrito.

import React, { createContext, useContext, useState } from 'react';

// Espacio compartido donde se guarda el estado del carrito
const CartContext = createContext();
// Proporciona el estado del carrito y funciones para manipularlo a todos los que lo necesiten
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // No superar 9 unidades por producto
        if (existingItem.quantity + quantity > 9) {
          alert('No puedes agregar más de 9 unidades por producto');
          return prevItems;
        }
        // Actualizar cantidad
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        // Añadir nuevo producto
        return [...prevItems, { ...product, quantity }];
      }
    });
  };
  
  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      
      if (existingItem && existingItem.quantity > 1) {
        // Reducir cantidad
        return prevItems.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      } else {
        // Eliminar producto completamente
        return prevItems.filter(item => item.id !== productId);
      }
    });
  };
  
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
      return;
    }
    
    if (newQuantity > 9) {
      alert('No puedes agregar más de 9 unidades por producto');
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setCartItems([]);
  };
  
  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity,
        clearCart,
        getCartItemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};