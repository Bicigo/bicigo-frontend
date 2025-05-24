import React from 'react';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home: React.FC = () => {
  const carouselImages = [
    'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Mountain Bike Pro',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'City Cruiser',
      price: 599.99,
      image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Electric Bike',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <img 
            src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Bicicleta de montaña" 
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">Descubrí tu próxima bicicleta</h1>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <Carousel products={featuredProducts} />
      </section>

      <section className="categories">
        <h2>Categorías</h2>
        <div className="category-grid">
          <div className="category-card">
            <h3>Bicicletas de Montaña</h3>
            <p>Explora senderos y terrenos difíciles</p>
          </div>
          <div className="category-card">
            <h3>Bicicletas de Ruta</h3>
            <p>Perfectas para carreras y largas distancias</p>
          </div>
          <div className="category-card">
            <h3>Bicicletas Urbanas</h3>
            <p>Ideales para la ciudad</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
