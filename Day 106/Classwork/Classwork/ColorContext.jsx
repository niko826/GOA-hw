import React, { createContext, useState } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [color, setColor] = useState("#000000");

  // შემთხვევითი hex ფერის გენერაცია
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }
    return hex;
  };

  // handleClick ფუნქცია იცვლის ფერს შემთხვევითად
  const handleClick = () => {
    const newColor = randomColor();
    setColor(newColor);
  };

  // value ატრიბუტში გადასცემთ ობიექტს (color + handleClick)
  return (
    <ColorContext.Provider value={{ color, handleClick }}>
      {children}
    </ColorContext.Provider>
  );
}
