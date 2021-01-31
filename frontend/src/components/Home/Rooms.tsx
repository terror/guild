import React from 'react';

import {
    Box,
    Stack,
    Wrap,
    WrapItem,
    Heading,
    Text,
    Flex,
    Avatar,
    AvatarGroup,
    Icon,
} from '@chakra-ui/react';

import { Motion } from '../Motion';
import { GrLogin } from 'react-icons/gr';
import react from '../../logos/react.svg';

interface RoomsProps {}

export const Rooms: React.FC<RoomsProps> = () => {
    return (
        <Flex m={20}>
            <Box
                p={5}
                mb={5}
                mr={5}
                bg="#E2E8F0"
                borderRadius="md"
                boxShadow="2xl"
                w="100%"
            >
                <Wrap>
                    <WrapItem>
                        <Motion src={react} />
                    </WrapItem>
                    <WrapItem>
                        <Stack>
                            <Text fontFamily="sans-serif" fontWeight="bold">
                                Having Fun with React!
                            </Text>
                            <Text>@terror</Text>
                            <AvatarGroup size="md" max={3}>
                                <Avatar
                                    name="Ryan Florence"
                                    src="https://bit.ly/ryan-florence"
                                />
                                <Avatar
                                    name="Segun Adebayo"
                                    src="https://bit.ly/sage-adebayo"
                                />
                                <Avatar
                                    name="Kent Dodds"
                                    src="https://bit.ly/kent-c-dodds"
                                />
                                <Avatar
                                    name="Prosper Otemuyiwa"
                                    src="https://bit.ly/prosper-baba"
                                />
                                <Avatar
                                    name="Christian Nwamba"
                                    src="https://bit.ly/code-beast"
                                />
                            </AvatarGroup>
                        </Stack>
                        <Icon ml={5} as={GrLogin} />
                    </WrapItem>
                </Wrap>
            </Box>
            <Stack>
                <Heading>Create Rooms, Build and Play.</Heading>
                <Text>
                    Guild lets you create rooms so you can invite friends, share
                    and broadcast to a variety of people within the community.
                </Text>
            </Stack>
        </Flex>
    );
};
