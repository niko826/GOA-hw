import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: ''
  });


  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.name || !formData.price || !formData.quantity) return;


    const newProduct = {
      id: Date.now(),
      ...formData
    };

    setProducts((prev) => [...prev, newProduct]);


    setFormData({
      name: '',
      description: '',
      price: '',
      quantity: ''
    });
  };

  return (
    <main>
      <section>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Add Product</button>
        </form>
      </section>

      <section>
        <h2>Product List</h2>
        {products.length === 0 ? (
          <p>No products added.</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - {product.description} | ${product.price} | Qty: {product.quantity}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
