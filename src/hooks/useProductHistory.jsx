//Hook: useProductHistory
//Descripción: Este hook personalizado mantiene un historial de los productos vistos. Utiliza useRef para almacenar los IDs de productos visitados recientemente.

import { useRef, useCallback } from 'react';
export const useProductHistory = () => {
  // useRef para mantener el historial de productos vistos
  const historyRef = useRef([]);
  
  const addToHistory = useCallback((productId) => {
    const currentHistory = historyRef.current;
    
    // Evitar duplicados y mantener solo los últimos 10 productos
    const filteredHistory = currentHistory.filter(id => id !== productId);
    historyRef.current = [productId, ...filteredHistory].slice(0, 10);
    
    console.log(`Producto ${productId} agregado al historial`);
  }, []);
  
  const getHistory = useCallback(() => {
    return [...historyRef.current]; // Retornar copia
  }, []);
  
  const clearHistory = useCallback(() => {
    historyRef.current = [];
    console.log('Historial limpiado');
  }, []);
  
  const getRecentProducts = useCallback((count = 5) => {
    return historyRef.current.slice(0, count);
  }, []);
  
  return {
    viewedProducts: historyRef.current,
    addToHistory,
    getHistory,
    clearHistory,
    getRecentProducts
  };
};