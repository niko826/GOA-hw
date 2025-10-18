import React, { useState } from 'react';

function FormWithObjectState() {
  // ერთი საერთო მდგომარეობა ყველა ინფუთისთვის
  const [formState, setFormState] = useState({});

  // საერთო ჰენდლერი ყველა ინფუთისთვის
  const handleChange = (e) => {
    const { name, value } = e.target;

    // განვაახლებთ formState-ს — ვამატებთ ახალ ველს ან ვაახლებთ არსებულს
    setFormState(prevState => ({
      ...prevState,        // წინამდებარე მნიშვნელობების დატოვება
      [name]: value        // ახალი მნიშვნელობის დამატება ან განახლება
    }));
  };

  return (
    <div>
      <form>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name"          
            value={formState.name || ''} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Lastname:</label>
          <input 
            type="text" 
            name="lastname"      
            value={formState.lastname || ''} 
            onChange={handleChange} 
          />
        </div>
      </form>

      {/* ვაჩვენოთ შეყვანილი მნიშვნელობები */}
      <p>Name: {formState.name}</p>
      <p>Lastname: {formState.lastname}</p>
    </div>
  );
}

export default FormWithObjectState;
