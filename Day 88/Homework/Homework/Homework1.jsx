export default function App() {
  const age = 20;

  return (
    <div>
      <h1>{age >= 18 && "You are an adult"}</h1>
    </div>
  );
}
