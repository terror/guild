import { Request, Response } from 'express';
import { roomDBInteractions } from '../database/interactions/room';
import { IRoom } from '../interfaces';
import { statusCodes } from '../config/statusCodes';

export const roomController = {
    index: async (_: Request, res: Response) => {
        try {
            const rooms = await roomDBInteractions.all();
            res.status(statusCodes.SUCCESS).send(
                JSON.stringify(rooms, null, 2)
            );
        } catch (err) {
            res.status(statusCodes.SERVER_ERROR).send(err);
        }
    },
    create: async (req: Request, res: Response) => {
        const { name, topic, members }: IRoom = req.body;
        try {
            const room = roomDBInteractions.create({
                name,
                topic,
                members,
            });
            res.status(statusCodes.SUCCESS).send(JSON.stringify(room, null, 2));
        } catch (err) {
            res.status(statusCodes.SERVER_ERROR).send(err);
        }
    },
};
