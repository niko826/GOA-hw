import { useState, useEffect } from "react";

export default function ProductsWithPromo() {
  const [products, setProducts] = useState([]); // API მონაცემები
  const [loading, setLoading] = useState(true);
  const [promoInput, setPromoInput] = useState(""); // მომხმარებლის შემოტანილი promo
  const [appliedPromo, setAppliedPromo] = useState(false); // promo-ის გამოყენების სიგნალი

  const promoCodes = ["DISCOUNT50", "SALE50"];

  // API-ის დატვირთვა mount-ის დროს
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        // თითოეულ პროდუქტს ვამატებთ "quantity" = 1
        const productsWithQuantity = data.map(product => ({
          ...product,
          quantity: 1
        }));
        setProducts(productsWithQuantity);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // რაოდენობის ცვლილება
  const changeQuantity = (id, delta) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) } // მინიმუმ 1
          : product
      )
    );
  };

  // საბოლოო ფასი
  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  // Promo code-ის გამოყენება
  const applyPromo = () => {
    if (promoCodes.includes(promoInput.toUpperCase())) {
      setAppliedPromo(true);
      alert("Promo applied! 50% off");
    } else {
      alert("Invalid Promo Code");
      setAppliedPromo(false);
    }
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <b>{product.title}</b> - ${product.price.toFixed(2)} <br />
            Quantity: {product.quantity} &nbsp;
            <button onClick={() => changeQuantity(product.id, 1)}>+</button>
            <button onClick={() => changeQuantity(product.id, -1)}>-</button>
          </li>
        ))}
      </ul>

      <h3>
        Total Quantity:{" "}
        {products.reduce((acc, product) => acc + product.quantity, 0)}
      </h3>
      <h3>
        Total Price: $
        {appliedPromo ? (totalPrice * 0.5).toFixed(2) : totalPrice.toFixed(2)}
      </h3>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter Promo Code"
          value={promoInput}
          onChange={e => setPromoInput(e.target.value)}
        />
        <button onClick={applyPromo} style={{ marginLeft: "10px" }}>
          Apply Promo
        </button>
      </div>
    </div>
  );
}
