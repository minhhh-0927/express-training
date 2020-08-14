import express from 'express';
const router = express.Router();

import UserController from './controllers';

const controller = new UserController();

router.get('/', controller.listUser);
router.get('/:id', controller.retrieveUser);

export default router;