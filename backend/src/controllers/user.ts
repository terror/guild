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
            res.status(statusCodes.SERVER_ERROR).send(err);
        }
    },
};
