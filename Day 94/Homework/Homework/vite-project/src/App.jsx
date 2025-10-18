import { useState } from "react";

export default function CounterGood() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  const handleDelete = () => {
    setCount(0); // წაშლის ან განულების ფუნქცია
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
        Delete / Reset
      </button>
    </div>
  );
}
