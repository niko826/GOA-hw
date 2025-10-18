import React from 'react';

function User({ name, age, email }) {
  return (
    <div>
      <h2>Users information:</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default User;
