import React from 'react';
import { Box, Stack, Heading, Text, SimpleGrid, Input } from '@chakra-ui/react';

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

interface ChatsProps {}

export const Chats: React.FC<ChatsProps> = () => {
    return (
        <SimpleGrid {...styles.simpleGrid}>
            <Stack>
                <Heading>Chat, edit and suggest in real-time.</Heading>
                <Text {...styles.text}>
                    The interactive programming environment present in each room
                    enables participants to fully expand and develop new ideas.
                </Text>
            </Stack>
            <Box {...styles.box}>
                <Text fontWeight="bold" textAlign="center" mb={5}>
                    Live Chat
                </Text>
                <Stack mb={2}>
                    <Text fontStyle="italic">@Liam joined the room.</Text>
                    <Text fontStyle="italic">@Liam: 🔥</Text>
                    <Text fontStyle="italic">@Mark joined the room.</Text>
                    <Text fontStyle="italic">
                        @Mark: Let's implement quicksort!
                    </Text>
                </Stack>
                <Input variant="outline" placeholder="Send a message!" />
            </Box>
        </SimpleGrid>
    );
};
