import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">BICIGO</div>
    <ul className="menu">
      <li><a href="/">Productos</a></li>
      <li><a href="/nosotros">Sobre Nosotros</a></li>
      <li><a href="/contacto">Contáctenos</a></li>
    </ul>
  </nav>
);

export default Navbar;
