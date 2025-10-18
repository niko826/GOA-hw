import { useState, useEffect } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("white");


  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Choose a color:</h2>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")} style={{ marginLeft: "10px" }}>Blue</button>
      <button onClick={() => setColor("pink")} style={{ marginLeft: "10px" }}>Pink</button>
      <button onClick={() => setColor("red")} style={{ marginLeft: "10px" }}>Red</button>
    </div>
  );
}
