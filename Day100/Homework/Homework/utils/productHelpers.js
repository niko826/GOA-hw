export const increaseQuantity = (products, id) => {
  return products.map(p =>
    p.id === id ? { ...p, quantity: p.quantity + 1 } : p
  );
};

export const decreaseQuantity = (products, id) => {
  return products.map(p =>
    p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
  );
};
