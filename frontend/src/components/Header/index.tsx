import React, { useState } from 'react';

import { Box, Heading, Button, Text, Icon, Link } from '@chakra-ui/react';
import { useAuth } from '../../providers/AuthProvider';
import { AiFillGithub, AiOutlineLogin } from 'react-icons/ai';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    const { login }: any = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleClick = async () => {
        try {
            setLoading(true);
            await login();
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    return (
        <Box maxW="32rem" textAlign="center" mb={20}>
            {error ? <div>{error}</div> : null}

            <Heading as="h1" size="3xl" mb={4}>
                The social coding platform.
            </Heading>

            <Text fontSize="xl">
                Guild helps you connect with like minded individuals to
                collaborate on ideas in real-time.
            </Text>

            <Button
                size="lg"
                colorScheme="green"
                mt="24px"
                mr="24px"
                onClick={handleClick}
                isLoading={loading}
            >
                Sign in with GitHub
                <Icon ml={2} as={AiOutlineLogin} />
            </Button>

            <Link
                href="https://github.com/terror/guild"
                target="_blank"
                isExternal
                _hover={{ textDecoration: 'none' }}
            >
                <Button size="lg" mt="24px">
                    GitHub
                    <Icon ml={2} as={AiFillGithub} />
                </Button>
            </Link>
        </Box>
    );
};
