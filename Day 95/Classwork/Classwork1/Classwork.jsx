import React, { useState } from 'react';

function NameForm() {
  // ვქმნით ორ ცალკე მდგომარეობას სახელისთვის და გვარისთვის
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  // მოვლენის მმართველი ფუნქცია name input-ისთვის
  const handleNameChange = (e) => {
    setName(e.target.value); // name მდგომარეობას ვანახლებთ ინფუთის მნიშვნელობით
  };

  // მოვლენის მმართველი ფუნქცია lastname input-ისთვის
  const handleLastnameChange = (e) => {
    setLastname(e.target.value); // lastname მდგომარეობას ვანახლებთ ინფუთის მნიშვნელობით
  };

  return (
    <div>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Lastname:</label>
          <input type="text" value={lastname} onChange={handleLastnameChange} />
        </div>
      </form>

      {/* პარაგრაფში გამოვაჩინოთ name და lastname */}
      <p>Name: {name}</p>
      <p>Lastname: {lastname}</p>
    </div>
  );
}

export default NameForm;
