import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <button>Ver más</button>
  </div>
);

export default ProductCard;
