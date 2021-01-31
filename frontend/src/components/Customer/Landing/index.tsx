import React from 'react';
import { useAuth } from '../../../providers/AuthProvider';

interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
    const { currentUser }: any = useAuth();
    return <div>{JSON.stringify(currentUser)}</div>;
};
