import express, { Router, Request, Response } from 'express';
import { statusCodes } from '../config/statusCodes';
import { passport } from '../middleware/auth';

const router: Router = express.Router();
const CLIENT_HOME_PAGE_URL = 'http://localhost:3000/';

router.get('/login', passport.authenticate('github'));

router.get('/logout', (req: Request, res: Response) => {
    req.logout();
    res.redirect(CLIENT_HOME_PAGE_URL);
});

router.get('/login/success', (req: Request, res: Response) => {
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
});

router.get('/login/failed', (_: Request, res: Response) => {
    res.status(statusCodes.UNAUTHORIZED).send({
        success: false,
        message: 'Failed to authenticate.',
    });
});

router.get(
    '/return',
    passport.authenticate('github', {
        failureRedirect: '/login/failed',
        successRedirect: CLIENT_HOME_PAGE_URL,
    })
);

export default router;
