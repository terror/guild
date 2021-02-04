import React from 'react';
import { useContext, createContext, useState, useEffect } from 'react';
import { baseURL, api } from '../ts/api';

interface AuthProviderProps {}

const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider: React.FC<AuthProviderProps> = ({
    children,
}: any) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = () => {
        window.open(`${baseURL}/auth/login`, '_self');
    };

    const logout = () => {
        window.open(`${baseURL}/auth/logout`, '_self');
        localStorage.removeItem('user');
    };

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setCurrentUser(JSON.parse(localStorage.getItem('user')!));
        } else {
            api.get('/auth/login/success')
                .then((res) => {
                    setCurrentUser(res.data.user);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        setLoading(false);
    }, []);

    const value = {
        currentUser,
        login,
        logout,
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
