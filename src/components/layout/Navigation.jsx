// Navigation.jsx
//Componente: Navigation
 
//Descripción: Este componente contiene los enlaces de navegación principal de la aplicación. Incluye los botones para filtrar por plataforma y acceder a diferentes secciones.
 
import React from 'react';
import Button from '../ui/Button';
const Navigation = ({ activeRoute, onNavigate }) => {
  const routes = [
    { key: 'bestsellers', label: 'MÁS VENDIDOS' },
    { key: 'playstation', label: 'PLAYSTATION' },
    { key: 'xbox', label: 'XBOX' },
    { key: 'switch', label: 'SWITCH' }
  ];
  return (
    <nav className="navigation">
      {routes.map(route => (
        <Button 
          key={route.key}
          onClick={() => onNavigate(route.key)}
          variant={activeRoute === route.key ? 'active' : 'secondary'}
        >
          {route.label}
        </Button>
      ))}
    </nav>
  );
};
export default Navigation;