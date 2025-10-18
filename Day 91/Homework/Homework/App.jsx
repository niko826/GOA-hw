import React from 'react';
import './App.css';

function Header({ title }) {
  return <header className="header">{title}</header>;
}

Header.defaultProps = {
  title: 'Welcome to React App-ში!'
};

function Content({ text }) {
  return <main className="content">{text}</main>;
}

function Footer({ year }) {
  return <footer className="footer">© {year}</footer>;
}

Footer.defaultProps = {
  year: new Date().getFullYear()
};


function App() {
  return (
    <div className="container">
      <Header />
      <Content text="This is content, Which is styled in external CSS" />
      <Footer year={2025} />
    </div>
  );
}

export default App;
