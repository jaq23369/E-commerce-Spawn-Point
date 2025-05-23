//Hook: useFavorites
//Descripción: Este hook personalizado mantiene un array de productos favoritos. Utiliza useRef para almacenar los IDs de productos favoritos y proporciona funciones para agregar, quitar y verificar favoritos. También permite obtener la lista de favoritos y limpiarlos.

import { useRef, useCallback } from 'react';

export const useFavorites = () => {
  // useRef para mantener el array de favoritos entre renders
  const favoritesRef = useRef([]);
  
  const toggleFavorite = useCallback((productId) => {
    const currentFavorites = favoritesRef.current;
    const index = currentFavorites.indexOf(productId);
    
    if (index === -1) {
      // Agregar a favoritos
      favoritesRef.current = [...currentFavorites, productId];
      console.log(`Producto ${productId} agregado a favoritos`);
    } else {
      // Quitar de favoritos
      favoritesRef.current = currentFavorites.filter(id => id !== productId);
      console.log(`Producto ${productId} quitado de favoritos`);
    }
  }, []);
  
  const isFavorite = useCallback((productId) => {
    return favoritesRef.current.includes(productId);
  }, []);
  
  const getFavorites = useCallback(() => {
    return [...favoritesRef.current]; // Retornar copia para evitar mutaciones
  }, []);
  
  const clearFavorites = useCallback(() => {
    favoritesRef.current = [];
    console.log('Favoritos limpiados');
  }, []);
  
  return {
    favorites: favoritesRef.current,
    toggleFavorite,
    isFavorite,
    getFavorites,
    clearFavorites
  };
};