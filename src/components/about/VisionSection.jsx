//Componente MissionSection
//Descripción: Este componente muestra la visión de Spawn Point. Presenta las aspiraciones y objetivos futuros de la empresa.
import React from 'react';
const VisionSection = ({ vision, image }) => {
  return (
    <section className="vision-section">
      <h2>Visión</h2>
      <div className="vision-content">
        <img src={image} alt="Visión" />
        <p>{vision}</p>
      </div>
    </section>
  );
};
export default VisionSection;