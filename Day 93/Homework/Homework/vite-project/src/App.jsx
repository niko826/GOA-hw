import React, { useState } from "react";

function App() {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div style={{ textAlign: "center", marginLeft: "480px" }}>
      <h1>Click counter: {click}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;


//useState — ეს არის React-ის Hook (კაუჭი), რომელიც გაძლევს საშუალებას შექმნა მდგომარეობა (state) ფუნქციურ კომპონენტში.
//მისი მეშვეობით შეგიძლია შეინახო და შეცვალო მონაცემები, რომლებიც ცვლადია (მაგ. counter, input value და სხვ.).