import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-contact">
        <p>Contacto:</p>
        <p>+54 9 263 462-4708</p>
        <p>email@ejemplo.com</p>
      </div>
      <div className="footer-copyright">
        <p>© 2024 Bicigo</p>
      </div>
    </div>
  </footer>
);

export default Footer;
