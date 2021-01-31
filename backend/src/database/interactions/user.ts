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
};
