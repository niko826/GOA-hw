function App() {
  const friends = ["Nika", "Giorgi", "Ana", "Mariam", "Luka"];

  return (
    <div>
      <h1>ჩემი მეგობრები</h1>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li> //ეს აუცილებელია ბრაუზერმა რომ დაინახოს!
        ))}
      </ul>
    </div>
  );
}


export default App