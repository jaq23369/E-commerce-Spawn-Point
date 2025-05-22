//Componente: Loader
//Descripción: Este componente muestra un indicador de carga visual. Se utiliza durante operaciones asíncronas como la obtención de datos de la API.
import React from 'react';
const Loader = ({ size, text, className }) => {
  return (
    <div className={`loader-container ${className || ''}`}>
      <div className={`loader loader-${size || 'medium'}`}>
        <div className="loader-spinner"></div>
      </div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};
export default Loader;