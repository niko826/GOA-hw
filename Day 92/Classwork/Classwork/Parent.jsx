import React from "react";
import Child from "./Child";

export default function Parent({ message }) {
  return <Child message={message} />;
}
