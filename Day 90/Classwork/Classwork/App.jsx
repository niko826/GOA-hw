import React from 'react';
import './App.css';
import User from './User';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>Main page</h1>

      <User name="giorgi" age={30} email="giorgi@mail.com" />

      <Greeting name="mari" />
      <Greeting />
    </div>
  );
}

export default App;
