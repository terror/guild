import { Request, Response } from 'express';
import { statusCodes } from '../config/statusCodes';
import { CLIENT_HOME_PAGE_URL } from '../../constants';

export const authController = {
    logout: (req: Request, res: Response) => {
        req.logout();
        res.redirect(CLIENT_HOME_PAGE_URL);
    },

    loginSuccess: (req: Request, res: Response) => {
        if (req.user) {
            res.status(statusCodes.SUCCESS).send({
                success: true,
                message: 'User has successfully authenticated.',
                user: req.user,
                cookies: req.cookies,
            });
            return;
        }
        res.status(statusCodes.UNAUTHORIZED).send({
            success: false,
            message: 'User is unauthorized.',
        });
    },

    loginFailed: (_: Request, res: Response) => {
        res.status(statusCodes.UNAUTHORIZED).send({
            success: false,
            message: 'Failed to authenticate.',
        });
    },
};
