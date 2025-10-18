import { useState } from "react";

export default function UserObject() {
  const initialUser = { name: "Your name", password: "123" };
  const [user, setUser] = useState(initialUser);

  const changeName = () => {
    setUser(prev => ({ ...prev, name: "Nika" })); 
  };

  const resetUser = () => {
    setUser(initialUser); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>User:</h2>
      <p>Name: {user.name}</p>
      <p>Password: {user.password}</p>
      <button onClick={changeName}>Change Name</button>
      <button onClick={resetUser} style={{ marginLeft: "10px" }}>Reset User</button>
    </div>
  );
}
