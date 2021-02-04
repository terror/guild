import React from 'react';

import { RoomProvider } from '../../../providers/RoomProvider';

import { AllRooms } from './AllRooms';
import { HotRooms } from './HotRooms';
import { PastRooms } from './PastRooms';
import { Wrap, WrapItem } from '@chakra-ui/react';

interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
    return (
        <RoomProvider>
            <Wrap display="flex" justifyContent="space-evenly">
                <WrapItem>
                    <AllRooms />
                </WrapItem>
                <WrapItem>
                    <HotRooms />
                </WrapItem>
                <WrapItem>
                    <PastRooms />
                </WrapItem>
            </Wrap>
        </RoomProvider>
    );
};
