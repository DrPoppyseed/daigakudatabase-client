import express from 'express'
import SchoolsController from '../adapters/controllers/schoolsController'
import schoolsStoreImpl from '../drivers/databases/schoolsStoreImpl'
import authenticateJWT from '../middleware/authenticateJWT'

const schoolsRouter = express.Router()

const schoolsController = new SchoolsController(schoolsStoreImpl)

schoolsRouter.get('/', authenticateJWT, schoolsController.getSchools)

export default schoolsRouter
