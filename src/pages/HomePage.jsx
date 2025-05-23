import React, { useState } from 'react';

// Componentes de UI
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Rating from '../components/ui/Rating';
import FilterButtons from '../components/ui/FilterButtons';

// Componentes de layout
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Navigation from '../components/layout/Navigation';
import SearchBar from '../components/layout/SearchBar';

// Componentes específicos del home
import ProductCard from '../components/home/ProductCard';
import ProductGrid from '../components/home/ProductGrid';
import RecommendedProducts from '../components/home/RecommendedProducts';

// Componentes específicos del producto
import FavoriteButton from '../components/product/FavoriteButton';
import ProductDescription from '../components/product/ProductDescription';

const HomePage = () => {
  // Estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState('bestsellers');
  
  // Datos para la primera fila de juegos destacados
  const featuredTopGames = [
    {
      id: 1,
      name: "EA SPORTS FC 25",
      description: "EA Sports FC 25 es un videojuego de fútbol, el segundo título de la publicación EA Sports FC después de la finalización de la serie EA Sports FIFA y la posterior renuncia a los derechos de marca de FIFA, popularmente como FIFA.",
      price: 74.99,
      platform: "playstation",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 2,
      name: "The Last of Us Part II",
      description: "The Last of Us Part II es un videojuego de terror de acción y aventura de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment.",
      price: 42.99,
      platform: "playstation",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 3,
      name: "Halo: The Master Chief Collection",
      description: "Halo: The Master Chief Collection es una recopilación de videojuegos de disparos en primera persona de la saga Halo para la consola Xbox One y PC.",
      price: 19.42,
      platform: "xbox",
      rating: 5,
      image: "/api/placeholder/300/400"
    }
  ];

  // Datos para la segunda fila de juegos destacados
  const featuredBottomGames = [
    {
      id: 4,
      name: "Super Mario Bros. Wonder",
      description: "Super Mario Bros. Wonder es un videojuego de plataformas de 2023 desarrollado y publicado por Nintendo para Nintendo Switch.",
      price: 45.86,
      platform: "switch",
      status: "AGOTADO",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 5,
      name: "Helldivers 2",
      description: "Helldivers 2 es un videojuego de disparos cooperativo en tercera persona desarrollado por Arrowhead Game Studios.",
      price: 36.69,
      platform: "playstation",
      status: "DISPONIBLE",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 6,
      name: "God of War Ragnarök",
      description: "God of War Ragnarök es un juego de aventura y acción en el cual los jugadores asumen el papel de Kratos y su hijo.",
      price: 49.99,
      platform: "playstation",
      status: "PRÓXIMAMENTE",
      rating: 5,
      image: "/api/placeholder/300/400"
    }
  ];

  // Datos para la sección PlayStation
  const playstationGames = [
    {
      id: 7,
      name: "The Last of Us Complete: Collector's Edition",
      price: 119.99,
      platform: "playstation",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 8,
      name: "Astro Bot",
      price: 59.99,
      platform: "playstation",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 9,
      name: "Elden Ring",
      price: 47.99,
      platform: "playstation",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 10,
      name: "Marvel's Spider-Man 2",
      price: 69.99,
      platform: "playstation",
      rating: 5,
      image: "/api/placeholder/300/400",
      textColor: "#000000"
    }
  ];

  // Datos para la sección Xbox
  const xboxGames = [
    {
      id: 11,
      name: "Monster Hunter Wilds",
      price: 52.49,
      platform: "xbox",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 12,
      name: "The Witcher 3: Wild Hunt",
      price: 29.99,
      platform: "xbox",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 13,
      name: "Red Dead Redemption 2",
      price: 59.99,
      platform: "xbox",
      rating: 5,
      image: "/api/placeholder/300/400"
    }
  ];

  // Datos para la sección Nintendo Switch
  const switchGames = [
    {
      id: 14,
      name: "New Super Mario Bros. U Deluxe",
      price: 59.99,
      platform: "switch",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 15,
      name: "Super Smash Bros. Ultimate",
      price: 59.99,
      platform: "switch",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 16,
      name: "Blasphemous",
      price: 24.99,
      platform: "switch",
      rating: 4,
      image: "/api/placeholder/300/400"
    },
    {
      id: 17,
      name: "Hollow Knight",
      price: 15.00,
      platform: "switch",
      rating: 5,
      image: "/api/placeholder/300/400"
    }
  ];

  // Funciones para manejar interacciones
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleSearch = (searchTerm) => {
    console.log(`Buscando: ${searchTerm}`);
  };

  const handleAddToCart = (product) => {
    console.log(`Añadir al carrito: ${product.name}`);
  };

  const handleViewDetails = (productId) => {
    console.log(`Ver detalles del producto: ${productId}`);
  };

  const handleToggleFavorite = (productId) => {
    console.log(`Marcar/desmarcar favorito: ${productId}`);
  };

  const handleNavigateHome = () => {
    console.log('Navegar a Home');
  };

  const handleNavigateToCart = () => {
    console.log('Navegar al carrito');
  };

  const handleNavigateToAbout = () => {
    console.log('Navegar a Acerca de');
  };

  // Componente para mostrar un juego destacado
  const FeaturedGameCard = ({ game }) => (
    <div className="featured-game-card" style={{
      display: 'flex',
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      height: '280px'
    }}>
      <div className="game-image" style={{ width: '35%', backgroundColor: '#e0e0e0' }}>
        <div style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#000000',
          fontSize: '14px'
        }}>
          {game.name}
        </div>
      </div>
      <div className="game-info" style={{ 
        flex: 1, 
        padding: '20px', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{game.name}</h3>
          
          <div style={{ marginBottom: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Badge 
              text={`Para ${game.platform === 'playstation' ? 'PlayStation' : 
                    game.platform === 'xbox' ? 'Xbox' : 
                    game.platform === 'switch' ? 'Nintendo Switch' : game.platform}`} 
              type="platform" 
            />
            
            {game.status && (
              <Badge text={game.status} type={game.status.toLowerCase()} />
            )}
          </div>
          
          <p style={{ 
            fontSize: '14px', 
            color: '#666', 
            marginBottom: '10px',
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {game.description}
          </p>
          
          <div style={{ marginBottom: '10px' }}>
            <Rating rating={game.rating} maxRating={5} />
          </div>
        </div>
        
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '22px', marginBottom: '15px', color: '#333' }}>
            ${game.price.toFixed(2)} USD
          </div>
          
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Button 
              variant="primary" 
              onClick={() => handleViewDetails(game.id)}
              style={{ flex: 1 }}
            >
              Ver detalle
            </Button>
            
            <Button 
              variant="secondary" 
              onClick={() => handleAddToCart(game)}
              style={{ flex: 1 }}
            >
              Agregar al carrito
            </Button>
            
            <FavoriteButton 
              productId={game.id} 
              isFavorite={false} 
              onToggleFavorite={handleToggleFavorite} 
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="home-page" style={{ 
      backgroundColor: '#f5f5f5', 
      minHeight: '100vh',
      width: '100%'
    }}>
      {/* Header con logo y barra de búsqueda */}
      <Header 
        logo="/api/placeholder/150/50" 
        onNavigateHome={handleNavigateHome}
        onNavigateToCart={handleNavigateToCart}
        cartItemCount={0}
      >
        <SearchBar 
          placeholder="Search" 
          onSearch={handleSearch}
        />
      </Header>

      {/* Navegación y filtros - CENTRADO */}
      <div className="navigation-container" style={{ 
        backgroundColor: '#999', 
        padding: '10px 0',
        width: '100%'
      }}>
        <div style={{ 
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px'
        }}>
          <FilterButtons 
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            filters={[
              { key: 'bestsellers', label: 'MÁS VENDIDOS' },
              { key: 'playstation', label: 'PLAYSTATION' },
              { key: 'xbox', label: 'XBOX' },
              { key: 'switch', label: 'SWITCH' }
            ]}
          />
        </div>
      </div>

      {/* Contenido principal */}
      <main style={{ 
        width: '100vw',
        padding: '30px 40px',
        boxSizing: 'border-box'
        }}>
        {/* Banner principal */}
        {/* Juegos destacados en grid 2x3 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {[...featuredTopGames, ...featuredBottomGames].map(game => (
            <FeaturedGameCard key={game.id} game={game} />
          ))}
        </div>

        {/* Separador */}
        <hr style={{ margin: '40px 0', border: 'none', borderTop: '2px solid #e0e0e0' }} />

        {/* Sección PlayStation */}
        <section className="playstation-section" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '25px', color: '#000000' }}>
            Los mejores de PlayStation
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {playstationGames.map(game => (
              <ProductCard 
                key={game.id}
                product={game}
                onAddToCart={() => handleAddToCart(game)}
                onViewDetails={() => handleViewDetails(game.id)}
                onToggleFavorite={() => handleToggleFavorite(game.id)}
                isFavorite={false}
                style={{ color: game.id === 10 ? "#000000" : "inherit" }} 
              />
            ))}
          </div>
        </section>

        {/* Separador */}
        <hr style={{ margin: '40px 0', border: 'none', borderTop: '2px solidrgb(0, 0, 0)' }} />

        {/* Sección Xbox */}
        <section className="xbox-section" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '25px', color: '#333' }}>
            Top 3 de Xbox
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '20px',
            maxWidth: '1000px'
          }}>
            {xboxGames.map(game => (
              <ProductCard 
                key={game.id}
                product={game}
                onAddToCart={() => handleAddToCart(game)}
                onViewDetails={() => handleViewDetails(game.id)}
                onToggleFavorite={() => handleToggleFavorite(game.id)}
                isFavorite={false}
              />
            ))}
          </div>
        </section>

        {/* Separador */}
        <hr style={{ margin: '40px 0', border: 'none', borderTop: '2px solid #e0e0e0' }} />

        {/* Sección Nintendo Switch */}
        <section className="switch-section" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '25px', color: '#333' }}>
            Los más populares de Nintendo Switch
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {switchGames.map(game => (
              <ProductCard 
                key={game.id}
                product={game}
                onAddToCart={() => handleAddToCart(game)}
                onViewDetails={() => handleViewDetails(game.id)}
                onToggleFavorite={() => handleToggleFavorite(game.id)}
                isFavorite={false}
              />
            ))}
          </div>
        </section>
        
        {/* Sección de productos recomendados */}
        <RecommendedProducts 
          products={featuredTopGames.slice(0, 2)}
          onAddToCart={handleAddToCart}
          onViewDetails={handleViewDetails}
          title="Recomendados para ti"
        />
      </main>

      {/* Footer */}
      <Footer 
        onNavigateToAbout={handleNavigateToAbout}
        logo="/api/placeholder/150/50"
        companyInfo="Spawn Point - La mejor tienda de videojuegos en Guatemala. © 2025"
      />
    </div>
  );
};

export default HomePage;