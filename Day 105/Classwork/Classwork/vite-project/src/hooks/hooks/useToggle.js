import { useState } from "react";

// useToggle კაუჭი ერთი boolean მდგომარეობისთვის
export function useToggle(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue);

  function switchToggle() {
    setToggle(prev => !prev); // თუ true → false, თუ false → true
  }

  return { toggle, switchToggle };
}
