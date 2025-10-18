export default function App() {
  const friends = ["Anna", "Giorgi", "Nino", "Levan", "Mariam"];

  return (
    <ul>
      {friends.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
