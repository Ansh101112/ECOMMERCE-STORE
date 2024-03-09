import { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        const data = localStorage.getItem('auth');
        return data ? JSON.parse(data) : { user: null };
    });

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth]);

    return (
        <authContext.Provider value={[auth, setAuth]}>
            {children}
        </authContext.Provider>
    );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
