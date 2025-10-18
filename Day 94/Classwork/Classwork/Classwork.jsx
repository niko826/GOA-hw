import { useState } from "react";

export default function Products() {

  const [products, setProducts] = useState(["Product 1", "Product 2"]);

  const handleAddProduct = () => {
    
    const nextNumber = products.length + 1;
    const newProduct = `Product ${nextNumber}`;

    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}