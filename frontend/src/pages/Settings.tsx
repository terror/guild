import React from 'react';

import { useAuth } from '../providers/AuthProvider';

import { Navbar } from '../components/Navbar';

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = () => {
    const { currentUser }: any = useAuth();
    return (
        <>
            <Navbar />
            <div>Settings! {currentUser.id}</div>
        </>
    );
};
