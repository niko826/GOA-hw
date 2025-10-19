import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ products, onDelete, onIncrease, onDecrease }) {
  if (products.length === 0) return <p>No products added yet.</p>;

  return (
    <section>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={() => onDelete(product.id)}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        ))}
      </ul>
    </section>
  );
}
