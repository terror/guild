import React from 'react';

import { Heading, Icon, Stack, StackItem } from '@chakra-ui/react';
import { AiOutlineFire } from 'react-icons/ai';

interface HotRoomsProps {}

export const HotRooms: React.FC<HotRoomsProps> = () => {
    return (
        <Stack>
            <StackItem>
                <Heading fontStyle="italic">
                    Hot Rooms
                    <Icon mb={1} as={AiOutlineFire} />
                </Heading>
            </StackItem>
        </Stack>
    );
};
