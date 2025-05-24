import React from 'react';
import './styles.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre BICIGO</h3>
          <p>Tu tienda especializada en bicicletas y accesorios. Ofrecemos la mejor calidad y servicio para todos los ciclistas.</p>
        </div>

        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@bicigo.com</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Dirección: Calle Principal 123, Ciudad</p>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BICIGO. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 