//Componente MissionSection
//Descripción:  Este componente muestra la misión de Spawn Point. Detalla el compromiso de la empresa con proporcionar la mejor experiencia de compra de videojuegos en Guatemala.
import React from 'react';
const MissionSection = ({ mission, image }) => {
  return (
    <section className="mission-section">
      <h2>Misión</h2>
      <div className="mission-content">
        <img src={image} alt="Misión" />
        <p>{mission}</p>
      </div>
    </section>
  );
};
export default MissionSection;