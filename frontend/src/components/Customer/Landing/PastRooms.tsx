import React from 'react';

import { Heading, Icon, Stack, StackItem } from '@chakra-ui/react';
import { BsClockHistory } from 'react-icons/bs';

interface PastRoomsProps {}

export const PastRooms: React.FC<PastRoomsProps> = () => {
    return (
        <Stack>
            <StackItem ml={20}>
                <Heading fontStyle="italic">
                    Past Rooms <Icon mb={1} as={BsClockHistory} />
                </Heading>
            </StackItem>
        </Stack>
    );
};
