import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
    setCurrentUser: () => {},
    setToken: () => {},
});

export default function ContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [token, _setToken] = useState(123);

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    };

    return (
        <StateContext.Provider value={{ currentUser, setCurrentUser, token, setToken }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
