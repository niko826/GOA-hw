import React from 'react';

function User({ isLoggedIn }) {
  const messageStyle = {
    padding: '10px',
    fontSize: '18px',
    color: isLoggedIn ? 'green' : 'red',
    fontWeight: 'bold'
  };

  return (
    <div style={messageStyle}>
      {isLoggedIn ? 'Hello User' : 'Please log in to your account'}
    </div>
  );
}


function Nav({ isLoggedIn }) {
  return (
    <nav>
      <User isLoggedIn={isLoggedIn} />
    </nav>
  );
}

function Header({ isLoggedIn }) {
  return (
    <header>
      <h1>My App</h1>
      <Nav isLoggedIn={isLoggedIn} />
    </header>
  );
}

function Child({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}


function Parent({ handleClick }) {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child handleClick={handleClick} />
    </div>
  );
}

function App() {
  const handleClick = () => {
    alert('Button clicked from Child component!');
  };

  const isLoggedIn = false; 

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <Header isLoggedIn={isLoggedIn} />

      <hr />
      <Parent handleClick={handleClick} />
    </div>
  );
}

export default App;
