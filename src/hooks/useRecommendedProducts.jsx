//Hook: useRecommendedProducts
//Descripción: Este hook personalizado genera recomendaciones de productos basadas en los productos vistos por el usuario. Utiliza useMemo para optimizar el rendimiento y evitar cálculos innecesarios. Filtra los productos recomendados según géneros y plataformas similares a los productos vistos.

import { useMemo } from 'react';
import { useProductHistory } from './useProductHistory';

export const useRecommendedProducts = (allProducts = []) => {
  const { viewedProducts } = useProductHistory();
  
  const recommendedProducts = useMemo(() => {
    // Si no hay productos vistos o productos disponibles, retornar array vacío
    if (!viewedProducts.length || !allProducts.length) {
      return [];
    }
    
    // Obtener información de productos vistos
    const viewedProductsData = viewedProducts
      .map(id => allProducts.find(product => product.id === id))
      .filter(Boolean); // Filtrar productos que no existen
    
    if (!viewedProductsData.length) {
      return [];
    }
    
    // Extraer géneros y plataformas de productos vistos
    const viewedGenres = new Set();
    const viewedPlatforms = new Set();
    
    viewedProductsData.forEach(product => {
      if (product.genres) {
        product.genres.forEach(genre => viewedGenres.add(genre));
      }
      if (product.platforms) {
        product.platforms.forEach(platform => viewedPlatforms.add(platform));
      }
    });
    
    // Filtrar productos recomendados basados en similitudes
    const recommendations = allProducts
      .filter(product => {
        // No recomendar productos ya vistos
        if (viewedProducts.includes(product.id)) {
          return false;
        }
        
        // Buscar similitudes en géneros o plataformas
        const hasGenreMatch = product.genres?.some(genre => viewedGenres.has(genre));
        const hasPlatformMatch = product.platforms?.some(platform => viewedPlatforms.has(platform));
        
        return hasGenreMatch || hasPlatformMatch;
      })
      .slice(0, 8); // Limitar a 8 recomendaciones
    
    console.log(`${recommendations.length} productos recomendados generados`);
    return recommendations;
    
  }, [viewedProducts, allProducts]);
  
  return recommendedProducts;
};