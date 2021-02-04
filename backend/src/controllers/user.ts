import { Request, Response } from 'express';
import { statusCodes } from '../config/statusCodes';
import { userDBInteractions } from '../database/interactions/user';

export const userController = {
    index: async (_: Request, res: Response) => {
        try {
            const users = await userDBInteractions.all();
            res.status(statusCodes.SUCCESS).send(
                JSON.stringify(users, null, 2)
            );
        } catch (err) {
            res.status(statusCodes.SERVER_ERROR).send(err);
        }
    },

    findById: async (req: Request, res: Response) => {
        const id: string = req.params.id;
        try {
            const user = await userDBInteractions.find(id);
            res.status(statusCodes.SUCCESS).send(JSON.stringify(user, null, 2));
        } catch (err) {
            res.status(statusCodes.NOT_FOUND).send(err);
        }
    },

    // Find a user by username (unique from github)
    findByName: async (req: Request, res: Response) => {
        const id: string = req.params.id;
        try {
            const user = await userDBInteractions.findByName(id);
            if (!user) throw new Error('User does not exist.');
            res.status(statusCodes.SUCCESS).send(JSON.stringify(user, null, 2));
        } catch (err) {
            res.status(statusCodes.NOT_FOUND).send(err);
        }
    },

    // Fetch all users who are in the same room
    findByRoom: async (req: Request, res: Response) => {
        const id: string = req.params.id;
        try {
            const users = await userDBInteractions.findByRoom(id);
            res.status(statusCodes.SUCCESS).send(
                JSON.stringify(users, null, 2)
            );
        } catch (err) {
            res.status(statusCodes.NOT_FOUND).send(err);
        }
    },

    update: async (req: Request, res: Response) => {
        const id = req.params.id;
        const { name, username, email, avatar } = req.body;
        try {
            const user = await userDBInteractions.update({
                githubId: id,
                name: name,
                username: username,
                email: email,
                avatar: avatar,
            });
            res.status(statusCodes.SUCCESS).send(JSON.stringify(user, null, 2));
        } catch (err) {
            res.status(statusCodes.SERVER_ERROR).send(err);
        }
    },

    delete: async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            await userDBInteractions.delete(id);
            res.status(statusCodes.SUCCESS).send({
                success: true,
                msg: 'Deleted user!',
            });
        } catch (err) {
            res.status(statusCodes.SERVER_ERROR).send(err);
        }
    },
};
