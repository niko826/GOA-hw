import React, { useState } from 'react';

export default function Form({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;
    onAddProduct({ ...formData, id: Date.now() });
    setFormData({ name: '', description: '', price: '', quantity: 1 });
  };

  const handleReset = () => {
    setFormData({ name: '', description: '', price: '', quantity: 1 });
  };

  return (
    <section>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: '10px' }}>
          Reset
        </button>
      </form>
    </section>
  );
}
