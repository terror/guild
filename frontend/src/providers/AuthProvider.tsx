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
    };

    useEffect(() => {
        api.get('/auth/login/success')
            .then((res) => {
                setCurrentUser(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            });
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
