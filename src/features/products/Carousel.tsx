import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../../types/product';

interface Props {
  products: Product[];
  maxVisible?: number;
}

const Carousel: React.FC<Props> = ({ products, maxVisible = 4 }) => {
  const visible = products.slice(0, maxVisible);
  return (
    <div className="carousel">
      {visible.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Carousel;
