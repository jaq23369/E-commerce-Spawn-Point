//Componente AboutSection
// * Descripción: Este componente muestra la sección principal de "¿Quiénes somos?" de Spawn Point. Presenta una introducción general a la tienda, su propósito y valores.
import React from 'react';
const AboutSection = ({ logo, companyInfo }) => {
  return (
    <section className="about-section">
      <div className="about-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="about-content">
        <h2>¿Quiénes somos?</h2>
        <p>{companyInfo}</p>
      </div>
    </section>
  );
};
export default AboutSection;