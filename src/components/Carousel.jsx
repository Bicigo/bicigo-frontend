import React from 'react';
import ProductCard from './ProductCard';

const Carousel = ({ products, maxVisible = 4 }) => {
  const visibleProducts = products.slice(0, maxVisible);

  return (
    <div className="carousel">
      {visibleProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Carousel;
