import { useState } from "react";

// useForm კაუჭი ფორმების სამართავად
export function useForm() {
  // ჩვენი ფორმის მონაცემები ინახება state-ში
  // data = { name: "value", email: "value" } - ნებისმიერი ინფუთის დასაფიქსირებლად
  const [data, setData] = useState({});

  // handleChange ფუნქცია ინფუთების ცვლილების დასაფიქსირებლად
  function handleChange(event) {
    const { name, value } = event.target;

    // შევქმნით ახალ ობიექტს, რომელიც შლის ძველ მნიშვნელობებს
    // და ემატება/განაახლებს კონკრეტული ინფუთის მნიშვნელობას
    setData(prev => ({
      ...prev,    // ასლი ძველი მონაცემების
      [name]: value // ახალი ან განახლებული მნიშვნელობა ინფუთისთვის
    }));
  }

  return { data, handleChange };
}

/* 
- ხელოვნური კაუჭები (custom hooks) საშუალებას გვაძლევს გავაზიაროთ ფუნქციონალობა მრავალ კომპონენტში.
- ენკაპსულაცია (encapsulation) ნიშნავს მონაცემებისა და ფუნქციების "დამალვას" hook-ის შიგნით, 
  ისე რომ კომპონენტი გამოიყენებს მხოლოდ expose-სებულ ფუნქციებს/state-ს.
- წესები:
  1. Hook უნდა დაიწყებოდეს "use" სიტყვით.
  2. არ უნდა გამოიძახოთ loop-ში, condition-ში ან nested ფუნქციებში.
  3. უნდა იყენებდეს React-ის სხვა hooks-ებს წესიერად (useState, useEffect და ა.შ.)
*/
