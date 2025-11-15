import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // რეგისტრაცია (signUp)
  const signUp = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      alert('User already exists');
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('auth_user', JSON.stringify(newUser));
    setUser(newUser);
  };

  // შესვლა (login)
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (existingUser) {
      localStorage.setItem('auth_user', JSON.stringify(existingUser));
      setUser(existingUser);
    } else {
      alert('Invalid credentials');
    }
  };

 
  // გასვლა (logout)
  const logout = () => {
    localStorage.removeItem('auth_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// AuthProvider component
// ==============================
// კომენტარები (ქართულად):
// ეს კონტექსტი გვაძლევს საშუალებას გავაზიაროთ user ინფორმაცია და
// signUp, login, logout ფუნქციები მთელ აპლიკაციაში.
// რეალურ პროექტში მონაცემები მიეწოდება სერვერიდან, აქ ვიყენებთ localStorage-ს.
