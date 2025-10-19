import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    onAddProduct({ id: Date.now(), name, price });
    setName('');
    setPrice('');
  };

  return (
    <section>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Product name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <button type="submit">Add Product</button>
      </form>
    </section>
  );
}

function ProductList({ products, onDeleteProduct }) {
  return (
    <section>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <ProductItem 
              key={product.id} 
              product={product} 
              onDelete={() => onDeleteProduct(product.id)} 
            />
          ))}
        </ul>
      )}
    </section>
  );
}

function ProductItem({ product, onDelete }) {
  return (
    <li>
      {product.name} - ${product.price}
      <button onClick={onDelete} style={{ marginLeft: '10px' }}>Delete</button>
    </li>
  );
}

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <main>
      <ProductForm onAddProduct={addProduct} />
      <ProductList products={products} onDeleteProduct={deleteProduct} />
    </main>
  );
}

export default App;
