import React from 'react';
import type { Product } from '../../types/product';


interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price.toLocaleString()}</p>
    <button>Ver más</button>
  </div>
);

export default ProductCard;
