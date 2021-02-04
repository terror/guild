import express, { Router } from 'express';
import { userController } from '../controllers/user';
import { isAuthenticated } from '../middleware/auth';

const router: Router = express.Router();

router.get('/', userController.index);
router.get('/:id', userController.findByName);
router.get('/room/:id', isAuthenticated, userController.findByRoom);
router.put('/:id', isAuthenticated, userController.update);
router.delete('/:id', isAuthenticated, userController.delete);

export default router;
