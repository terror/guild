import express, { Router } from 'express';
import { passport } from '../middleware/auth';
import { authController } from '../controllers/auth';
import { CLIENT_HOME_PAGE_URL } from '../../constants';

const router: Router = express.Router();

router.get('/login', passport.authenticate('github'));
router.get('/logout', authController.logout);
router.get('/login/success', authController.loginSuccess);
router.get('/login/failed', authController.loginFailed);
router.get(
    '/return',
    passport.authenticate('github', {
        failureRedirect: '/login/failed',
        successRedirect: CLIENT_HOME_PAGE_URL,
    })
);

export default router;
