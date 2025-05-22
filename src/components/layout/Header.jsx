//Componente: Header
//Descripción: Este componente representa la cabecera de la aplicación. Contiene el logo de Spawn Point, la barra de búsqueda, la navegación principal y el icono del carrito de compras.
import React from 'react';
const Header = ({ logo, onNavigateHome, onNavigateToCart, cartItemCount, children }) => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Spawn Point" onClick={onNavigateHome} />
        {children}
        <div className="cart-icon" onClick={onNavigateToCart}>
          🛒
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </div>
      </div>
    </header>
  );
};
export default Header;