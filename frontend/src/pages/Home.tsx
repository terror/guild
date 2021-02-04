import React from 'react';
import { Center, Divider } from '@chakra-ui/react';

import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Features } from '../components/Home/Features';
import { Landing } from '../components/Customer/Landing';

import { useAuth } from '../providers/AuthProvider';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
    const { currentUser }: any = useAuth();
    return (
        <>
            <Navbar />
            {currentUser ? (
                <Landing />
            ) : (
                <div>
                    <Center>
                        <Header />
                    </Center>
                    <Divider w="85%" m="auto" />
                    <Features />
                </div>
            )}
        </>
    );
};
