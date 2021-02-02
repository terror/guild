import React from 'react';

import {
    Box,
    Stack,
    Wrap,
    WrapItem,
    Heading,
    Text,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    Button,
    Icon,
} from '@chakra-ui/react';

import { Motion } from '../Motion';
import { GrLogin } from 'react-icons/gr';
import react from '../../logos/react.svg';

const styles = {
    box: {
        p: 5,
        mb: 5,
        mr: 5,
        borderRadius: 'md',
        boxShadow: '2xl',
    },
    simpleGrid: {
        m: 20,
        columns: [1, null, 2],
    },
    text: {
        fontSize: 'xl',
    },
};

interface RoomsProps {}

export const Rooms: React.FC<RoomsProps> = () => {
    return (
        <SimpleGrid {...styles.simpleGrid}>
            <Box {...styles.box}>
                <Wrap>
                    <WrapItem>
                        <Motion src={react} />
                    </WrapItem>
                    <WrapItem>
                        <Stack>
                            <Heading size="lg">Having fun with React!</Heading>
                            <Text {...styles.text}>@terror</Text>
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
                            <Button>
                                Hop in <Icon ml={2} as={GrLogin} />
                            </Button>
                        </Stack>
                    </WrapItem>
                </Wrap>
            </Box>
            <Stack>
                <Heading>Create Rooms, Build and Play.</Heading>
                <Text {...styles.text}>
                    Guild lets you create rooms so you can invite friends, share
                    and broadcast to a variety of people within the community.
                </Text>
            </Stack>
        </SimpleGrid>
    );
};
