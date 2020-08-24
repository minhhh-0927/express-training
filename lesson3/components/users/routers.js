import express from 'express'

import UserController from './controllers.js'
const router = express.Router()

const controller = new UserController()

router.get('/', controller.listUser)
router.get('/:id', controller.retrieveUser)

export default router
