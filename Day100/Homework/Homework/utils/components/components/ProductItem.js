import React from 'react';

export default function ProductItem({ product, onDelete, onIncrease, onDecrease }) {
  return (
    <li>
      <b>{product.name}</b> - ${product.price} <br />
      {product.description && <small>{product.description}</small>} <br />
      Quantity: {product.quantity}
      <button onClick={() => onIncrease(product.id)}>+</button>
      <button onClick={() => onDecrease(product.id)}>-</button>
      <button onClick={onDelete} style={{ marginLeft: '10px' }}>Delete</button>
    </li>
  );
}
