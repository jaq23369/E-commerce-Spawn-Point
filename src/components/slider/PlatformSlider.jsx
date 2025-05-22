//Componente: PlatformSlider
//Descripción: Este componente es un contenedor para mostrar una sección de productos filtrados por plataforma. Organiza un slider horizontal con juegos de una plataforma específica (PlayStation, Xbox, Switch).
import React from 'react';
import Button from '../ui/Button';

const PlatformSlider = ({ title, products, onNext, onPrevious, canGoNext, canGoPrevious, children }) => {
  return (
    <div className="platform-slider">
      <h2 className="slider-title">{title}</h2>
      <div className="slider-container">
        <Button 
          className="slider-btn prev" 
          onClick={onPrevious}
          disabled={!canGoPrevious}
        >
          ‹
        </Button>
        <div className="slider-content">
          {children}
        </div>
        <Button 
          className="slider-btn next" 
          onClick={onNext}
          disabled={!canGoNext}
        >
          ›
        </Button>
      </div>
    </div>
  );
};
export default PlatformSlider;