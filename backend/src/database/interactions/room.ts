import { Room } from '../models/room';
import { IRoom } from '../../interfaces';

export const roomDBInteractions = {
    all: () => {
        return Room.findAll();
    },

    create: (room: IRoom) => {
        return Room.create(room);
    },

    find: (id: string) => {
        return Room.findOne({
            where: {
                id: id,
            },
        });
    },

    delete: (id: string) => {
        return Room.destroy({
            where: {
                id: id,
            },
        });
    },
};
