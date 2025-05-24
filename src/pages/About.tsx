import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>Sobre Nosotros</h1>
      <div className="about-content">
        <p>
          BICIGO es tu tienda especializada en bicicletas y accesorios. Nos dedicamos a proporcionar
          productos de alta calidad y un servicio excepcional a todos los amantes del ciclismo.
        </p>
        <p>
          Nuestra misión es promover el uso de la bicicleta como medio de transporte sostenible
          y como una excelente forma de mantener un estilo de vida saludable.
        </p>
      </div>
    </div>
  );
};

export default About; 