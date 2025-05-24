import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          BICIGO
        </Link>
        <div className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre Nosotros</Link>
          <Link to="/contact">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
