import React from 'react';

import { Chats } from './Chats';
import { Rooms } from './Rooms';
import { Social } from './Social';
import { Center } from '@chakra-ui/react';

interface FeaturesProps {}

export const Features: React.FC<FeaturesProps> = () => {
    return (
        <>
            <Rooms />
            <Chats />
            <Social />
            <Center mb={5}>
                <div>© 2021 Guild, Inc.</div>
            </Center>
        </>
    );
};
