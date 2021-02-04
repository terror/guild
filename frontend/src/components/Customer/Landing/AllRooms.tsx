import React from 'react';

import { useRoom } from '../../../providers/RoomProvider';

import {
    Center,
    Heading,
    Icon,
    Stack,
    StackItem,
    Text,
} from '@chakra-ui/react';

import { BiGlobe } from 'react-icons/bi';
import { RoomCard } from './RoomCard';

interface AllRoomsProps {}

export const AllRooms: React.FC<AllRoomsProps> = () => {
    const { rooms }: any = useRoom();
    return (
        <Stack mr={20}>
            <StackItem align="center">
                <Heading fontStyle="italic">
                    All Rooms <Icon mb={1} as={BiGlobe} />
                </Heading>
                {rooms.length ? (
                    <Stack>
                        {rooms.map((item: any, idx: number) => {
                            return (
                                <RoomCard
                                    id={item.id}
                                    name={item.name}
                                    topic={item.topic}
                                    members={item.members}
                                    createdAt={item.createdAt}
                                />
                            );
                        })}
                    </Stack>
                ) : (
                    <Center>
                        <Text>No active rooms.</Text>
                    </Center>
                )}
            </StackItem>
        </Stack>
    );
};
