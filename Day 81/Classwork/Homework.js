fetch("https://fakestoreapi.com/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "New Product",
    price: 29.99,
    description: "This is a new product",
    image: "https://i.pravatar.cc",
    category: "electronics",
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log("Added product:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });