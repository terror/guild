import express, { Router } from 'express';
import { userController } from '../controllers/user';

const router: Router = express.Router();

router.get('/', userController.index);
router.get('/:id', userController.findById);

export default router;
