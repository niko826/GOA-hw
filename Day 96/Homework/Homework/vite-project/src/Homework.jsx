import { useState, useEffect } from "react";

export default function LuckyCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 7) {
      alert("Lucky number!");
    }
  }, [count]); 

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Increase Count</button>
    </div>
  );
}
