import { User } from '../models/user';
import { IUser } from '../../interfaces';

export const userDBInteractions = {
    all: () => {
        return User.findAll();
    },

    findOrCreate: (user: IUser) => {
        return User.findOrCreate({
            where: {
                id: user.githubId,
            },
            defaults: {
                name: user.name,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
            },
        });
    },

    find: (id: string) => {
        return User.findOne({
            where: {
                id: id,
            },
        });
    },

    findByName: (name: string) => {
        return User.findOne({
            where: {
                username: name,
            },
        });
    },

    findByRoom: (roomId: string) => {
        return User.findAll({
            where: {
                roomId: roomId,
            },
        });
    },

    update: (user: IUser) => {
        return User.update(
            {
                name: user.name,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
            },
            {
                where: {
                    id: user.githubId,
                },
            }
        );
    },

    delete: (id: string) => {
        return User.destroy({
            where: {
                id: id,
            },
        });
    },
};
