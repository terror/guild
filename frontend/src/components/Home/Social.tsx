import React from 'react';

import {
    Box,
    Stack,
    Heading,
    Text,
    SimpleGrid,
    Avatar,
    StackItem,
    Wrap,
    Button,
} from '@chakra-ui/react';

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

interface SocialProps {}

export const Social: React.FC<SocialProps> = () => {
    return (
        <SimpleGrid {...styles.simpleGrid}>
            <Box {...styles.box}>
                <Stack>
                    <StackItem mb={3}>
                        <Wrap>
                            <Avatar
                                name="Prosper Otemuyiwa"
                                src="https://bit.ly/prosper-baba"
                            />
                            <Text ml={3} alignSelf="center">
                                Building the next generation elixir
                                applications!
                            </Text>
                            <Button ml={3} mt={2} size="sm">
                                Connect
                            </Button>
                        </Wrap>
                    </StackItem>
                    <StackItem mb={3}>
                        <Wrap>
                            <Avatar
                                name="Christian Nwamba"
                                src="https://bit.ly/code-beast"
                            />
                            <Text ml={3} alignSelf="center">
                                Building the next generation elixir
                                applications.
                            </Text>
                            <Button ml={3} mt={2} size="sm">
                                Connect
                            </Button>
                        </Wrap>
                    </StackItem>
                </Stack>
            </Box>
            <Stack>
                <Heading>
                    Interact with like minded developers worldwide.
                </Heading>
                <Text {...styles.text}>
                    Match and interact with developers all over the world who
                    share the same interests.
                </Text>
            </Stack>
        </SimpleGrid>
    );
};
