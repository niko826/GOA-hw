import { useState, useEffect } from "react";

export default function Products() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(products => {
        setData(products); 
        setLoading(false); 
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []); 

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h2>Products:</h2>
      <ul>
        {data.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}



//useEffect არის React ჰუკი, რომელიც საშუალებას გვაძლევს გამოვასრულოთ გვერდითი ეფექტები (side effects) ფუნქციურ კომპონენტებში.