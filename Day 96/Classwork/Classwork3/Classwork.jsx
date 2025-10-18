import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    if (name !== '') 
      alert(`Hello ${name}`);
    }
  , [name]); 
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;


  // useEffect არის React-ის ჰუკი, რომელიც საშუალებას გვაძლევს განვახორციელოთ გვერდითი ეფექტები