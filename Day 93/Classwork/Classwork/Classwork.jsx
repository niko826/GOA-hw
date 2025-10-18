import React, { useState } from 'react';

function App() {
  // მდგომარეობის შექმნა: click = 0
  const [click, setClick] = useState(0);

  // ფუნქცია ღილაკზე დაწკაპებისთვის
  const handleClick = () => {
    setClick(click + 1); 
  };

  return (
    <div>
      <h1>Click count: {click}</h1>
      <button onClick={handleClick}>დClick</button>
    </div>
  );
}

export default App;



//useState არის React-ის კაუჭი (hook), რომელიც საშუალებას გაძლევს კომპონენტში შექმნა და მართო მდგომარეობა (state).