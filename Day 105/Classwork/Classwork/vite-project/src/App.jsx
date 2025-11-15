import React from "react";
import { useToggle } from "./hooks/useToggle";
import { useForm } from "./hooks/useForm";

function App() {
  const { toggle, switchToggle } = useToggle();
  const { data, handleChange } = useForm();

  return (
    <div style={{ padding: "20px" }}>
      {/* ფორმის ინფუთები */}
      <input
        name="username"
        value={data.username || ""}
        onChange={handleChange}
        placeholder="Username"
        style={{ marginRight: "10px" }}
      />
      <input
        name="email"
        value={data.email || ""}
        onChange={handleChange}
        placeholder="Email"
      />

      <br /><br />

      {/* toggle ღილაკი */}
      <button
        onClick={switchToggle}
        style={{
          backgroundColor: toggle ? "black" : "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {toggle ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default App;
