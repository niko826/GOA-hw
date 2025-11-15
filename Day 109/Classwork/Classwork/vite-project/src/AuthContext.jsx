import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(() => {
        const saved = localStorage.getItem('registeredUsers');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('registeredUsers', JSON.stringify(users));
    }, [users]);


    const register = (formData) => {
        const { email, password, name } = formData;

        const userExists = users.some((u) => u.email === email);

        if (userExists) {
            return { success: false, message: 'Users Email already exists' };
        }

 
        const newUser = {
            id: Date.now().toString(), 
            name,
            email,
            password, 
            createdAt: new Date().toISOString(),
        };

        setUsers((prev) => [...prev, newUser]);

        return { success: true, message: 'Registerd succsefully' };
    };


    const value = {
        users,
        register,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};