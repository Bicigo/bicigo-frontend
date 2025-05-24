import React from 'react';
import ProductCard from '../features/products/ProductCard';
import { getFeaturedProducts } from '../services/products';

const Products: React.FC = () => {
  const products = getFeaturedProducts();

  return (
    <div className="products-page">
      <h2>Todos los productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
