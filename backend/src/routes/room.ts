import express, { Router } from 'express';
// import { isAuthenticated } from '../middleware/auth';
import { roomController } from '../controllers/room';

const router: Router = express.Router();

router.get('/', roomController.index);
router.post('/', roomController.create);

export default router;
