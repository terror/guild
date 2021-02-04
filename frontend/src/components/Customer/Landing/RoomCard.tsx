import React, { useEffect, useState } from 'react';
import react from '../../../logos/react.svg';

import {
    StackItem,
    Button,
    Avatar,
    AvatarGroup,
    Heading,
    Icon,
    Stack,
    Wrap,
    WrapItem,
    Text,
} from '@chakra-ui/react';

import { parseISODate } from '../../../ts/utils';
import { api } from '../../../ts/api';
import { GrLogin } from 'react-icons/gr';
import { Motion } from '../../Motion';
import { useHistory } from 'react-router-dom';

interface RoomCardProps {
    id: number;
    name: string;
    topic: string;
    members: number;
    createdAt: string;
}

export const RoomCard: React.FC<RoomCardProps> = ({
    id,
    name,
    topic,
    members,
    createdAt,
}) => {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const findUsersByRoom = async () => {
            try {
                const { data } = await api.get(`/users/room/${id}`);
                setUsers(data);
            } catch (err) {
                console.log(err);
            }
        };
        findUsersByRoom();
    });

    const handleClick = () => {
        history.push(`/room/${id}`);
    };

    return (
        <StackItem p={10} boxShadow="lg" borderRadius="lg" maxWidth="500px">
            <Wrap>
                <WrapItem>
                    <Motion src={react} />
                </WrapItem>
                <WrapItem>
                    <Stack>
                        <Heading size="lg">{name}</Heading>
                        <Text>@terror</Text>
                        <Text>{parseISODate(createdAt)}</Text>
                        <AvatarGroup size="md" max={3}>
                            {users.length ? (
                                users.map((item: any, idx: number) => {
                                    return (
                                        <Avatar
                                            name={item.name}
                                            src={item.avatar}
                                        />
                                    );
                                })
                            ) : (
                                <Text>It's lonely in here!</Text>
                            )}
                        </AvatarGroup>
                        <Button onClick={handleClick}>
                            Hop in <Icon ml={2} as={GrLogin} />
                        </Button>
                    </Stack>
                </WrapItem>
            </Wrap>
        </StackItem>
    );
};
