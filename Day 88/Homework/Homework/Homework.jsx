export default function App() {
  const age = 17;

  return (
    <h1>
      {age >= 18 ? "You are an adult" : "You are not an adult"}
    </h1>
  );
}
