import React, { useContext, createContext, useState, useEffect } from 'react';

import { api } from '../ts/api';

interface RoomProviderProps {}

const RoomContext = createContext({});

export const useRoom = () => {
    return useContext(RoomContext);
};

export const RoomProvider: React.FC<RoomProviderProps> = ({
    children,
}: any) => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const { data } = await api.get('/rooms');
                setRooms(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchRooms();
        setLoading(false);
    }, []);

    const value = {
        rooms,
    };

    return (
        <RoomContext.Provider value={value}>
            {!loading && children}
        </RoomContext.Provider>
    );
};
