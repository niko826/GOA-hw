import React, { useState } from 'react';
import Form from './Form';
import ProductList from './ProductList';
import { increaseQuantity, decreaseQuantity } from '../utils/productHelpers';

export default function Products() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleIncrease = (id) => {
    setProducts(prev => increaseQuantity(prev, id));
  };

  const handleDecrease = (id) => {
    setProducts(prev => decreaseQuantity(prev, id));
  };

  return (
    <div>
      <Form onAddProduct={addProduct} />
      <ProductList
        products={products}
        onDelete={deleteProduct}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
}
