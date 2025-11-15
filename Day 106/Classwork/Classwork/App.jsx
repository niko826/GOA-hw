import React, { createContext, useContext } from "react";

// 1. კონტექსტის შექმნა
const MyContext = createContext();

function Child() {
  // 2. კონტექსტის გამოყენება
  const value = useContext(MyContext);

  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid black" }}>
      {/* კონტექსტის მნიშვნელობის ჩვენება */}
      <p>Value from context: {value}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Provider–ში value = "Hello" */}
      <MyContext.Provider value="Hello">
        <Child />
      </MyContext.Provider>

      {/* Provider–ში value = "Bye" */}
      <MyContext.Provider value="Bye">
        <Child />
      </MyContext.Provider>
    </div>
  );
}

export default App;

/* 
💡 კომენტარები კონტექსტზე:
- Context გვაძლევს საშუალებას გავაზიარო მონაცემები კომპონენტებს შორის, რომლებიც პირდაპირ არ არიან დაკავშირებული მშობელ-შვილობით.
- Provider არის კომპონენტი, რომელიც ინახავს მონაცემებს და გადასცემს შვილებს.
- useContext hook-ი იჭერს იმ Provider-ის მნიშვნელობას, რომელიც ახლოსაა კომპონენტთან.
- ეს გამორიცხავს prop-ების ლაბირინთში გადასაცემის საჭიროებას (prop drilling).
*/
