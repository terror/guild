import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

export const PrivateRoute = ({ component: Node, ...rest }: any) => {
    const { currentUser }: any = useAuth();
    return (
        <Route
            {...rest}
            render={(props) => {
                return currentUser ? (
                    <Node {...props} />
                ) : (
                    <Redirect to="/login" />
                );
            }}
        />
    );
};
