import React from "react";
import { useCounter } from "./hooks/useCounter";

function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
