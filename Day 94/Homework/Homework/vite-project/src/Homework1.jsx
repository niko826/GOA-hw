import { useState } from "react";

export default function FruitList() {
  const [fruits, setFruits] = useState([]); 

  const addOrange = () => {
    setFruits(prev => [...prev, "orange"]); 
  };

  const clearFruits = () => {
    setFruits([]); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Fruits:</h2>
      <p>{fruits.join(", ") || "No fruits yet"}</p>
      <button onClick={addOrange}>Add Orange</button>
      <button onClick={clearFruits} style={{ marginLeft: "10px" }}>Clear All</button>
    </div>
  );
}
