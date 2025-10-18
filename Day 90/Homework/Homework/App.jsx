import React from 'react';
import User from './User';

function App() {
  return (
    <div>
      <h1>Main page</h1>
      <User name="Ana" age={25} email="ana@example.com" />
      <User name="Luka" age={30} email="luka@example.com" />
    </div>
  );
}

export default App;
