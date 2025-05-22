//Componente: Footer
//Descripción: Este componente representa el pie de página de la aplicación. Contiene información de contacto, derechos de autor y el botón para acceder a la página "¿Quieres saber más sobre nosotros?".
import React from 'react';
import Button from '../ui/Button';
const Footer = ({ onNavigateToAbout, logo, companyInfo }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Spawn Point" />
        <p>{companyInfo}</p>
        <Button onClick={onNavigateToAbout}>
          ¿Quieres saber más sobre nosotros?
        </Button>
      </div>
    </footer>
  );
};
export default Footer;