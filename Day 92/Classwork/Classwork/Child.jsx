import React from "react";
import GrandChild from "./GrandChild";

export default function Child({ message }) {
  return <GrandChild message={message} />;
}
