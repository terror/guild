import React, { useEffect, useState } from 'react';

import { api } from '../ts/api';
import { IUser } from '../ts/interfaces';
import { parseISODate } from '../ts/utils';

import { Navbar } from '../components/Navbar';
import { ErrorMessage } from '../components/ErrorMessage';

import {
    Box,
    Image,
    Stack,
    Text,
    Center,
    StackItem,
    Heading,
    Wrap,
    Divider,
} from '@chakra-ui/react';

interface ProfileProps {
    match: any;
}

export const Profile: React.FC<ProfileProps> = ({ match }) => {
    const { id } = match.params;
    const [user, setUser] = useState<IUser>();
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            setError('');
            try {
                const { data } = await api.get(`/users/${id}`);
                setUser(data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchUser();
    }, [id]);

    return (
        <div>
            <Navbar />
            {error ? (
                <Box w="50%" m="auto">
                    <ErrorMessage title={'User not found'} msg={error} />
                </Box>
            ) : (
                <>
                    <Center mb={10}>
                        <Stack>
                            <Wrap>
                                <StackItem mr={5}>
                                    <Image
                                        borderRadius="full"
                                        border="2px"
                                        borderColor="gray.200"
                                        boxSize="150px"
                                        src={user?.avatar}
                                    />
                                </StackItem>
                                <StackItem alignSelf="center">
                                    <Heading as="h2" size="lg">
                                        {user?.name}
                                    </Heading>
                                    <Text>@{user?.username}</Text>
                                    <Text mt={2}>
                                        Joined on{' '}
                                        {parseISODate(user?.createdAt)}
                                    </Text>
                                </StackItem>
                            </Wrap>
                        </Stack>
                    </Center>
                    <Divider w="80%" m="auto" />
                </>
            )}
        </div>
    );
};
